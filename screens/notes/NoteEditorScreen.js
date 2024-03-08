import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Input, NativeBaseProvider, TextArea, useToast } from "native-base";
import { useEffect, useState } from "react";
import { deleteNoteRequest, updateNoteRequest } from "../../api/notes/NotesAPI";
import { useStore } from "zustand";
import { useNotes } from "../../zustand/notes/useNotes";

const NoteEditorScreen = () => {

    const { fetchAllNotes } = useStore(useNotes);

    const [noteName, setNoteName] = useState("");
    const [noteContents, setNoteContents] = useState("");

    const route = useRoute(); // 이 부분이 누락되었을 수 있음
    const { item } = route.params;

    const navigation = useNavigation();
    const toast = useToast();

    console.log(item)

    useEffect(() => {
        if (item) {
            setNoteName(item.noteName);
            setNoteContents(item.noteContents);
        }
    }, [item])

    const handleUpdate = async () => {

        console.log("handleUpdate")

        data = {
            noteId: item.noteId,
            noteName: noteName,
            noteContents: noteContents,
            noteDate: item.noteDate,
            noteStatus: item.noteStatus,
            userId: item.userId,
        }

        const result = await updateNoteRequest(data);
        console.log(result)

        fetchAllNotes();

        toast.show({
            title: "수정 성공",
            duration: 1500,
            placement: "top",
            avoidKeyboard: true,
          })

        navigation.navigate("NotesScreen");
    }

    const handleDelete = async () => {
      
        console.log("handleUpdate")

        data = {
            noteId: item.noteId,
            noteName: noteName,
            noteContents: noteContents,
            noteDate: item.noteDate,
            noteStatus: item.noteStatus,
            userId: item.userId,
        }

        const result = await deleteNoteRequest(data);
        console.log(result)

        fetchAllNotes();

        toast.show({
            title: "삭제 성공",
            duration: 1500,
            placement: "top",
            avoidKeyboard: true,
          })

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

            <Button
                onPress={handleUpdate}
            >수정</Button>
            <Button
                onPress={handleDelete}
            >삭제</Button>
        </NativeBaseProvider>
    )
}
export default NoteEditorScreen;