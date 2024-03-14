import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NoteEditorScreen from "../../screens/notes/NoteEditorScreen";
import NotesScreen from "../../screens/notes/NotesScreen";
import { NewNoteScreen } from "../../screens/notes/NewNoteScreen";
import { StyleSheet } from "react-native";




const Stack = createNativeStackNavigator();

export const NotesStack = () => {

    return (

        <Stack.Navigator
            initialRouteName='NotesScreen'>

            <Stack.Screen
                name="NotesScreen"
                component={NotesScreen}          
                options={{
                    title: '노트',
                    headerStyle:styles.NotesHeader, 
                    headerTitleAlign:"center",
                    headerTitleStyle:styles.NotesHeaderTitleStyle
                 }}
            />

            <Stack.Screen
                name="NoteEditorScreen"
                component={NoteEditorScreen}
                options={{
                    title: '노트 수정',
                    headerStyle:styles.NotesHeader, 
                    headerTitleAlign:"center",
                    headerTitleStyle:styles.NotesHeaderTitleStyle
                }}
            />

            <Stack.Screen
                name="NewNoteScreen"
                component={NewNoteScreen}
                options={{
                    title: '새 노트',
                    headerStyle:styles.NotesHeader, 
                    headerTitleAlign:"center",
                    headerTitleStyle:styles.NotesHeaderTitleStyle
                }}
            />

        </Stack.Navigator>

    );
}

const styles = StyleSheet.create({
    NotesHeader : {
        backgroundColor:"#B5D692"
    },
    NotesHeaderTitleStyle : {
        color:"white",
        fontWeight:"bold"
    }
})