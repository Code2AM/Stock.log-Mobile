import { Box, HStack, Heading, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";


const JournalsList = ({journals}) => {

    return (
        <>
            <Box>
                <VStack>
                    <HStack>
                        <VStack>
                            <HStack>
                                <Heading>{journals.stockName}</Heading>
                                <Text>여기는 상태표시</Text>
                                </HStack>
                            <Text>매매전략(미구현)</Text>
                        </VStack>
                        <Text>{journals.lastedTradeDate}</Text>
                        <Text>상승/하락 이미지</Text>
                    </HStack>
                    <HStack>
                        <VStack>
                            <Text>물량</Text>
                            <Text>{journals.totalQuantity}</Text>
                        </VStack>
                        <VStack>
                            <Text>매매가</Text>
                            <Text>{journals.avgBuyPrice}</Text>
                        </VStack>
                        <VStack>
                            <Text>매도가</Text>
                            <Text>{journals.avgSellPrice}</Text>
                        </VStack>
                        <VStack>
                            <Text>실익</Text>
                            <Text>{journals.profit}</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </Box>
        </>
    )
}

export default JournalsList;

const styles = StyleSheet.create({
    journalsDetailContainer:{

    }
})