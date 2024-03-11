
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Box, Button, FlatList, HStack, Link, NativeBaseProvider, Pressable, ScrollView, Spacer, Text, VStack } from "native-base"
import { useEffect } from "react";

import { useStore } from "zustand";
import { useNotes } from "../../zustand/notes/useNotes";
import { NoteItem } from "../../components/items/NoteItem";



const NotesScreen = () => {

    const { notes } = useStore(useNotes)

    const navigation = useNavigation();

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
                    <Button onPress={handleNewNotePress} variant={Link}>노트 추가</Button>
                </Box>


        </NativeBaseProvider>
    );
}

export default NotesScreen;