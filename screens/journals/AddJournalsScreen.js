import { Button, HStack, Input, NativeBaseProvider, Text, VStack, View } from "native-base";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const AddJournalsScreen = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date());

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

    return (
        <>
        <NativeBaseProvider>
                <VStack>
                    <Text>종목 이름</Text>
                    <Input/>
                    <Text>날짜 선택</Text>
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
                    <Text>매매전략</Text>
                    <Input/>
                    <Text>첫 매수가</Text>
                    <Input/>
                    <Text>첫 매수량</Text>
                    <Input/>
                    <Button>일지 등록</Button>
                </VStack>
        </NativeBaseProvider>
        </>
    )
}

export default AddJournalsScreen;