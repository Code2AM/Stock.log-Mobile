
import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Button, Center, FormControl, Heading, Input, Link, NativeBaseProvider, Text, VStack } from "native-base";
import { useState } from "react";
import { codeVerifyRequest } from "../../../api/auth/MailAPI";



export const SignupAuthVerifyScreen = () => {

    const [code, setCode] = useState();
    const [ isSending , setIsSending ] = useState(null)

    const navigation = useNavigation();
    const route = useRoute();

    // 전달받은 이메일 저장
    const { data } = route.params;
    const email = data.email;

    const handleResendCode = async () => {

        const data = {
            email : email
        }

        if(!isSending){
            setIsSending(true)
            const result = await sendCodeRequest(data)
            console.log(result)

            setIsSending(null)

            alert("인증코드가 발송되었습니다.")
        }
        else {
            alert("이메일을 발송 중입니다.")
        }

    }

    const handleConfirmCode = async () => {

        const data = {
            email: email,
            authCode : code,
        }

        if(!isSending){
            setIsSending(true)
        
            const result = await codeVerifyRequest(data);

            console.log(result)

            setIsSending(null)

            if (result == 1){

                alert("인증번호가 일치합니다")

                navigation.navigate('SignupStack', {
                    screen: 'SignupPassConfirmScreen',
                    params: {
                        data,
                    }
                })
            }

    

            
        }
        else {
            alert("이메일을 발송 중입니다.")
        }
    }

    return (
        <NativeBaseProvider>
            <Center w="100%" h="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <Heading
                        size="xl"
                        fontWeight="600"
                        color="#414141"

                        marginBottom={12}
                        _dark={{
                            color: "warmGray.50"
                        }}>
                        회원가입
                    </Heading>

                    <VStack space={3} mt="5" >
                        <FormControl>
                            {/* <FormControl.Label>Email</FormControl.Label> */}
                            <Input
                                type={"code"}
                                placeholder={"인증번호를 입력해주세요"}
                                value={code}
                                onChangeText={setCode}
                            />
                        </FormControl>

                        <VStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                인증번호를 받지 못했습니까? {" "}
                            </Text>
                            <Link _text={{
                                color: "#B5D692",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }}
                                onPress={handleResendCode}>
                                다시보내기
                            </Link>

                        </VStack>

                        <Button
                            mt="2"
                            bgColor="#B5D692"
                            marginTop={10}
                            onPress={handleConfirmCode}>
                            확인
                        </Button>

                    </VStack>

                </Box>
            </Center>
        </NativeBaseProvider>

    )
};
