import { Box, Button, Center, HStack, Input, Modal, NativeBaseProvider, Select, Text, VStack, View, useToast } from "native-base";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useStocks } from "../../zustand/stocks/useStocks";
import { AutocompleteDropdown, AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import { createJournalsRequest } from "../../api/journals/JournalsAPI";
import { useStrategies } from "../../zustand/strategies/useStrategies";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useStore } from "zustand";
import { newStrategyRequest } from "../../api/strategies/StrategiesAPI";


const AddJournalsScreen = ({ navigation }) => {

    const { stocks } = useStocks();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date());
    const [selectedItem, setSelectedItem] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [fee, setFee] = useState(0);
    const { strategies, fetchStrategies } = useStrategies();
    const [strategy, setStrategy] = useState(null);
    const [query, setQuery] = useState("");

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setDate(date);
        hideDatePicker();
    };

    const strategiesRadio = () => {
        const [modalVisible, setModalVisible] = useState(false);

        const [strategyName, setStrategyName] = useState("");

        const { fetchStrategies } = useStore(useStrategies);

        const toast = useToast();

        const handleNewStrategy = async () => {
            // 입력 값이 유효한지 검증
            if (!strategyName || !strategyName.trim()) {
                // 입력 값이 없으면 에러 토스트 출력
                toast.show({
                    title: "매매전략 제목을 입력해주세요.",
                    duration: 1500,
                    placement: "top",
                    avoidKeyboard: true,
                });
                return; // 등록 시도를 중지하고 함수 종료
            }

            // 전달할 데이터
            const data = {
                strategyName: strategyName,
            }

            // 등록 메소드
            const result = await newStrategyRequest(data);

            // 성공시 토스트를 이용해 상단에 등록 성공 출력
            toast.show({
                title: "등록 성공",
                duration: 1500,
                placement: "top",
                avoidKeyboard: true,
            });

            // 유저 라벨 불러오기
            fetchStrategies();

            // 등록 후 모달 창 닫기
            setModalVisible(false);
        }


        const handleSelectChange = (value) => {
            if (value === 'addStrategy') {
                // 전략 추가 옵션을 선택했을 때 모달을 엽니다.
                setModalVisible(true);
            } else {
                // 다른 전략을 선택했을 때 선택한 전략을 설정합니다.
                setStrategy(value);
            }
        };

        if (strategies.length === 0) {
            async () => {
                await fetchStrategies();
            }
        }

        return (
            <>
                <Select
                    selectedValue={strategy}
                    width={"90%"}
                    backgroundColor={"white"}
                    accessibilityLabel="전략 선택"
                    onValueChange={handleSelectChange}
                    placeholder="매매전략을 선택해주세요..."
                    defaultValue=""
                    mt={2.5}
                >
                    {strategies.map((item) => (
                        <Select.Item key={item.strategyId} label={item.strategyName} value={item.strategyId} />
                    ))}
                    <Select.Item label="전략 추가" value="addStrategy" />
                </Select>
                {modalVisible && <Modal isOpen={modalVisible} onClose={setModalVisible}>
                    <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>매매전략 추가</Modal.Header>
                        <Modal.Body>
                            <Box flex={1} marginTop={10} alignItems="center">
                                <Input
                                    variant="underlined"
                                    placeholder="매매전략의 이름을 입력해주세요."
                                    size="lg"
                                    width={200}
                                    onChangeText={text => setStrategyName(text)}
                                />
                            </Box>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button w={"50%"} variant="ghost" colorScheme="blueGray" onPress={handleNewStrategy}>
                                    등록
                                </Button>
                                <Button w={"50%"} variant="ghost" colorScheme="blueGray" onPress={() => {
                                    setModalVisible(false);
                                }}>
                                    취소
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>}
            </>
        )
    }

    // 필터링
    const stocksToDataSet = () => {
        const data = stocks.map(item => ({
            id: item.srtnCd,
            title: item.itmsNm
        }));

        const result = data.filter(stock => {
            return stock.title.toLowerCase().includes(query.toLowerCase());
        });

        // 중복 제거
        const uniqueResult = Array.from(new Set(result.map(stock => stock.id))).map(id => {
            return result.find(stock => stock.id === id);
        });

        return uniqueResult;
    }

    const handleQuantity = value => {
        setQuantity(value);
    }

    const handlePrice = value => {
        setPrice(value);
    }

    const handleFee = value => {
        setFee(value / 100);
    }

    const submitDataToJournals = async () => {

        if (isNaN(price) || isNaN(quantity) || isNaN(fee)) {
            alert("가격과 물량, 수수료는 숫자로 입력되어야 합니다.");
            return; // 숫자가 아니면 함수 종료
        }

        if (fee <= 0) {
            alert("수수료가 0% 이하일 수는 없습니다.");
            return;
        }

        if (fee >= 100) {
            alert("수수료가 100%를 넘을 수 없습니다.");
        }

        if (selectedItem.title == "") {
            alert("종목명을 선택하지 않으셨습니다.");
            return;
        }

        if (price <= 0) {
            alert("매수가는 0원 이하일 수 없습니다.");
            return;
        }

        if (quantity <= 0) {
            alert("매수량이 존재하지 않습니다.");
            return;
        }

        if (strategy == null) {
            alert("매매전략을 먼저 등록하셔야 합니다.(Settings - 매매전략)");
            return;
        }

        const data = {
            stockName: selectedItem.title,
            journalDate: date,
            buyQuantity: quantity,
            buyPrice: price,
            fee: fee,
            strategyId: strategy
        }

        console.log(strategy)

        await createJournalsRequest(data);

        setSelectedItem(null);
        setQuantity(0);
        setPrice(0);
        setFee(0);
        setStrategy(null);

        navigation.goBack();
    }

    return (
        <>
            <NativeBaseProvider>
                <Center>
                    <Text bold marginX={5} marginTop={5} fontSize={"lg"}>종목 이름</Text>
                    <View style={{ zIndex: 50, marginTop: 5, width: "90%", overflow:"visible" }}>
                        <AutocompleteDropdownContextProvider style={{zIndex:100, overflow:"visible"}}>
                            <AutocompleteDropdown
                                clearOnFocus={false}
                                closeOnBlur={true}
                                closeOnSubmit={false}
                                initialValue={{ id: '2' }} // or just '2'
                                onChangeText={(text) => setQuery(text)}
                                onSelectItem={setSelectedItem}
                                dataSet={stocksToDataSet}
                                suggestionsListContainerStyle={{
                                    position: "absolute",
                                    right: 21,
                                    top: -112,
                                    overflow: "hidden",
                                    zIndex: 50
                                }}
                                inputContainerStyle={{
                                    backgroundColor: "white"
                                }}
                                emptyResultText="해당하는 데이터가 존재하지 않습니다."
                                textInputProps={{
                                    placeholder: "종목명을 입력해주세요..."
                                }}
                                style={{
                                    zIndex:50,
                                    overflow:"visible"
                                }}
                            />
                        </AutocompleteDropdownContextProvider>
                    </View>
                </Center>

                <KeyboardAwareScrollView>
                    <VStack textAlign="center" alignItems="center" marginTop={5}>

                        <HStack textAlign={"center"} justifyItems={"center"} marginTop={5}>
                            <Input color={"black"} width={"70%"} value={new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(date.toString()))} isDisabled />
                            <View>
                                <Button onPress={showDatePicker} backgroundColor={"#B5D692"} _pressed={{ bgColor: "#A9C282" }}>날짜선택</Button>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="datetime"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                            </View>
                        </HStack>
                        <Text bold marginX={5} marginTop={5} fontSize={"lg"}>매매전략</Text>
                        {strategiesRadio()}
                        <Text bold marginX={5} marginTop={5} fontSize={"lg"}>첫 매수가</Text>
                        <HStack marginX={5} marginTop={2.5}>
                            <Input backgroundColor="white" placeholder="첫 매수가를 입력해주세요..." onChangeText={handlePrice} width={"100%"} InputRightElement={<Text marginRight={4}>(원)</Text>} />
                        </HStack>
                        <Text bold marginX={5} marginTop={5} fontSize={"lg"}>첫 매수량</Text>
                        <HStack marginX={5} marginTop={2.5}>
                            <Input backgroundColor="white" placeholder="첫 매수량을 입력해주세요..." onChangeText={handleQuantity} width={"100%"} InputRightElement={<Text marginRight={4}>(주)</Text>} />
                        </HStack>
                        <Text bold marginX={5} marginTop={5} fontSize={"lg"}>매도 수수료 설정</Text>
                        <HStack marginX={5} marginTop={2.5}>
                            <Input backgroundColor="white" placeholder="해당 일지의 매도 수수료를 설정해주세요..." onChangeText={handleFee} width={"100%"} InputRightElement={<Text marginRight={4}>(%)</Text>} />
                        </HStack>
                        <Button onPress={submitDataToJournals} margin={5} backgroundColor={"#B5D692"} _pressed={{ bgColor: "#A9C282" }}>일지 등록</Button>
                    </VStack>
                </KeyboardAwareScrollView>

            </NativeBaseProvider>
        </>
    )
}

export default AddJournalsScreen;