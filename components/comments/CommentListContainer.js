import {  Box, Button, Divider,  HStack, Pressable, Text, VStack } from "native-base"
import { useEffect, useState } from "react"
import { callCommentsRequest, deleteCommentRequest } from "../../api/comments/CommentsAPI";
import { useIsFocused } from "@react-navigation/native";
import CommentRegister from "./CommentRegister";
import { Alert } from "react-native";


const CommentListContainer = ({journals}) => {

    const [comments, setComments] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

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
        <Box style={{backgroundColor:"white", minHeight:400 ,maxHeight:420}} p={2}>
            <VStack>
                <HStack justifyContent="center" alignItems="flex-start">
                    <VStack flex={1.5}>
                        <Box alignItems={"center"} bgColor={"lime.200"}>
                            <Text bold>코멘트</Text>
                        </Box>
                        {comments.map((item, index) => (
                            <>
                            <Pressable key={index} onPress={() => {
                                Alert.alert(
                                    '코멘트',
                                    item.comment,
                                    [
                                        { text: '확인', onPress: () => console.log('확인') }
                                    ],
                                    { cancelable: false }
                                );
                            }}>
                            <Box h={"12"} my={1} px={1} overflow={"hidden"} borderStyle={"solid"} borderColor={"green.100"} borderWidth={1}>
                                <Text numberOfLines={2}>{item.comment}</Text>
                            </Box>
                            </Pressable>
                            </>
                        ))}
                    </VStack>
                    <Divider
                        bg="emerald.500"
                        thickness="2"
                        mx="2"
                        orientation="vertical"
                    />
                    <VStack flex={0.5}>
                        <Box alignItems={"center"} bgColor={"lime.200"}>
                        <Text bold>작성일</Text>
                        </Box>
                            {comments.map((item, index) => (
                                <>
                                <Box h={"12"} my={1} px={1} overflow={"hidden"} borderStyle={"solid"} borderColor={"rgba(0, 128, 0, 0)"} borderWidth={1}>
                                <Text key={index} textAlign={"center"}>{new Intl.DateTimeFormat('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit'}).format(new Date(item.commentDate))}</Text>
                                <Text key={index} textAlign={"center"}>{new Intl.DateTimeFormat('ko-KR', { hour: '2-digit', minute: '2-digit'}).format(new Date(item.commentDate))}</Text>
                                </Box>                                
                                </>
                        ))}
                    </VStack>
                    <Divider
                        bg="emerald.500"
                        thickness="2"
                        mx="2"
                        orientation="vertical"
                    />
                    <VStack >
                        <Box  alignItems={"center"} bgColor={"lime.200"}>
                        <Text bold alignItems={"center"}>기능</Text>
                        </Box>
                        {comments.map((item, index) => (
                            <>
                            <Button h={12} key={index} onPress={() => deleteComment(item)} disabled={journals.status == "close"} display={journals.status == "close"? "none" : "block"} bgColor={"red.500"}my={1} _pressed={{bgColor:"red.800"}}>삭제</Button>
                            </>
                            
                        ))}
                    </VStack>
                </HStack>
                <CommentRegister journals={journals} callComments={callComments}/>
            </VStack>
        </Box>
        </>
    )
}

export default CommentListContainer;