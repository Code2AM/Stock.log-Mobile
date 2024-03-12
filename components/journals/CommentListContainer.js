import { Box, Button, Divider, FlatList, HStack, Text, VStack } from "native-base"
import { useEffect, useState } from "react"
import { StyleSheet } from "react-native";
import { callCommentsRequest, deleteCommentRequest } from "../../api/comments/CommentsAPI";
import { useIsFocused } from "@react-navigation/native";


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
        <Box>
            <HStack>
            <VStack>
                <Text>코멘트</Text>
                <FlatList
                data={comments}
                renderItem={({item}) => {
                    return (
                            <Text>{item.comment}</Text>
                    )
                }}
                keyExtractor={(item) => item.commentId}
            />
            </VStack>
            <Divider
                bg="emerald.500"
                thickness="2"
                mx="2"
                orientation="vertical"
            />
            <VStack>
                <Text>작성일</Text>
                <FlatList
                data={comments}
                renderItem={({item}) => {
                    return (
                        <Text>{new Intl.DateTimeFormat('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(item.commentDate))}</Text>
                    )
                }}
                keyExtractor={(item) => item.commentId}
            />
            </VStack>
            <Divider
                bg="emerald.500"
                thickness="2"
                mx="2"
                orientation="vertical"
            />
            <VStack>
                <Text>기능</Text>
                <FlatList
                    data={comments}
                    renderItem={({item}) => {
                        return (
                            <Button onPress={() => deleteComment(item)}>삭제</Button>
                        )
                    }}
                    keyExtractor={(item) => item.commentId}
                />
            </VStack>
            </HStack>
            
            
        </Box>
        </>
    )
}

export default CommentListContainer