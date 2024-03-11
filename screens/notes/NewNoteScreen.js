import { Box, Button, Center, Checkbox, FlatList, Input, NativeBaseProvider, Select, TextArea, useToast } from "native-base";
import { useEffect, useState } from "react";
import { newNoteRequest, notesRequest } from "../../api/notes/NotesAPI";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "zustand";
import { useNotes } from "../../zustand/notes/useNotes";
import useLabels from "../../zustand/labels/useLabels";
import LabelsSelectItem from "../../components/labels/LabelsSelectItem";



 
export const NewNoteScreen = () => {
    const { fetchAllNotes } = useStore(useNotes);
    const { labels, fetchAllLabels } = useStore(useLabels);
  
    useEffect(() => {
      fetchAllLabels();
    }, []);
  
    const [noteName, setNoteName] = useState("");
    const [noteContents, setNoteContents] = useState("");
    const [selectedLabel, setSelectedLabel] = useState(null); // 선택된 라벨 상태 추가
  
    const navigation = useNavigation();
    const toast = useToast();
  
    const handleNewNote = async () => {
      const selectedLabelValue = labels.find(label => label.labelsId === selectedLabel); // 선택된 라벨의 객체 가져오기
      const data = {
        noteName: noteName,
        noteContents: noteContents,
        labelsDTO: selectedLabelValue // 선택된 라벨의 객체를 data에 추가
      }
  
      const result = await newNoteRequest(data);
  
      fetchAllNotes();
  
      toast.show({
        title: "등록 성공",
        duration: 1500,
        placement: "top",
        avoidKeyboard: true,
      });
  
      navigation.navigate("Notes", {
        screen: "NotesScreen",
      });
    }
  
    return (
      <NativeBaseProvider>
        <Input
          placeholder="제목을 입력해주세요"
          type={"noteName"}
          value={noteName}
          onChangeText={setNoteName}
        />
  
        <TextArea
          placeholder="내용을 입력해주세요"
          type={"noteContents"}
          value={noteContents}
          onChangeText={setNoteContents}
        />
  
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
  
        <Button onPress={handleNewNote}>저장</Button>
      </NativeBaseProvider>
    );
  }