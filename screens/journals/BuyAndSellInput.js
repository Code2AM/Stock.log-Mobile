import { Box, Button, Center, Container, HStack, Input, NativeBaseProvider, Radio, Text, View } from "native-base";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { postBuyRequest, postSellRequest } from "../../api/journals/JournalsAPI";
import useJournals from "../../zustand/journals/useJournals";


const BuyAndSellInput = ({navigation, route}) => {

    const {journals, setJournals} = useJournals();
    
    const {item} = route.params;
    const [value, setValue] = useState(1);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date());
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

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

    const handlePrice = value => {
    setPrice(value);
    console.log(price);
    }
    
    const handleQuantity = value => {
    setQuantity(value);
    console.log(quantity);
    }

    const submitData = async () => {

        if (isNaN(price) || isNaN(quantity)) {
            alert("가격과 물량은 숫자로 입력되어야 합니다.");
            return; // 숫자가 아니면 함수 종료
        }

        let dataToSubmit;
    
        if(value === 1){
            dataToSubmit = {
                journals:item,
                buyDate:date,
                buyPrice:price,
                buyQuantity:quantity
            }
    
            await postBuyRequest(dataToSubmit);

        }else if(value === 2){
            dataToSubmit = {
                journals:item,
                sellDate:date,
                sellPrice:price,
                sellQuantity:quantity
            }

            if(dataToSubmit.sellQuantity > journals.totalQuantity){
                alert("총 보유량보다 더 큰 값을 팔 수는 없습니다.");
                return;
            }
            
            await postSellRequest(dataToSubmit);

        }else{
            console.warn("불가능한 값입니다.");
        };

        await navigation.goBack();
    }
    
    return (
        <>
        <NativeBaseProvider>
            <Box mx={2} justifyContent={"center"} alignItems={"center"}>
                <Text bold mt={5}>거래 유형</Text>
                <Radio.Group name="buySell" value={value} onChange={nextValue => {setValue(nextValue)}}>
                    <HStack my={2.5} space={5}>
                        <Radio value={1} colorScheme={"green"}>매수</Radio>
                        <Radio value={2} colorScheme={"green"}>매도</Radio>
                    </HStack>
                </Radio.Group>
                <HStack>
                    <Input color={"black"} width={"75%"} value={new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(date.toString()))} isDisabled/>
                <View>
                    <Button onPress={showDatePicker} bgColor={"#B5D692"} _pressed={{bgColor:"#A9C282"}}>날짜선택</Button>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                </HStack>
                <Text bold mt={2.5}>
                    가격
                </Text>
                <Input placeholder="가격을 입력해주세요..." onChangeText={handlePrice} InputRightElement={<Text mx={3}>원</Text>} mt={2.5} w={"95%"}/>
                <Text bold mt={2.5}>
                    물량
                </Text>
                <Input placeholder="물량을 입력해주세요..." onChangeText={handleQuantity} InputRightElement={<Text mx={3}>주</Text>} mt={2.5} w={"95%"}/>
                <Button onPress={submitData} mt={10} bgColor={"#B5D692"} _pressed={{bgColor:"#A9C282"}}>등록하기</Button>
            </Box>
        </NativeBaseProvider>
        </>
    )
}

export default BuyAndSellInput;