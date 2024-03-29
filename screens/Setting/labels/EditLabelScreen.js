import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Button, Center, Input, Modal, NativeBaseProvider, Text, useToast } from "native-base";
import { useEffect, useState } from "react";
import { useStore } from "zustand";
import { labelDelete, labelUpdate } from "../../../api/labels/LabelsAPI";
import useLabels from "../../../zustand/labels/useLabels";

const EditLabelScreen = () =>{

    // 전역에서 관리하는 라벨 리스트
    const { fetchAllLabels } = useStore(useLabels);

    const [labelsTitle, setLabelsTitle] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 변수


    const toast = useToast();

    const route = useRoute(); 

    const { item } = route.params;

    const navigation = useNavigation();

    console.log(item)

    useEffect(() => {
        if (item) {
            setLabelsTitle(item.labelsTitle);
        }
    }, [item])

    const handleupdateLabel = async () => {

        if (!labelsTitle || !labelsTitle.trim()) {
            toast.show({
                title: "라벨 이름을 입력해주세요.",
                duration: 1500,
                placement: "top",
                avoidKeyboard: true,
            });
            return; // 함수 종료
        }

        console.log("update");

        // 전달할 데이터
        data = {
            labelsId: item.labelsId,
            labelsTitle: labelsTitle,
            labelsStatus: item.labelsStatus
        }
        
        // 수정 메소드
        const result = await labelUpdate(data);
        console.log(data);
        console.log("수정" + result);

        // 수정 성공시 상단에 등록 성공 출력
        toast.show({
            title: "수정 성공",
            duration: 1500,
            placement: "top",
            avoidKeyboard: true,
          })

          navigation.navigate("LabelsScreen");
          fetchAllLabels();

        // 수정 후 라벨 메인 페이지로 이동
       
    }

    // 삭제
    const handleDeleteLabel = async () => {

        console.log("update");

        // 전달할 데이터
        data = {
            labelsId: item.labelsId,
            labelsTitle: labelsTitle,
            labelsStatus: item.labelsStatus
        }
        
        // 삭제 메소드
        const result = await labelDelete(data);
        console.log(data);
        console.log("삭제" + result);

        // 수정 성공시 상단에 등록 성공 출력
        toast.show({
            title: "삭제 성공",
            duration: 1500,
            placement: "top",
            avoidKeyboard: true,
          })

          fetchAllLabels();
          setIsModalOpen(false)
        // 수정 후 라벨 메인 페이지로 이동
          navigation.navigate("LabelsScreen");
    }

    return(
        <NativeBaseProvider>
           <Box flex={1} marginTop={10} alignItems="center">
                <Input
                    variant="underlined"
                    placeholder="라벨의 이름을 입력해주세요."
                    size="lg"
                    width={200}
                    onChangeText={setLabelsTitle}
                    value={labelsTitle}
                />
                <Button onPress={handleupdateLabel} mt={4} backgroundColor={"#B5D692"}>
                    수정
                </Button>

                <Button onPress={() => setIsModalOpen(true)} mt={4} colorScheme="secondary">
                    삭제
                </Button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Content maxWidth="350" borderWidth={0}>
                    <Center mt={10}>
                        <Text fontSize="xl">정말 삭제하시겠습니까?</Text>
                    </Center>
                    <Modal.Footer mt={10}>
                        <Button w={"45%"} backgroundColor="#B5D692" mr={3} onPress={handleDeleteLabel}>삭제</Button>
                        <Button w={"45%"} variant="ghost" onPress={() => setIsModalOpen(false)}>취소</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
            </Box>
        </NativeBaseProvider>
    )
}
export default EditLabelScreen;