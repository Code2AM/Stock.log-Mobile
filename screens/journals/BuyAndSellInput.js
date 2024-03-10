import { Button, Center, Container, HStack, Input, NativeBaseProvider, Radio, Text, View } from "native-base";
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
            <Center>
                <Container>
                    <Radio.Group name="buySell" value={value} onChange={nextValue => {setValue(nextValue)}}>
                        <HStack>
                            <Radio value={1}>매수</Radio>
                            <Radio value={2}>매도</Radio>
                        </HStack>
                    </Radio.Group>
                    <HStack>
                    <Text>{new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(date.toString()))}</Text>
                    <View>
                        <Button onPress={showDatePicker}>날짜선택</Button>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                    </HStack>
                    <Text>
                        가격
                    </Text>
                    <Input placeholder="가격을 입력해주세요..." onChangeText={handlePrice}/>
                    <Text>
                        물량
                    </Text>
                    <Input placeholder="물량을 입력해주세요..." onChangeText={handleQuantity}/>
                    <Button onPress={submitData}>등록하기</Button>
                </Container>
            </Center>
        </NativeBaseProvider>
        </>
    )
}

export default BuyAndSellInput;