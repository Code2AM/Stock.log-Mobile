import { AlertDialog, Box, Button, Center, Divider, HStack, Heading, NativeBaseProvider, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";
import { BuyDetailList, SellDetailList } from "../../components/journals/JournalsDetailList";
import { useRef, useState } from "react";
import { deleteJournalsRequest } from "../../api/journals/JournalsAPI";

const JournalDetailScreen = ({route, navigation}) => {

    let {journals} = route.params;

    const assetValue = () => {
        const value = (journals.avgBuyPrice * journals.totalQuantity)
        return value;
    }

    const totalInvestment = () => {
        const value = assetValue() + Math.abs(journals.profit);
        return value;
    }

    const inputHandler = () => {
        navigation.navigate("BuyAndSellInput", {journals});
    }

    return (
        <>
            <NativeBaseProvider>
                <Box style={styles.journalsDetailContainer}>
                    <VStack>
                        <HStack>
                            <Heading>{journals.stockName}</Heading>
                            <Text>상태 아이콘</Text>
                            <DeleteDialog journals={journals} navigation={navigation}/>
                        </HStack>                    
                        <HStack>
                            <VStack>
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
                            <Text>{journals.avgBuyPrice}</Text>
                            <Text>{journals.avgSellPrice}</Text>
                            <Text>{journals.totalQuantity}</Text>
                            <Text>{totalInvestment()}</Text>
                            <Text>{assetValue()}</Text>
                            <Text>{journals.profit}</Text>
                            <Text>{new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(journals.journalDate))}</Text>
                            <Text>{new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(journals.lastedTradeDate))}</Text>
                            </VStack>                            
                        </HStack>                        
                    </VStack>
                </Box>
                <Button onPress={inputHandler}>기록 추가</Button>
                <HStack>
                    <VStack>
                        <BuyDetailList journals = {journals}/>
                    </VStack>
                        <Divider
                            bg="emerald.500"
                            thickness="2"
                            mx="2"
                            orientation="vertical"
                        />
                    <VStack>
                        <SellDetailList journals={journals}/>
                    </VStack>
                </HStack>
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
      <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
        삭제
      </Button>
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
        marginVertical:"4%",
        backgroundColor:"white",
        padding:"5%",
        marginHorizontal:"2.5%"
    }
})