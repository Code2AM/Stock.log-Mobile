import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Input, NativeBaseProvider, useToast } from "native-base";
import { useEffect, useState } from "react";
import { useStore } from "zustand";
import { labelDelete, labelUpdate } from "../../../api/labels/LabelsAPI";
import useLabels from "../../../zustand/labels/useLabels";

const EditLabelScreen = () =>{

    // 전역에서 관리하는 라벨 리스트
    const { fetchAllLabels } = useStore(useLabels);

    const [labelsTitle, setLabelsTitle] = useState('');

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

          fetchAllLabels();

        // 수정 후 라벨 메인 페이지로 이동
        navigation.navigate("Settings",{
            screen: "LabelsScreen",
        })
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

        // 수정 후 라벨 메인 페이지로 이동
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
            <Button onPress={handleupdateLabel}>수정</Button>
            <Button onPress={handleDeleteLabel}>삭제</Button>
        </NativeBaseProvider>
    )
}
export default EditLabelScreen;