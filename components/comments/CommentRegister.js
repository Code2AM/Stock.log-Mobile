import { Box, Button, Center, FormControl, Input, Modal, TextArea } from "native-base";
import { useState } from "react";
import { registCommentRequest } from "../../api/comments/CommentsAPI";

const CommentRegister = ({ journals, callComments }) => {

  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");

  const registerComment = async () => {
    console.log(comment);

    const data = {
        journals,
        comment
    }

    await registCommentRequest(data);
    await callComments();
    setShowModal(false);
  }

  return (
    <Box>
      <Button onPress={() => setShowModal(true)}>코멘트 추가하기</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>코멘트 작성</Modal.Header>
          <Modal.Body>
            <TextArea onChangeText={value => {setComment(value)}}/>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}>
                취소
              </Button>
              <Button
                onPress={
                    registerComment
                }>
                저장
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default CommentRegister;
