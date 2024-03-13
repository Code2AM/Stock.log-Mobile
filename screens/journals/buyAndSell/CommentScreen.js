import { Input, NativeBaseProvider, ScrollView, Text } from "native-base";
import CommentListContainer from "../../../components/comments/CommentListContainer";


const CommentScreen = ({journals}) => {

    return (
        <>
        <NativeBaseProvider>
            <ScrollView style={{flex:1}}>
            <CommentListContainer journals={journals}/>
            </ScrollView>
        </NativeBaseProvider>
        </>
    )
}

export default CommentScreen;