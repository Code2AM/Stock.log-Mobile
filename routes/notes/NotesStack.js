import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NoteEditorScreen from "../../screens/notes/NoteEditorScreen";
import NotesScreen from "../../screens/notes/NotesScreen";
import { NewNoteScreen } from "../../screens/notes/NewNoteScreen";




const Stack = createNativeStackNavigator();

export const NotesStack = () => {

    return (

        <Stack.Navigator
            initialRouteName='NotesScreen'>

            <Stack.Screen
                name="NotesScreen"
                component={NotesScreen}
                options={{ title: '노트' }}
            />

            <Stack.Screen
                name="NoteEditorScreen"
                component={NoteEditorScreen}
            />

            <Stack.Screen
                name="NewNoteScreen"
                component={NewNoteScreen}
            />

        </Stack.Navigator>

    );
}