import { Box, HStack, Heading, Text, VStack } from "native-base";
import { StyleSheet, Image } from "react-native";

const JournalsList = ({journals}) => {

    const determineUpImage = () => {
      if (journals.profit > 0) {
        return <Image source={require("../../assets/icons/journals/상승.png")} alt="image" cache="reload"/>
      } else if (journals.profit < 0) {
        return <Image source={require("../../assets/icons/journals/하락.png")} alt="image" cache="reload"/>
      } else {
        return <Image source={require("../../assets/icons/journals/제로섬.png")} alt="image" cache="reload"/>
      }
    };

    return (
        <>
            <Box style={styles.journalsDetailContainer}>
                <VStack>
                    <HStack justifyContent="space-between">
                        <VStack>
                            <HStack>
                                <Heading>{journals.stockName}</Heading>
                                <Text></Text>
                                </HStack>
                            <Text>매매전략(미구현)</Text>
                        </VStack>
                        <Text>{new Intl.DateTimeFormat('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(journals.lastedTradeDate))}</Text>
                        {determineUpImage()}
                    </HStack>
                    <HStack justifyContent="space-between">
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
        marginHorizontal:"1%",
        marginBottom:"2%",
        backgroundColor:"white",
        padding:"2%"
    }
})