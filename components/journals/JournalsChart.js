import { Box, HStack, Progress, Spacer, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";

const JournalsChart = ({journals}) => {

    // 매매일지의 총 수
    const journalsLength = journals.length;

    // 해당 조건을 충족시키는 값을 배열로 받아서 길이만 표현
    const filterOpenStatus = journals.filter((journal) => {
        return journal.status == "open";
    }).length;

    const filterCloseStatus = journals.filter((journal) => {
        return journal.status == "close";
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

      const data = {
            labels: ['진행중', '익절', '손절'],
            data:[filterOpenStatus/journalsLength, filterProfitPlus/journalsLength, filterProfitMinus/journalsLength],
            colors:["#556B2F", "#078a00", "#ff0000"]
      };

  return (
    <>
    <Box style={styles.graphs} p={2}>
        <Text bold fontSize={"lg"} color={"white"}>요약</Text>
        <VStack space={5} my={3}>
        <Progress w={350} h={3} value={data.data[0]*100} _filledTrack={{bgColor:data.colors[0]}} bgColor={"white"}/>
        <Progress w={350} h={3} value={data.data[1]*100} _filledTrack={{bgColor:data.colors[1]}} bgColor={"white"}/>
        <Progress w={350} h={3} value={data.data[2]*100} _filledTrack={{bgColor:data.colors[2]}} bgColor={"white"}/>
        </VStack>
        <Box>
            <HStack space={3}>
                <Text color={data.colors[0]} bold>진행중({data.data[0]? data.data[0]*100 : 0}%)</Text>
                <Text color={data.colors[1]} bold>익절({data.data[1]? data.data[1]*100 : 0}%)</Text>
                <Text color={data.colors[2]} bold>손절({data.data[2]? data.data[2]*100 : 0}%)</Text>
            </HStack>
        </Box>
        <VStack>
            <HStack space={2}>
                <Text bold>보유 주식량 : </Text>
                <Text>{journalsLength}주</Text>
                <Spacer/>
                <Text bold>전체 손익금 : </Text>
                <Text style={{ color: totalProfit() > 0 ? "green" : "red" }}>{totalProfit()}</Text>
            </HStack>
        </VStack>
    </Box>

    </>
  );
};

export default JournalsChart;

const styles = StyleSheet.create({
    graphs:{
        backgroundColor:"#B5D692",
        width:"100%",
        alignItems:"center",
        textAlign:"center",
        color:"white",
        marginBottom:"2%"
    }
})
