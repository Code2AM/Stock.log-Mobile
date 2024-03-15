import { Box, Button, Center, Container, Flex, Input, NativeBaseProvider, useToast } from "native-base"
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

        // validation
        if (!labelsTitle || !labelsTitle.trim()) {
            toast.show({
                title: "라벨 이름을 입력해주세요.",
                duration: 1500,
                placement: "top",
                avoidKeyboard: true,
            });
            return; // 함수 종료
        }

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
        navigation.navigate("LabelsScreen");
    }
    return (
        <NativeBaseProvider>
            <Box>
                <Input
                    variant="underlined"
                    placeholder="라벨의 이름을 입력해주세요."
                    size="lg"
                    width={200}
                    onChangeText={setLabelsTitle}
                    value={labelsTitle}
                />
                <Button onPress={handleNewLabel} mt={4} backgroundColor={"#B5D692"}>
                    등록
                </Button>
            </Box>
        </NativeBaseProvider>
    );
}
