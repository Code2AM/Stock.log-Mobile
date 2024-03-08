import { Button, Divider, FlatList, HStack, Text, VStack } from "native-base";
import { useState } from "react";
import { makeRequest } from "../../api/common/Api";
import { SellRequest, buyRequest } from "../../api/journals/JournalsAPI";

export const BuyDetailList = ({ journals }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buyList, setBuyList] = useState([]);

  return (
    <>
      <Button
        onPress={async () => {
          setBuyList(await buyRequest(journals));
          console.log(buyList);
          setIsOpen(!isOpen);
        }}>
        매수기록
      </Button>
      {isOpen && (
        <HStack>
          <Text>매수날짜</Text>
          <Divider
            bg="emerald.500"
            thickness="2"
            mx="2"
            orientation="vertical"
          />
          <Text>매수가</Text>
          <Divider
            bg="emerald.500"
            thickness="2"
            mx="2"
            orientation="vertical"
          />
          <Text>매수량</Text>
        </HStack>
      )}
      {isOpen && (
        <FlatList
          data={buyList}
          renderItem={({ item }) => {
            return (
              <VStack>
                <HStack>
                  <VStack>
                    <Text>
                        {new Intl.DateTimeFormat('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(item.buyDate))}
                    </Text>
                  </VStack>
                  <Divider
                    bg="emerald.500"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <VStack>
                    <Text>{item.buyPrice}</Text>
                  </VStack>
                  <Divider
                    bg="emerald.500"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <VStack>
                    <Text>{item.buyQuantity}</Text>
                  </VStack>
                </HStack>
              </VStack>
            );
          }}
        />
      )}
    </>
  );
};

export const SellDetailList = ({ journals }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sellList, setSellList] = useState([]);

  const sellListHandler = async () => {
    setSellList(await SellRequest(journals));
    console.log(sellList);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onPress={sellListHandler}>매도기록</Button>
      {isOpen && (
        <HStack>
          <Text>매도날짜</Text>
          <Divider
            bg="emerald.500"
            thickness="2"
            mx="2"
            orientation="vertical"
          />
          <Text>매도가</Text>
          <Divider
            bg="emerald.500"
            thickness="2"
            mx="2"
            orientation="vertical"
          />
          <Text>매도량</Text>
        </HStack>
      )}
      {isOpen && (
        <FlatList
          data={sellList}
          renderItem={({ item }) => {
            return (
              <VStack>
                <HStack>
                  <VStack>
                  <Text>
                    {new Intl.DateTimeFormat('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(item.sellDate))}
                    </Text>
                  </VStack>
                  <Divider
                    bg="emerald.500"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <VStack>
                    <Text>{item.sellPrice}</Text>
                  </VStack>
                  <Divider
                    bg="emerald.500"
                    thickness="2"
                    mx="2"
                    orientation="vertical"
                  />
                  <VStack>
                    <Text>{item.sellQuantity}</Text>
                  </VStack>
                </HStack>
              </VStack>
            );
          }}
        />
      )}
    </>
  );
};
