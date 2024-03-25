import { AlertDialog, Box, Button, Center, Divider, FlatList, HStack, Text, VStack } from "native-base";
import { useEffect, useRef, useState } from "react";
import { SellRequest, buyRequest, deleteBuyRequest, deleteSellRequest } from "../../api/journals/JournalsAPI";
import { useIsFocused } from "@react-navigation/native";
import useJournals from "../../zustand/journals/useJournals";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useStore } from "zustand";
import { useUpdate } from "../../zustand/update/useUpdate";

export const BuyDetailList = ({ journals }) => {
  const [buyList, setBuyList] = useState([]);

  const { needUpdateBuy , setNeedUpdateBuy } = useStore(useUpdate);

  const [hasFetchedData, setHasFetchedData] = useState(false);

  const buyListHandler = async () => {
    setBuyList(await buyRequest(journals));
  };

  useEffect(() => {
    buyListHandler();

    console.log("RENDERED BUY")
  }, []);



  // 일단 이렇게 함
  // const isFocused = useIsFocused();
  // useEffect(() => {
  //   console.log('needUPDATE')
  //   console.log(needUpdateBuy)

  //   if (isFocused) {
  //     if (needUpdateBuy == true ) {
  //       buyListHandler();
  //       console.log(buyList);
  //     }
       
  //   }
  // }, [isFocused]);

  return (
    <>
      <Box style={{ backgroundColor: "white", minHeight: 400, maxHeight: 420 }} p={2}>
        <HStack justifyContent="center" alignItems="flex-start">
          <VStack flex={0.5}>
            <Box alignItems={"center"} bgColor={"white"} marginBottom={5} >
              <Text bold>매수날짜</Text>
            </Box>
            <FlatList
              data={buyList}
              marginLeft={0}
              renderItem={({ item }) => {
                return (
                  <VStack>
                    <Box h={"12"} my={1} px={1}>
                      <Text textAlign={"center"}>
                        {new Intl.DateTimeFormat('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(item.buyDate))}
                      </Text>
                    </Box>
                  </VStack>
                )
              }}
            />
          </VStack>
          <Divider
            bg="#C6C9CD"
            thickness="1"
            mx="2"
            orientation="vertical"
          />
          <VStack flex={0.3}>
            <Box alignItems={"center"} bgColor={"white"} marginBottom={5}>
              <Text bold>매수가</Text>
            </Box>
            <FlatList
              data={buyList}
              renderItem={({ item }) => {
                return (
                  <VStack>
                    <Box h={"12"} my={1} px={1}>
                      <Text textAlign={"center"} color={'red.500'}>{item.buyPrice}</Text>
                    </Box>
                  </VStack>
                )
              }}
            />
          </VStack>
          <Divider
            bg="#C6C9CD"
            thickness="1"
            mx="2"
            orientation="vertical"
          />
          <VStack flex={0.2}>
            <Box alignItems={"center"} bgColor={"white"} marginBottom={5}>
              <Text bold>매수량</Text>
            </Box>
            <FlatList
              data={buyList}
              renderItem={({ item }) => {
                return (
                  <VStack>
                    <Box h={"12"} my={1} px={1}>
                      <Text textAlign={"center"}>{item.buyQuantity}</Text>
                    </Box>
                  </VStack>
                )
              }}
            />
          </VStack>

          <VStack flex={0.2}>
            <Box alignItems={"center"} bgColor={"white"} marginBottom={5}>
              <Text bold></Text>
            </Box>
            <FlatList
              data={buyList}
              renderItem={({ item }) => {
                return (
                  <VStack>
                    <Box h={"12"} my={1} px={1}>
                      <DeleteButton buyId={item.buyId} journals={journals} buyListHandler={buyListHandler} />
                    </Box>
                  </VStack>
                )
              }}
            />
          </VStack>
        </HStack>
      </Box>

    </>
  );
};

export const SellDetailList = ({ journals }) => {
  const [sellList, setSellList] = useState([]);

  const sellListHandler = async () => {
    setSellList(await SellRequest(journals));
  };

  useEffect(() => {
    sellListHandler();
  },[])

  return (
    <>
      <Box style={{ backgroundColor: "white", minHeight: 400, maxHeight: 420 }} p={2}>
        <HStack justifyContent="center" alignItems="flex-start">
          <VStack flex={0.5}>
            <Box alignItems={"center"} bgColor={"white"} marginBottom={5}>
              <Text bold>매도날짜</Text>
            </Box>
            <FlatList
              data={sellList}
              renderItem={({ item }) => {
                return (
                  <VStack>
                    <Box h={"12"} my={1} px={1}>
                      <Text textAlign={"center"}>
                        {new Intl.DateTimeFormat('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(item.sellDate))}
                      </Text>
                    </Box>
                  </VStack>
                )
              }}
            />
          </VStack>
          <Divider
            bg="#C6C9CD"
            thickness="1"
            mx="2"
            orientation="vertical"
          />
          <VStack flex={0.3}>
            <Box alignItems={"center"} bgColor={"white"} marginBottom={5}>
              <Text bold>매도가</Text>
            </Box>
            <FlatList
              data={sellList}
              renderItem={({ item }) => {
                return (
                  <VStack>
                    <Box h={"12"} my={1} px={1} >
                      <Text textAlign={"center"} color={"blue.500"}>{item.sellPrice}</Text>
                    </Box>

                  </VStack>
                )
              }}
            />
          </VStack>
          <Divider
            bg="#C6C9CD"
            thickness="1"
            mx="2"
            orientation="vertical"
          />
          <VStack flex={0.2}>
            <Box alignItems={"center"} bgColor={"white"} marginBottom={5}>
              <Text bold>매도량</Text>
            </Box>
            <FlatList
              data={sellList}
              renderItem={({ item }) => {
                return (
                  <VStack>
                    <Box h={"12"} my={1} px={1}>
                      <Text textAlign={"center"}>{item.sellQuantity}</Text>
                    </Box>
                  </VStack>
                )
              }}
            />
          </VStack>
          
          <VStack flex={0.2}>
            <Box alignItems={"center"} bgColor={"white"} marginBottom={5}>
              <Text bold></Text>
            </Box>
            <FlatList
              data={sellList}
              renderItem={({ item }) => {
                return (
                  <VStack>
                    <Box h={"12"} my={1} px={1}>
                      <DeleteButton sellId={item.sellId} journals={journals} sellListHandler={sellListHandler} />
                    </Box>
                  </VStack>
                )
              }}
            />
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export const DeleteButton = ({ buyId, sellId, buyListHandler, sellListHandler, journals }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const { setJournals } = useJournals();

  const onClose = () => setIsOpen(false);

  const corfirmDelete = async () => {
    if (buyId) {
      const buyJson = {
        buyId: buyId
      }
      await deleteBuyRequest(buyJson);
    }

    if (sellId) {
      const sellJson = {
        sellId: sellId,
        journalId: journals.journalId
      }
      console.log(sellJson)
      await deleteSellRequest(sellJson);
    }

    onClose();

    await setJournals();
    await buyListHandler(journals);
    await sellListHandler(journals);
  }

  const cancelRef = useRef(null);

  return (
    <Center>
      <MaterialCommunityIcons
        name="delete-outline"
        color={isPressed ? "red" : "#C6C9CD"}
        size={25}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={() => setIsOpen(!isOpen)}
        disabled={journals.status == "close"}
        display={journals.status == "close" ? "none" : "block"}
        my={1} />
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>경고</AlertDialog.Header>
          <AlertDialog.Body>
            정말 기록을 삭제하시겠습니까?
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
    </Center>
  )

}