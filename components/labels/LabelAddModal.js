import { useToast } from "native-base";
import { useState } from "react";
import { useStore } from "zustand";
import useLabels from "../../zustand/labels/useLabels";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const LabelAddModal = ({ modalVisible }) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const { fetchAllLabels } = useStore(useLabels);

    const [labelsTitle, setLabelsTitle] = useState('');

    const toast = useToast();

    const handleNewLabel = async () => {

        // validation
        if (!labelsTitle) {
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

    return <>
    <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
      <Modal.Content maxH="212">
        <Modal.CloseButton />
        <Modal.Header>Return Policy</Modal.Header>
        <Modal.Body>
            <Box flex={1} marginTop={10} alignItems="center">
                    <Input
                        variant="underlined"
                        placeholder="라벨의 이름을 입력해주세요."
                        size="lg"
                        width={200}
                        onChangeText={setLabelsTitle}
                        value={labelsTitle}
                    />
            </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
            setModalVisible(false);
          }}>
              Cancel
            </Button>
            <Button onPress={handleNewLabel} mt={4} backgroundColor={"#B5D692"}>
                등록
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
    <Center>
      <VStack space={4}>
        {["xs", "sm", "md", "lg", "xl", "full"].map(size => {
        return <FontAwesome5 name="tags" onPress={() => handleSizeClick(size)} key={size}>{`Open ${xl} Modal`}</FontAwesome5>;
      })}
      </VStack>
    </Center>
  </>;
}

export default LabelAddModal;