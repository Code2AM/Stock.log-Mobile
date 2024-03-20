import { AlertDialog, Button, Center, Pressable } from "native-base"
import { useRef, useState } from "react";
import { Image } from "react-native"
import { changeJournalsStatusRequest } from "../../api/journals/JournalsAPI";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TradeCloseButton = ({ journals, navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const onClose = () => setIsOpen(false);

  const corfirmChange = async () => {
    await changeJournalsStatusRequest(journals);
    navigation.goBack();
  }

  const cancelRef = useRef(null);

  return (
    <>
      <Pressable
       onPress={() => setIsOpen(!isOpen)} disabled={journals.status === "close"} marginTop={1}
       onPressIn={() => setIsPressed(true)}
       onPressOut={() => setIsPressed(false)}
       >
        {journals.status === "open" ? (
          <MaterialCommunityIcons name="note-check-outline" size={50} color={isPressed ? "lightgreen" : "green"} />
        ) : journals.status === "close" ? (
          <MaterialCommunityIcons name="note-check" size={50} color={"red"} />
        ) : (
          null // 다른 상황에 대한 처리가 필요한 경우 추가할 수 있습니다.
        )}
      </Pressable>
      <Center>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>경고</AlertDialog.Header>
            <AlertDialog.Body>
              정말 거래를 종료하시겠습니까?
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                  취소
                </Button>
                <Button colorScheme="danger" onPress={corfirmChange}>
                  확인
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
    </>
  )
}

export default TradeCloseButton;