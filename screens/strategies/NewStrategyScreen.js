import { useNavigation } from "@react-navigation/core";
import { useStrategies } from "../../zustand/strategies/useStrategies";
import { newStrategyRequest } from "../../api/strategies/StrategiesAPI";
import { useStore } from "zustand";
import { useState } from "react";
import { Button, Input, NativeBaseProvider, useToast } from "native-base";




export const NewStrategyScreen = () => {
    const { fetchStrategies } = useStore(useStrategies);

    const [ strategyName , setStrategyName ] = useState("");


    const navigation = useNavigation();
    const toast = useToast();


    const handleNewStrategy = async () => {

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
        <Input
            placeholder="매매전략의 제목을 입력해주세요" 
            value={strategyName}
            onChangeText={setStrategyName}
        />

        <Button
        onPress={handleNewStrategy}
        >저장</Button>
    </NativeBaseProvider>
    )
}





