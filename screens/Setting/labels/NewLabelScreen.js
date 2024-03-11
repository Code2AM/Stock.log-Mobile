import { Button, Input, NativeBaseProvider, useToast } from "native-base"
import { labelAdd } from "../../../api/labels/LabelsAPI";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useStore } from "zustand";
import useLabels from "../../../zustand/labels/useLabels";

export const NewLabelScreen = () =>{

    const { fetchAllLabels } = useStore(useLabels);

    const [labelsTitle, setLabelsTitle] = useState('');


    const toast = useToast();

    const navigation = useNavigation();

    const handleNewLabel = async () => {

        // 전달할 데이터
        data = {
            labelsTitle : labelsTitle
        }
        
        // 등록 메소드
        const result = await labelAdd(data);

        // 성공시 상단에 등록 성공 출력
        toast.show({
            title: "등록 성공",
            duration: 1500,
            placement: "top",
            avoidKeyboard: true,
          })

          fetchAllLabels();

        // 등록 후 라벨 메인 페이지로 이동
        navigation.navigate("Settings",{
            screen: "LabelsScreen",
        })
    }

    return(
        <NativeBaseProvider>
            <Input
             placeholder="라벨의 이름을 입력해주세요."
             value={labelsTitle}
             onChangeText={setLabelsTitle}
             />
            <Button onPress={handleNewLabel}>등록</Button>
        </NativeBaseProvider>
    )
}
