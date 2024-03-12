import { NativeBaseProvider, Text } from "native-base";
import CommentListContainer from "../../../components/journals/CommentListContainer";


const CommentScreen = ({journals}) => {

    return (
        <>
        <NativeBaseProvider>
        <CommentListContainer journals={journals}/>
        </NativeBaseProvider>
        </>
    )
}

export default CommentScreen;