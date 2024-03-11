import { Button, HStack, Input, NativeBaseProvider, Text, VStack, View } from "native-base";
import { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useStocks } from "../../zustand/stocks/useStocks";
import { AutocompleteDropdown, AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
import { createJournalsRequest } from "../../api/journals/JournalsAPI";


const AddJournalsScreen = ({navigation}) => {

    const {stocks} = useStocks();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date());
    const [selectedItem, setSelectedItem] = useState(null);
    const [strategyId, setStrategyId] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [fee, setFee] = useState(0);

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

        const data = {
            stockName:selectedItem.title,        
            journalDate:date,
            strategyId:strategyId,
            buyQuantity:quantity,        
            buyPrice:price,        
            fee:fee
        }

        console.log(selectedItem.title)

        await createJournalsRequest(data);

        setSelectedItem(null);
        setStrategyId(0);
        setQuantity(0);
        setPrice(0);
        setFee(0);

        navigation.goBack();
    }

    return (
        <>
        <NativeBaseProvider>
                <VStack>
                    <Text bold>종목 이름</Text>
                    <View style={{zIndex:999}}>
                    <AutocompleteDropdownContextProvider>
                        {stocks &&
                                <AutocompleteDropdown
                                clearOnFocus={false}
                                closeOnBlur={true}
                                closeOnSubmit={false}
                                initialValue={{ id: '1' }} // or just '2'
                                onSelectItem={setSelectedItem}
                                dataSet={stocksToDataSet}
                                suggestionsListContainerStyle={{
                                    position:"absolute",
                                    top:-84
                                }}
                            />
                        }
                    </AutocompleteDropdownContextProvider>
                    </View>
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
                    <Text bold>매매전략</Text>
                    <Text bold>첫 매수가</Text>
                    <HStack>
                        <Input placeholder="첫 매수가를 입력해주세요..." onChangeText={handlePrice}/><Text>원</Text>
                    </HStack>
                    <Text bold>첫 매수량</Text>
                    <HStack>
                    <Input placeholder="첫 매수량을 입력해주세요..." onChangeText={handleQuantity}/><Text>주</Text>
                    </HStack>
                    <Text bold>매도 수수료 설정</Text>
                    <HStack>
                    <Input placeholder="해당 일지의 매도 수수료를 설정해주세요..." onChangeText={handleFee}/><Text>%</Text>
                    </HStack>
                    <Button onPress={submitDataToJournals}>일지 등록</Button>
                </VStack>
        </NativeBaseProvider>
        </>
    )
}

export default AddJournalsScreen;