
import { Button, NativeBaseProvider } from "native-base"

const NotesScreen = ({navigation}) => {

    const handleNewNotePress = () => {
        navigation.navigate("NoteEditorScreen");
    };

    return (
        <NativeBaseProvider>
            <Button onPress={handleNewNotePress}>노트 추가</Button>
        </NativeBaseProvider>
    );
}

export default NotesScreen;