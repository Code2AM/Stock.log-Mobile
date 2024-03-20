
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Box, Fab, FlatList, Icon, NativeBaseProvider, ScrollView } from "native-base"
import { useEffect } from "react";
import { AntDesign } from '@expo/vector-icons';
import { useStore } from "zustand";
import { useNotes } from "../../zustand/notes/useNotes";
import { NoteItem } from "../../components/items/NoteItem";



const NotesScreen = () => {

    const { notes, fetchAllNotes } = useStore(useNotes)

    const navigation = useNavigation();

    useEffect(() =>{
        fetchAllNotes();
      },[])

      useEffect(() => {
        console.log("useEffect working");
        console.log(notes);
        if (notes.length === 0) { // 노트가 없을 경우
            navigation.navigate('NewNoteScreen'); // 노트 생성 페이지로 이동
        }
    }, [notes]);
  

    // component 마운트 될 때마다
    useEffect(() => {
        console.log("useEffect working")

        console.log(notes)
    }, [])

    // 화면이 focus 될때마다 
    useFocusEffect(() => {
        console.log("useFocusEffect working")
        console.log(notes)
    })

    const handleNewNotePress = () => {
        navigation.navigate("NewNoteScreen");
    };

    return (
        <NativeBaseProvider>
            <Box>
                    <FlatList
                        data={notes}
                        renderItem={ ({ item }) => <NoteItem item ={item}/> }
                        keyExtractor={item => item.noteId} />
                </Box>
                <Fab
                    bg={"#B5D692"}
                    onPress={handleNewNotePress}
                    renderInPortal={false}
                    shadow={5}
                    size="16"
                    icon={<Icon color="white" as={AntDesign} name="plus" size="6"/>}
                    bottom={10}
                    right={10}
                    _pressed={{backgroundColor:"lime.500"}}
                />

        </NativeBaseProvider>
    );
}

export default NotesScreen;