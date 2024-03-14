    import { Button, HStack, Input, NativeBaseProvider, ScrollView, Select, Text, VStack, View } from "native-base";
    import { useState } from "react";
    import DateTimePickerModal from "react-native-modal-datetime-picker";
    import { useStocks } from "../../zustand/stocks/useStocks";
    import { AutocompleteDropdown, AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
    import { createJournalsRequest } from "../../api/journals/JournalsAPI";
    import { useStrategies } from "../../zustand/strategies/useStrategies";


    const AddJournalsScreen = ({navigation}) => {

        const {stocks, fetchStocks} = useStocks();
        const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
        const [date, setDate] = useState(new Date());
        const [selectedItem, setSelectedItem] = useState(null);
        const [strategyId, setStrategyId] = useState(0);
        const [quantity, setQuantity] = useState(0);
        const [price, setPrice] = useState(0);
        const [fee, setFee] = useState(0);
        const {strategies, fetchStrategies} = useStrategies();
        const [strategy, setStrategy] = useState(null);

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

            if(strategies.length === 0){
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
                    onValueChange={setStrategy}
                    placeholder="매매전략을 선택해주세요..."
                    defaultValue=""
                    >
                    {strategies.map((item) => (
                        <Select.Item key={item.strategyId} label={item.strategyName} value={item.strategyId} />
                    ))}
                    </Select>
                </>
            )
        }

        const stocksToDataSet = () => {

            return stocks.map(item => ({
                id:item.srtnCd, 
                title:item.itmsNm
            }))
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

            if(fee <= 0){
                alert("수수료가 0% 이하일 수는 없습니다.");
                return;
            }

            if(fee >= 100){
                alert("수수료가 100%를 넘을 수 없습니다.");
            }

            if(selectedItem.title == ""){
                alert("종목명을 선택하지 않으셨습니다.");
                return;
            }

            if(price <= 0){
                alert("매수가는 0원 이하일 수 없습니다.");
                return;
            }

            if(quantity <= 0){
                alert("매수량이 존재하지 않습니다.");
                return;
            }

            if( strategy == null){
                alert("매매전략을 먼저 등록하셔야 합니다.(Settings - 매매전략)");
                return;
            }

            const data = {
                stockName:selectedItem.title,        
                journalDate:date,
                buyQuantity:quantity,        
                buyPrice:price,        
                fee:fee,
                strategyId:strategy
            }

            console.log(strategy)

            await createJournalsRequest(data);

            setSelectedItem(null);
            setStrategyId(0);
            setQuantity(0);
            setPrice(0);
            setFee(0);
            setStrategy(null);

            navigation.goBack();
        }

        return (
            <>
            <NativeBaseProvider>
                <VStack textAlign="center" alignItems="center" marginTop={5}>
                        <Text bold marginX={5} marginTop={5} fontSize={"lg"}>종목 이름</Text>
                        <View style={{zIndex:50, marginTop:5, width:"90%"}}>
                        <AutocompleteDropdownContextProvider>
                                    <AutocompleteDropdown
                                    clearOnFocus={false}
                                    closeOnBlur={true}
                                    closeOnSubmit={false}
                                    initialValue={{ id: '2' }} // or just '2'
                                    onSelectItem={setSelectedItem}
                                    dataSet={stocksToDataSet}
                                    suggestionsListContainerStyle={{
                                        position:"absolute",
                                        right:21
                                    }}
                                    inputContainerStyle={{
                                        backgroundColor:"white"
                                    }}
                                    emptyResultText="해당하는 데이터가 존재하지 않습니다."
                                    textInputProps={{placeholder:"종목명을 입력해주세요..."}}
                                />
                        </AutocompleteDropdownContextProvider>
                        </View>
                        <HStack textAlign={"center"} justifyItems={"center"} marginTop={5}>
                        <Input color={"black"} width={"70%"} value={new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(date.toString()))} isDisabled/>
                        <View>
                            <Button onPress={showDatePicker} backgroundColor={"#B5D692"} _pressed={{bgColor:"#A9C282"}}>날짜선택</Button>
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
                            <Input backgroundColor="white" placeholder="첫 매수가를 입력해주세요..." onChangeText={handlePrice} width={"100%"} InputRightElement={<Text marginRight={4}>(원)</Text>}/>
                        </HStack>
                        <Text bold marginX={5} marginTop={5} fontSize={"lg"}>첫 매수량</Text>
                        <HStack marginX={5} marginTop={2.5}>
                        <Input backgroundColor="white" placeholder="첫 매수량을 입력해주세요..." onChangeText={handleQuantity} width={"100%"} InputRightElement={<Text marginRight={4}>(주)</Text>}/>
                        </HStack>
                        <Text bold marginX={5} marginTop={5} fontSize={"lg"}>매도 수수료 설정</Text>
                        <HStack marginX={5} marginTop={2.5}>
                        <Input backgroundColor="white" placeholder="해당 일지의 매도 수수료를 설정해주세요..." onChangeText={handleFee} width={"100%"} InputRightElement={<Text marginRight={4}>(%)</Text>}/>
                        </HStack>
                        <Button onPress={submitDataToJournals} margin={5} backgroundColor={"#B5D692"} _pressed={{bgColor:"#A9C282"}}>일지 등록</Button>
                    </VStack>
                
            </NativeBaseProvider>
            </>
        )
    }

    export default AddJournalsScreen;