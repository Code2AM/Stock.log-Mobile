import { Box, Button, Container, HStack, Input, NativeBaseProvider, Select, TextArea, VStack, useToast } from "native-base";
import { useEffect, useState } from "react";
import { newNoteRequest, notesRequest } from "../../api/notes/NotesAPI";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "zustand";
import { useNotes } from "../../zustand/notes/useNotes";
import useLabels from "../../zustand/labels/useLabels";
import LabelAddModal from "../../components/labels/LabelAddModal";


 
export const NewNoteScreen = () => {

    const { fetchAllNotes } = useStore(useNotes);
    const { labels, fetchAllLabels } = useStore(useLabels);
    
    const [noteName, setNoteName] = useState("");
    const [noteContents, setNoteContents] = useState("");
    const [selectedLabel, setSelectedLabel] = useState(null); // 선택된 라벨 상태 추가
  
    const navigation = useNavigation();
    const toast = useToast();

    useEffect(() => {
      // 유저가 페이지 들어올 때 한 번 fetchAllLabels 메소드 작동
      fetchAllLabels();
  }, []);

    const handleNewNote = async () => {

          // validation
          if (!selectedLabel) {
            toast.show({
                title: "라벨을 정해주세요",
                duration: 1500,
                placement: "top",
                avoidKeyboard: true,
            });
            return; // 함수 종료
        }
  
           if (!noteName || !noteName.trim()) {
            toast.show({
                title: "노트 이름을 입력해주세요.",
                duration: 1500,
                placement: "top",
                avoidKeyboard: true,
            });
            return; // 함수 종료
        }

      const selectedLabelValue = labels.find(label => label.labelsId === selectedLabel); // 선택된 라벨의 객체 가져오기
      const data = {
        noteName: noteName,
        noteContents: noteContents,
        labelsDTO: selectedLabelValue // 선택된 라벨의 객체를 data에 추가
      }
  
      const result = await newNoteRequest(data);

      console.log(selectedLabel);
      console.log(selectedLabelValue);
  
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
          <Container alignItems={"center"} marginLeft={"10"} marginTop={"7"}>
              <VStack space={4} alignItems="center">
                  <Box w="80%">
                    <HStack>
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
                        <LabelAddModal/>
                      </HStack>
                  </Box>

                  <Input
                      w="90%"
                      placeholder="제목을 입력해주세요"
                      value={noteName}
                      h={"15%"}
                      onChangeText={setNoteName}
                  />

                  <TextArea
                      w="90%"
                      h={150}
                      placeholder="내용을 입력해주세요"
                      value={noteContents}
                      onChangeText={setNoteContents}
                  />

                  <HStack space={2}>
                      <Button onPress={handleNewNote} backgroundColor={"#B5D692"} w={"60%"}>저장</Button>
                  </HStack>
              </VStack>
          </Container>
      </NativeBaseProvider>
    );
  }
