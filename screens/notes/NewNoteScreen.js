import { Button, Input, NativeBaseProvider, TextArea, useToast } from "native-base";
import { useState } from "react";
import { newNoteRequest, notesRequest } from "../../api/notes/NotesAPI";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "zustand";
import { useNotes } from "../../zustand/notes/useNotes";



 
export const NewNoteScreen = () => {

    const { setNotes } = useStore(useNotes);

    const [ noteName , setNoteName ] = useState("");
    const [ noteContents , setNoteContents ] = useState("");

    const navigation = useNavigation();
    const toast = useToast();


    const handleNewNote = async () => {

        const data = {
            noteName : noteName,
            noteContents : noteContents
        }
      
        const result = await newNoteRequest(data);

        /* 사용자의 Notes들을 불러옴 */
        const fetchedNotes = await notesRequest();
        setNotes(fetchedNotes);
        
        
        toast.show({
            title: result,
            duration: 1500,
            placement: "top",
            avoidKeyboard: true,
          })

        navigation.navigate("Notes",{
            screen: "NotesScreen",
        })
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

        <Button
        onPress={handleNewNote}
        >저장</Button>
    </NativeBaseProvider>
    )
}