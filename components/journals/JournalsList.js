import { Box, Center, HStack, Heading, Spacer, Text, VStack } from "native-base";
import { StyleSheet, Image } from "react-native";
import { strategyFindByIdRequest } from "../../api/strategies/StrategiesAPI";
import { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const JournalsList = ({ journals }) => {

    const determineUpImage = () => {
        if (journals.profit > 0) {
            // 이미지는 네이티브 베이스에서 불러올 경우 cache를 지우지 못해서 변경이 안된다.
            return <Image source={require("../../assets/icons/journals/상승.png")} alt="image" cache="reload" />
        } else if (journals.profit < 0) {
            return <Image source={require("../../assets/icons/journals/하락.png")} alt="image" cache="reload" />
        } else {
            return <Image source={require("../../assets/icons/journals/제로섬.png")} alt="image" cache="reload" />
        }
    };

    const [strategyName, setStrategyName] = useState("");
    const getStrategyName = async () => {
        const response = await strategyFindByIdRequest(journals);
        const strategyName = response;
        setStrategyName(strategyName);
    }

    getStrategyName();

    return (
        <>
            <Box style={styles.journalsDetailContainer}>
                <VStack>
                    <HStack justifyContent="space-between">
                        <VStack>
                            <HStack>
                                <Box marginRight={1} marginBottom={1}>
                                    {journals.status === "open" ? (
                                        <MaterialCommunityIcons name="note-check-outline" size={35} color={"green"} />
                                    ) : journals.status === "close" ? (
                                        <MaterialCommunityIcons name="note-check" size={35} color={"red"} />
                                    ) : (
                                        null
                                    )}
                                </Box>
                                <Heading>{journals.stockName}</Heading>

                            </HStack>
                            <Text style={styles.notImportantFont} >{strategyName}</Text>
                        </VStack>
                        <VStack>
                            <Text style={styles.notImportantFont} >{new Intl.DateTimeFormat('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit' }).format(new Date(journals.lastedTradeDate))}</Text>
                            <Text style={styles.notImportantFont} >{new Intl.DateTimeFormat('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(journals.lastedTradeDate))}</Text>
                        </VStack>
                        {determineUpImage()}
                    </HStack>
                    <HStack justifyContent="space-between">
                        <VStack>
                            <Text bold>물량</Text>
                            <Text>{journals.totalQuantity}</Text>
                        </VStack>
                        <VStack>
                            <Text bold>매매가</Text>
                            <Text>{journals.avgBuyPrice}</Text>
                        </VStack>
                        <VStack>
                            <Text bold>매도가</Text>
                            <Text>{journals.avgSellPrice}</Text>
                        </VStack>
                        <VStack>
                            <Text bold>실현손익</Text>
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
    journalsDetailContainer: {
        marginVertical: "1%",
        backgroundColor: "white",
        padding: "5%",
        marginHorizontal: "3%"
    },

    notImportantFont: {
        color: "gray",
        fontSize: 12
    }
})