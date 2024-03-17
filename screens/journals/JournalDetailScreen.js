import { AlertDialog, Box, Button, Center, Divider, HStack, Heading, NativeBaseProvider, Pressable, Text, VStack } from "native-base";
import { Image, StyleSheet } from "react-native";
import { useEffect, useRef, useState } from "react";
import { deleteJournalsRequest } from "../../api/journals/JournalsAPI";
import useJournals from "../../zustand/journals/useJournals";
import BuyAndSellTabNavigator from "./buyAndSell/BuyAndSellTabNavigator";
import { strategyFindByIdRequest } from "../../api/strategies/StrategiesAPI";
import TradeCloseButton from "../../components/journals/TradeCloseButton";

const JournalDetailScreen = ({route, navigation}) => {

    let {journalId} = route.params;

    const {journals, setJournals} = useJournals();

    const journal = journals.find((journal) => journal.journalId === journalId);
    const [strategyName, setStrategyName] = useState("");

    const getStrategyName = async () => {
      if(strategyName === ""){
        const response = await strategyFindByIdRequest(journal);
        const strategyName = response;
        setStrategyName(strategyName);
      }

      return strategyName;
    }

    const assetValue = () => {
        const value = (journal.avgBuyPrice * journal.totalQuantity)
        return value;
    }

    const totalInvestment = () => {
        const value = assetValue() + Math.abs(journal.profit);
        return value;
    }

    const inputHandler = () => {
        navigation.navigate("BuyAndSellInput", {item:journal});
    }

    const totalQuantity = () => {
      console.log(journal);
      return journal.totalBuyQuantity - journal.totalSellQuantity;
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getStrategyName();
            setJournals();
        });

        // Clean up
        return unsubscribe;
    }, [navigation]);

    return (
        <>
            <NativeBaseProvider>
                <Box style={styles.journalsDetailContainer}>
                    <VStack>
                        <HStack justifyContent={"space-between"}>
                            <Heading my={2}>{journal.stockName}</Heading>
                            <HStack space={3}>
                              <TradeCloseButton journals={journal} navigation={navigation}/>
                              <DeleteDialog journals={journal} navigation={navigation}/>
                            </HStack>
                        </HStack>                    
                        <HStack>
                            <VStack>
                                <Text bold>매매전략</Text>
                                <Text bold>매수가</Text>
                                <Text bold>매도가</Text>
                                <Text bold>보유물량</Text>
                                <Text bold>총투자금</Text>
                                <Text bold>자산가치</Text>
                                <Text bold>실익</Text>
                                <Text bold>최초거래일</Text>
                                <Text bold>최종거래일</Text>
                            </VStack>
                            <Divider
                            bg="emerald.500"
                            thickness="2"
                            mx="2"
                            orientation="vertical"
                            />
                            <VStack>
                            <Text>{strategyName}</Text>
                            <Text>{journal.avgBuyPrice}</Text>
                            <Text>{journal.avgSellPrice}</Text>
                            <Text>{totalQuantity()}</Text>
                            <Text>{totalInvestment()}</Text>
                            <Text>{assetValue()}</Text>
                            <Text>{journal.profit}</Text>
                            <Text>{new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(journal.journalDate))}</Text>
                            <Text>{new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(journal.lastedTradeDate))}</Text>
                            </VStack>                            
                        </HStack>                        
                    </VStack>
                </Box>
                <Button onPress={inputHandler} disabled={journal.status == "close"} display={journal.status == "close"? "none" : "block"} bgColor={"#B5D692"} _pressed={{bgColor:"#A9C282"}} mx={2}>기록 추가</Button>
                <BuyAndSellTabNavigator journals={journal}/>
            </NativeBaseProvider>
        </>
    )
}

export default JournalDetailScreen;

export const DeleteDialog = ({journals, navigation}) => {
    const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const corfirmDelete = async () => {
    await deleteJournalsRequest(journals);
    navigation.goBack();
  }

  const cancelRef = useRef(null);
  return <Center>
      <Pressable onPress={() => setIsOpen(!isOpen)}>
        <Image source={require("../../assets/icons/journals/delete.png")} alt="delete"/>
      </Pressable>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>경고</AlertDialog.Header>
          <AlertDialog.Body>
            정말 삭제하시겠습니까?
            </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                취소
              </Button>
              <Button colorScheme="danger" onPress={corfirmDelete}>
                삭제
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>;
}

const styles = StyleSheet.create({
    journalsDetailContainer:{
        marginVertical:"2%",
        backgroundColor:"white",
        padding:"3%",
        marginHorizontal:"2%"
    }
})