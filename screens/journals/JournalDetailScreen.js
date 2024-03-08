import { AlertDialog, Box, Button, Center, Divider, HStack, Heading, NativeBaseProvider, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";
import { BuyDetailList, SellDetailList } from "../../components/journals/JournalsDetailList";
import { useRef, useState } from "react";
import { deleteJournalsRequest } from "../../api/journals/JournalsAPI";

const JournalDetailScreen = ({route, navigation}) => {

    const {journals} = route.params;

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

    const deleteHandler = () => {

    }

    return (
        <>
            <NativeBaseProvider>
                <Box>
                    <VStack>
                        <HStack>
                            <Heading>{journals.stockName}</Heading>
                            <Text>상태 아이콘</Text>
                            <DeleteDialog journals={journals} navigation={navigation}/>
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
                                <Text>{new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(journals.journalDate))}</Text>
                            </HStack>
                            <HStack>
                                <Text>최종거래일</Text>
                                <Text>{new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(journals.lastedTradeDate))}</Text>
                            </HStack>
                        </Box>
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

})