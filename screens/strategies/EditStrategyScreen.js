import { useEffect, useState } from "react";
import { useStrategies } from "../../zustand/strategies/useStrategies";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Button, Input, NativeBaseProvider, useToast } from "native-base";
import { deleteStrategyRequest, updateStrateyRequest } from "../../api/strategies/StrategiesAPI";
import { useStore } from "zustand";


export const EditStrategyScreen = () => {
    const { fetchStrategies } = useStore(useStrategies);

    const [ strategyName , setStrategyName ] = useState("");

    const route = useRoute(); // 이 부분이 누락되었을 수 있음
    const { item } = route.params;

    const navigation = useNavigation();
    const toast = useToast();

    console.log(item)

    useEffect(() => {
        if (item) {
            setStrategyName(item.strategyName);
        }
    }, [item])

    const handleUpdate = async () => {

        console.log("handleUpdate")

// const strategyDTO = {
//   strategyId: 1,
//   strategyName: 1,
//   strategyStatus: 1,
// }

        data = {
            strategyId: item.strategyId,
            strategyName: strategyName,
            strategyStatus: item.strategyStatus,
        }

        const result = await updateStrateyRequest(data);
        console.log(result)

        fetchStrategies();

        toast.show({
            title: "수정 성공",
            duration: 1500,
            placement: "top",
            avoidKeyboard: true,
          })

        navigation.navigate("StrategiesScreen");
    }

    const handleDelete = async () => {
      
        console.log("handleDelete")

        data = {
            strategyId: item.strategyId,
            strategyName: strategyName,
            strategyStatus: item.strategyStatus,
        }

        const result = await deleteStrategyRequest(data);
        console.log(result)

        fetchStrategies();

        toast.show({
            title: "삭제 성공",
            duration: 1500,
            placement: "top",
            avoidKeyboard: true,
          })

        navigation.navigate("StrategiesScreen");

    }


    return (
        <NativeBaseProvider>
            <Input
                placeholder="제목을 입력해주세요"
                value={strategyName}
                onChangeText={setStrategyName}
            />
            <Button
                onPress={handleUpdate}
            >수정</Button>
            <Button
                onPress={handleDelete}
            >삭제</Button>
        </NativeBaseProvider>
    )
}