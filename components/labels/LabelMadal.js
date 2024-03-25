// 라벨 리스트 , 

import { Button, Center, Modal, Text, VStack } from "native-base";
import { useState } from "react";

const LabelModal = ({ labels, onSelectLabel }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(null); // 선택된 라벨 상태 추가

    const selectLabelsHandler = (labelsId, labelsTitle) => {
        setSelectedLabel(labelsTitle); // 선택된 라벨 값을 설정합니다.
        // 선택된 라벨 값 설정 후 모달 창 닫기
        setShowModal(false);

        onSelectLabel(labelsTitle);
    }
    
    return (
        <Center>
            <Button variant={"unstyled"} onPress={() => setShowModal(true)}>
                {selectedLabel ? selectedLabel : "라벨을 선택해주세요"}
            </Button>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
                <Modal.Content maxWidth="350">
                    <Modal.CloseButton />
                    <Modal.Header>라벨</Modal.Header>
                    <Modal.Body>
                        <VStack space={3}>
                            {labels.map((label) => (
                                <Text key={label.labelsId} onPress={() => selectLabelsHandler(label.labelsId, label.labelsTitle)}>
                                    {label.labelsTitle}
                                </Text>
                            ))}
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button w={"100%"} flex="1" onPress={() => setShowModal(false)}>
                            닫기
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
}

export default LabelModal;