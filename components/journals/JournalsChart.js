import { Box, HStack, Heading, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";

const JournalsChart = ({journals}) => {

    // 매매일지의 총 수
    const journalsLength = journals.length;

    // 해당 조건을 충족시키는 값을 배열로 받아서 길이만 표현
    const filterOpenStatus = journals.filter((journal) => {
        return journal.status == "open";
    }).length;

    const filterProfitPlus = journals.filter((journal) => {
        return journal.profit > 0;
    }).length;

    const filterProfitMinus = journals.filter((journal) => {
        return journal.profit < 0;
    }).length;

    const totalProfit = () => {

        const profits = journals.filter((journal) => {
            return journal.profit !== 0;
        })

        // 누적값(accumulator)을 초기값으로 0을 사용하고, 배열의 각 요소의 profit 속성을 더하여 최종적으로 총 이익을 반환
        const total = profits.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.profit;
        }, 0);

        return total;
    }

  return (
    <>
    <Box style={styles.graphs} justifyItems={"center"} alignItems={"center"}>
        <Heading>
            <VStack>
            <HStack>
                <VStack>
                    <Text></Text>
                    <Text>기록</Text>
                </VStack>
                <VStack>
                    <Text></Text>
                    <Text>진행중</Text>
                </VStack>
                <VStack>
                    <Text></Text>
                    <Text>진행중</Text>
                </VStack>
                <VStack>
                    <Text></Text>
                    <Text>진행중</Text>
                </VStack>
            </HStack>
            <Text>전체 손익금</Text>
            </VStack>
        </Heading>
    </Box>

    </>
  );
};

export default JournalsChart;

const styles = StyleSheet.create({
    graphs:{
        backgroundColor:"#B5D692",
        width:"100%",
        height:"20%",
        alignItems:"center",
        textAlign:"center",
        color:"white",
        marginBottom:"2%"
    }
})
