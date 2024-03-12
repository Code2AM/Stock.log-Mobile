import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Button, Input, NativeBaseProvider, Select, TextArea, useToast } from "native-base";
import { useEffect, useState } from "react";
import { deleteNoteRequest, updateNoteRequest } from "../../api/notes/NotesAPI";
import { useStore } from "zustand";
import { useNotes } from "../../zustand/notes/useNotes";
import useLabels from "../../zustand/labels/useLabels";

const NoteEditorScreen = () => {
    const { fetchAllNotes } = useStore(useNotes);
  
    const [noteName, setNoteName] = useState("");
    const [noteContents, setNoteContents] = useState("");
    const { labels } = useStore(useLabels);
    const [selectedLabel, setSelectedLabel] = useState(labels); // 선택된 라벨 상태 추가
  
    const route = useRoute();
    const { item } = route.params;
  
    const navigation = useNavigation();
    const toast = useToast();
  
    useEffect(() => {
      if (item) {
        setNoteName(item.noteName);
        setNoteContents(item.noteContents);
        setSelectedLabel(item.labelsDTO); // 선택된 라벨 설정
      }
    }, [item])
  
    const handleUpdate = async () => {
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
  
    const handleDelete = async () => {
      const selectedLabelValue = labels.find(label => label.labelsId === selectedLabel);
      const data = {
        noteId: item.noteId,
        noteName: noteName,
        noteContents: noteContents,
        noteDate: item.noteDate,
        noteStatus: item.noteStatus,
        userId: item.userId,
        labelsDTO: selectedLabelValue
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
        <Input
          placeholder="제목을 입력해주세요"
          value={noteName}
          onChangeText={setNoteName}
        />
  
        <TextArea
          placeholder="내용을 입력해주세요"
          value={noteContents}
          onChangeText={setNoteContents}
        />
  
        {/* 선택된 라벨 표시 및 수정 */}
        <Box maxW="300">
          <Select
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="라벨 선택"
            value={selectedLabel} // 선택된 라벨 값 설정
            onValueChange={(itemValue) => setSelectedLabel(itemValue)} // 선택된 라벨 값 변경 시 상태 업데이트
          >
            {labels.map((label) => (
              <Select.Item key={label.labelsId} label={label.labelsTitle} value={label.labelsId} />
            ))}
          </Select>
        </Box>
  
        <Button onPress={handleUpdate}>수정</Button>
        <Button onPress={handleDelete}>삭제</Button>
      </NativeBaseProvider>
    );
  }
  
  export default NoteEditorScreen;