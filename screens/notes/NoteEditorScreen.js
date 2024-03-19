import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Button, Container, Flex, HStack, Input, Modal, NativeBaseProvider, Select, Stack, TextArea, VStack, useToast } from "native-base";
import { useEffect, useState } from "react";
import { deleteNoteRequest, updateNoteRequest } from "../../api/notes/NotesAPI";
import { useStore } from "zustand";
import { useNotes } from "../../zustand/notes/useNotes";
import useLabels from "../../zustand/labels/useLabels";
import LabelAddModal from "../../components/labels/LabelAddModal";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NoteEditorScreen = () => {
  const { fetchAllNotes } = useStore(useNotes);
  const [open, setOpen] = useState(false);
  const [noteName, setNoteName] = useState("");
  const [noteContents, setNoteContents] = useState("");
  const { labels, fetchAllLabels } = useStore(useLabels);
  const [selectedLabel, setSelectedLabel] = useState(null); // 선택된 라벨 상태 추가

  const route = useRoute();
  const { item } = route.params;

  const navigation = useNavigation();
  const toast = useToast();

  useEffect(() => {
    // 유저가 페이지 들어올 때 한 번 fetchAllLabels 메소드 작동
    fetchAllLabels();
  }, []);

  useEffect(() => {
    if (item) {
      setNoteName(item.noteName);
      setNoteContents(item.noteContents);
      setSelectedLabel(item.labelsDTO); // 선택된 라벨 설정
    }
  }, [item])

  const handleUpdate = async () => {

    if (!noteName || !noteName.trim()) {
      toast.show({
        title: "노트 이름을 입력해주세요.",
        duration: 1500,
        placement: "top",
        avoidKeyboard: true,
      });
      return; // 함수 종료
    }

    const selectedLabelValue = labels.find(label => label.labelsId === selectedLabel);
    const data = {
      noteId: item.noteId,
      noteName: noteName,
      noteContents: noteContents,
      noteDate: item.noteDate,
      noteStatus: item.noteStatus,
      userId: item.userId,
      labelsDTO: selectedLabelValue // 수정된 라벨 추가
    }

    // validation
    if (!selectedLabelValue) {
      toast.show({
        title: "라벨을 선택해주세요",
        duration: 1500,
        placement: "top",
        avoidKeyboard: true,
      });
      return; // 함수 종료
    }

    const result = await updateNoteRequest(data);
    console.log(selectedLabel);
    console.log(selectedLabelValue);

    fetchAllNotes();

    toast.show({
      title: "수정 성공",
      duration: 1500,
      placement: "top",
      avoidKeyboard: true,
    });

    navigation.navigate("NotesScreen");
  }

  // 삭제
  const handleDelete = async () => {
    const data = {
      noteId: item.noteId,
      noteName: noteName,
      noteContents: noteContents,
      noteDate: item.noteDate,
      noteStatus: item.noteStatus,
      userId: item.userId,
      labelsDTO: item.labelsDTO
    }

    const result = await deleteNoteRequest(data);

    fetchAllNotes();

    toast.show({
      title: "삭제 성공",
      duration: 1500,
      placement: "top",
      avoidKeyboard: true,
    });

    navigation.navigate("NotesScreen");
  }

  return (
    <NativeBaseProvider>
      <Container alignItems={"center"} marginLeft={"10"} marginTop={"7"}>
        <Stack space={4} alignItems="center">
          <Box w="75%" flexDirection="row" zIndex={50}>
            <Box>
              <DropDownPicker
                open={open}
                setOpen={setOpen}
                items={labels.map(label => ({ label: label.labelsTitle, value: label.labelsId }))}
                value={selectedLabel}
                setValue={setSelectedLabel}
                containerStyle={{ height: 40 }}
                style={styles.dropDown}
                onChangeItem={(item) => setSelectedLabel(item.value)}
                placeholder="라벨을 선택해주세요"
              />
            </Box>
            <Box>
              <Flex>
                <LabelAddModal />
              </Flex>
            </Box>
          </Box>

          <Input
            w="100%"
            placeholder="제목을 입력해주세요"
            borderColor={"black"}
            value={noteName}
            h={"15%"}
            onChangeText={setNoteName}
          />

          <TextArea
            w="100%"
            h={200}
            placeholder="내용을 입력해주세요"
            value={noteContents}
            borderColor={"black"}
            onChangeText={setNoteContents}
          />

          <HStack space={2}>
            <Button onPress={handleUpdate} background={"#B5D692"} w={"50%"}>수정</Button>
            <MaterialCommunityIcons name="delete-outline" size={50} color="red" onPress={handleDelete} />
          </HStack>
        </Stack>
      </Container>
    </NativeBaseProvider>
  );
}

export default NoteEditorScreen;

const styles = StyleSheet.create({
  dropDown: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderColor: "gray",
  }
})