import { Button, Input, NativeBaseProvider, TextArea } from "native-base";

const NoteEditorScreen = () => {

    


    return(
        <NativeBaseProvider>
            <Input
                placeholder="제목을 입력해주세요"
            />

            <TextArea
                placeholder="내용을 입력해주세요"
            />

            <Button>수정</Button>
        </NativeBaseProvider>
    )
}
export default NoteEditorScreen;