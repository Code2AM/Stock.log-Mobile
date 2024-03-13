import { Box, Button, Center, Input, Modal, ScrollView, VStack, useToast } from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useState } from "react";
import useLabels from "../../zustand/labels/useLabels";
import { useStore } from "zustand";
import { labelAdd } from "../../api/labels/LabelsAPI";

const LabelAddModal = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState("md");
  const [labelsTitle, setLabelsTitle] = useState();

  const { fetchAllLabels } = useStore(useLabels);

  const handleSizeClick = newSize => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };

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

      // 등록 후 모달 창 닫기
      setModalVisible(false);
  }

  return <>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>라벨 추가</Modal.Header>
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
                취소
              </Button>
              <Button variant="ghost" colorScheme="blueGray" onPress={handleNewLabel}>
                  등록
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Center>
        <VStack space={4}>
        <FontAwesome5 size={25} name="tags" color={"gray"} onPress={() => handleSizeClick(size)} key={size}/>
        </VStack>
      </Center>
    </>;
}

export default LabelAddModal;