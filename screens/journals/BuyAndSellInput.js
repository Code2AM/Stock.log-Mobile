import { Button, Center, Container, HStack, Input, NativeBaseProvider, Radio, Text, View } from "native-base";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { postBuyRequest, postSellRequest } from "../../api/journals/JournalsAPI";


const BuyAndSellInput = ({navigation, route}) => {
    
    const {journals} = route.params;
    const [value, setValue] = useState(1);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date());
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const [data, setData] = useState({});

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

        let dataToSubmit;
    
        if(value === 1){
            dataToSubmit = {
                journals,
                buyDate:date,
                buyPrice:price,
                buyQuantity:quantity
            }
    
            await postBuyRequest(dataToSubmit);

        }else if(value === 2){
            dataToSubmit = {
                journals,
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
        }
    
        console.log(dataToSubmit);
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
                    <View>
                        <Button onPress={showDatePicker}>날짜선택</Button>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
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