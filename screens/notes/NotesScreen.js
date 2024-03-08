
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Box, Button, FlatList, HStack, Link, NativeBaseProvider, Pressable, ScrollView, Spacer, Text, VStack } from "native-base"
import { useEffect } from "react";

import { useStore } from "zustand";
import { useNotes } from "../../zustand/notes/useNotes";
import { NoteItem } from "../../components/auth/notes/items/NoteItem";


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
            <ScrollView>


                {/* <Heading fontSize="xl" p="4" pb="3">
                    Inbox
                </Heading> */}
                <Box>
                    <FlatList
                        data={notes}
                        renderItem={ ({ item }) => <NoteItem item ={item}/> }
                        keyExtractor={item => item.noteId} />
                    <Button onPress={handleNewNotePress} variant={Link}>노트 추가</Button>
                </Box>

            </ScrollView>
        </NativeBaseProvider>
    );
}

export default NotesScreen;