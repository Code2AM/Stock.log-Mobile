import { AlertDialog, Button, Center, Divider, FlatList, HStack, Text, VStack } from "native-base";
import { useEffect, useRef, useState } from "react";
import { SellRequest, buyRequest, deleteBuyRequest, deleteSellRequest } from "../../api/journals/JournalsAPI";
import { useIsFocused } from "@react-navigation/native";
import useJournals from "../../zustand/journals/useJournals";

export const BuyDetailList = ({ journals }) => {
  const [buyList, setBuyList] = useState([]);

  const buyListHandler = async () => {
    setBuyList(await buyRequest(journals));
  };

  // 일단 이렇게 함
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
        buyListHandler();
        console.log(buyList);
    }
  }, [isFocused]);

  return (
    <>
        <HStack>
          <VStack>
          <Text>매수날짜</Text>
          <FlatList
            data={buyList}
            renderItem={({item}) => {
              return (
                <VStack>
                  <Text>
                      {new Intl.DateTimeFormat('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(item.buyDate))}
                  </Text>
                </VStack>
              )
            }}
          />
          </VStack>
          <Divider
            bg="emerald.500"
            thickness="2"
            mx="2"
            orientation="vertical"
          />
          <VStack>
            <Text>매수가</Text>
            <FlatList
              data={buyList}
              renderItem={({item}) => {
                return (
                  <VStack>
                    <Text>{item.buyPrice}</Text>
                  </VStack>
                )
              }}
            />
          </VStack>
          <Divider
            bg="emerald.500"
            thickness="2"
            mx="2"
            orientation="vertical"
          />
          <VStack>
            <Text>매수량</Text>
            <FlatList
              data={buyList}
              renderItem={({item}) => {
                return (
                  <VStack>
                    <Text>{item.buyQuantity}</Text>
                  </VStack>
                )
              }}
            />
          </VStack>          
          <Divider
            bg="emerald.500"
            thickness="2"
            mx="2"
            orientation="vertical"
          />
          <VStack>
            <Text>기능</Text>
            <FlatList
              data={buyList}
              renderItem={({item}) => {
                return (
                  <VStack>
                    <DeleteButton buyId={item.buyId} journals={journals} buyListHandler={buyListHandler}/>
                  </VStack>
                )
              }}
            />
          </VStack>
        </HStack>
    </>
  );
};

export const SellDetailList = ({ journals }) => {
  const [sellList, setSellList] = useState([]);

  const sellListHandler = async () => {
    setSellList(await SellRequest(journals));
  };

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
        sellListHandler();
        console.log(sellList);
    }
  }, [isFocused]);

  return (
    <>
        <HStack>
          <VStack>
          <Text>매도날짜</Text>
          <FlatList
            data={sellList}
            renderItem={({item}) => {
              return (
                <VStack>
                  <Text>
                      {new Intl.DateTimeFormat('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(item.sellDate))}
                  </Text>
                </VStack>
              )
            }}
          />
          </VStack>
          <Divider
            bg="emerald.500"
            thickness="2"
            mx="2"
            orientation="vertical"
          />
          <VStack>
            <Text>매수가</Text>
            <FlatList
              data={sellList}
              renderItem={({item}) => {
                return (
                  <VStack>
                    <Text>{item.sellPrice}</Text>
                  </VStack>
                )
              }}
            />
          </VStack>
          <Divider
            bg="emerald.500"
            thickness="2"
            mx="2"
            orientation="vertical"
          />
          <VStack>
            <Text>매수량</Text>
            <FlatList
              data={sellList}
              renderItem={({item}) => {
                return (
                  <VStack>
                    <Text>{item.sellQuantity}</Text>
                  </VStack>
                )
              }}
            />
          </VStack>
          <Divider
            bg="emerald.500"
            thickness="2"
            mx="2"
            orientation="vertical"
          />
          <VStack>
            <Text>기능</Text>
            <FlatList
              data={sellList}
              renderItem={({item}) => {
                return (
                  <VStack>
                    <DeleteButton sellId={item.sellId} journals={journals} sellListHandler={sellListHandler}/>
                  </VStack>
                )
              }}
            />
          </VStack>
        </HStack>
    </>
  );
};

export const DeleteButton = ({buyId, sellId, buyListHandler, sellListHandler}) => {
  const [isOpen, setIsOpen] = useState(false);

  const {setJournals} = useJournals();

  const onClose = () => setIsOpen(false);

  const corfirmDelete = async () => {
    if(buyId){
      const buyJson = {
        buyId:buyId
      }
      await deleteBuyRequest(buyJson);

      await setJournals();
      await buyListHandler(journals);
    }

    if(sellId){
      const sellJson = {
        sellId:sellId
      }
      await deleteSellRequest(sellJson);

      await setJournals();
      await sellListHandler(journals);
    }

    onClose();
  }

  const cancelRef = useRef(null);

  return (
    <Center>
          <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
            삭제
          </Button>
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