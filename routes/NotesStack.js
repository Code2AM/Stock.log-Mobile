import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NoteEditorScreen from "../screens/notes/NoteEditorScreen";
import NotesScreen from "../screens/notes/NotesScreen";

const Stack = createNativeStackNavigator();

export const NotesStack = () => {
    return (
        
        <Stack.Navigator>
            <Stack.Screen
                name="NotesScreen"
                component={NotesScreen}
                options={{ title: '노트' }}
            />
            <Stack.Screen
                name="NoteEditorScreen"
                component={NoteEditorScreen}
            />
        </Stack.Navigator>

    );
}