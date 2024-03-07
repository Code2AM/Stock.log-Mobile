import { Box, Button, HStack, Heading, NativeBaseProvider, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";
import { BuyDetailList } from "../../components/journals/JournalsDetailList";


const JournalDetailScreen = ({route}) => {

    const {journals} = route.params;

    const assetValue = () => {
        const value = (journals.avgBuyPrice * journals.totalQuantity)
        return value;
    }

    const totalInvestment = () => {
        const value = assetValue() + Math.abs(journals.profit);
        return value;
    }

    return (
        <>
            <NativeBaseProvider>
                <Box>
                    <Button>삭제</Button>
                    <VStack>
                        <HStack>
                            <Heading>{journals.stockName}</Heading>
                            <Text>상태 아이콘</Text>
                        </HStack>
                        <HStack>
                            <Text>매수가</Text>
                            <Text>{journals.avgBuyPrice}</Text>
                        </HStack>
                        <HStack>
                            <Text>매도가</Text>
                            <Text>{journals.avgSellPrice}</Text>
                        </HStack>
                        <HStack>
                            <Text>보유물량</Text>
                            <Text>{journals.totalQuantity}</Text>
                        </HStack>
                        <HStack>
                            <Text>총투자금</Text>
                            <Text>{totalInvestment()}</Text>
                        </HStack>
                        <HStack>
                            <Text>자산가치</Text>
                            <Text>{assetValue()}</Text>
                        </HStack>
                        <HStack>
                            <Text>실익</Text>
                            <Text>{journals.profit}</Text>
                        </HStack>
                        <Box>
                            <HStack>
                                <Text>최초거래일</Text>
                                <Text>{journals.journalDate}</Text>
                            </HStack>
                            <HStack>
                                <Text>최종거래일</Text>
                                <Text>{journals.lastedTradeDate}</Text>
                            </HStack>
                        </Box>
                    </VStack>
                </Box>
                <BuyDetailList journals = {journals}/>
            </NativeBaseProvider>
        </>
    )
}

export default JournalDetailScreen;

const styles = StyleSheet.create({

})