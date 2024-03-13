import { Box, Button, Divider, FlatList, HStack, Text, VStack } from "native-base"
import { useEffect, useState } from "react"
import { callCommentsRequest, deleteCommentRequest } from "../../api/comments/CommentsAPI";
import { useIsFocused } from "@react-navigation/native";
import CommentRegister from "./CommentRegister";


const CommentListContainer = ({journals}) => {

    const [comments, setComments] = useState([]);

    const callComments = async () => {
        const commentList = await callCommentsRequest(journals);
        setComments(commentList);
    }

    // 일단 이렇게 함
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            callComments();
        }
    }, [isFocused]);

    const deleteComment = async (item) => {
        await deleteCommentRequest(item);
        await callComments();
    }
    
    return (
        <>
        <Box style={{backgroundColor:"white", minHeight:400 ,maxHeight:420}}>
            <VStack>
                <HStack>
                    <VStack>
                        <Text>코멘트</Text>
                        {comments.map((item, index) => (
                            <Text key={index}>{item.comment}</Text>
                        ))}
                    </VStack>
                    <Divider
                        bg="emerald.500"
                        thickness="2"
                        mx="2"
                        orientation="vertical"
                    />
                    <VStack>
                        <Text>작성일</Text>
                        {comments.map((item, index) => (
                            <Text key={index}>{new Intl.DateTimeFormat('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(item.commentDate))}</Text>
                        ))}
                    </VStack>
                    <Divider
                        bg="emerald.500"
                        thickness="2"
                        mx="2"
                        orientation="vertical"
                    />
                    <VStack>
                        <Text>기능</Text>
                        {comments.map((item, index) => (
                            <Button key={index} onPress={() => deleteComment(item)} disabled={journals.status == "close"} display={journals.status == "close"? "none" : "block"}>삭제</Button>
                        ))}
                    </VStack>
                </HStack>
                <CommentRegister journals={journals} callComments={callComments}/>
            </VStack>
        </Box>
        </>
    )
}

export default CommentListContainer