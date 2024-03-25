import { Box, Button, Center, Input, Modal, VStack, useToast } from "native-base";
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
      // 입력 값이 유효한지 검증
      if (!labelsTitle || !labelsTitle.trim()) {
        // 입력 값이 없으면 에러 토스트 출력
        toast.show({
          title: "라벨 제목을 입력해주세요.",
          duration: 1500,
          placement: "top",
          avoidKeyboard: true,
        });
        return; // 등록 시도를 중지하고 함수 종료
      }
  
      // 전달할 데이터
      const data = {
        labelsTitle: labelsTitle
      };
      
      // 등록 메소드
      const result = await labelAdd(data);
  
      // 성공시 토스트를 이용해 상단에 등록 성공 출력
      toast.show({
        title: "등록 성공",
        duration: 1500,
        placement: "top",
        avoidKeyboard: true,
      });
  
      // 유저 라벨 불러오기
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
                    onChangeText={text => setLabelsTitle(text)}
                />
            </Box>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button w={"50%"} variant="ghost" colorScheme="blueGray" onPress={handleNewLabel}>
                  등록
              </Button>
              <Button w={"50%"} variant="ghost" colorScheme="blueGray" onPress={() => {
                  setModalVisible(false);
                }}>
                취소
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Center>
        <VStack space={4}>
        <Button
         onPress={() => handleSizeClick(size)} variant={"link"} color={"#B5D692"} 
         >
          라벨 추가
        </Button>
        </VStack>
      </Center>
    </>;
}

export default LabelAddModal;