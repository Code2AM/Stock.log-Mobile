import { Avatar, Box, Button, FlatList, HStack, Heading, Spacer, Text, VStack } from "native-base";
import { useStore } from "zustand";
import { useStocks } from "../../../zustand/stocks/useStocks";



export const TestScreen = () => {

    const { fetchStocks , stocks } = useStocks()
    

    const handleStocks = async () => {
      
       await fetchStocks();

       console.log("This is stocks")
        console.log(stocks)
    }

    return (
        <Button
            onPress={handleStocks}
        >주식 불러오기</Button>
    )

};
