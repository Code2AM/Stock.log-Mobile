import { useNavigation } from "@react-navigation/core";
import { useStrategies } from "../../zustand/strategies/useStrategies";
import { newStrategyRequest } from "../../api/strategies/StrategiesAPI";
import { useStore } from "zustand";
import { useState } from "react";
import { Box, Button, Input, NativeBaseProvider, useToast } from "native-base";




export const NewStrategyScreen = () => {
    
    const { fetchStrategies } = useStore(useStrategies);

    const [ strategyName , setStrategyName ] = useState("");


    const navigation = useNavigation();
    const toast = useToast();


    const handleNewStrategy = async () => {

        if (!strategyName || !strategyName.trim()) {
            toast.show({
              title: "매매전략 이름을 입력해주세요.",
              duration: 1500,
              placement: "top",
              avoidKeyboard: true,
            });
            return; // 함수 종료
          }

        const data = {
            strategyName : strategyName,
        }
      
        const result = await newStrategyRequest(data);

        console.log(result)

        await fetchStrategies();
        
        toast.show({
            title: "등록 성공",
            duration: 1500,
            placement: "top",
            avoidKeyboard: true,
          })

        navigation.navigate("StrategiesScreen")
    }
  

    return (
        <NativeBaseProvider>
        <Box flex={1} marginTop={10} alignItems="center">
            <Input
                variant="underlined"
                placeholder="매매 전략의의 이름을 입력해주세요."
                size="lg"
                width={200}
                onChangeText={setStrategyName}
                value={strategyName}
            />
            <Button onPress={handleNewStrategy} mt={4} backgroundColor={"#B5D692"}>
                등록
            </Button>
        </Box>
    </NativeBaseProvider>
    )
}





