import { Button, Divider, FlatList, HStack, Text, VStack } from "native-base";
import { useState } from "react"
import { makeRequest } from "../../api/common/Api";


export const BuyDetailList = ({journals}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [buyList, setBuyList] = useState([]);

    const buyRequest = async () => {
        try {
            const response = await makeRequest("/buy/list", "POST", {...journals});
        return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Button onPress={async () => {setBuyList(await buyRequest()); console.log(buyList); setIsOpen(!isOpen);}}>매수기록</Button>
            {isOpen && (
                <HStack>
                    <Text>매수날짜</Text>
                    <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
                    <Text>매수가</Text>
                    <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
                    <Text>매수량</Text>
                </HStack>
            )}
            {isOpen && (
                <FlatList
                    data={buyList}
                    renderItem={({item}) => {
                    return (
                        <VStack>
                            <HStack>
                                <VStack>
                                    <Text>{item.buyDate}</Text>
                                </VStack>
                                <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
                                <VStack>
                                    <Text>{item.buyPrice}</Text>
                                </VStack>
                                <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
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
    )
}