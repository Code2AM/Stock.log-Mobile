 
import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, Text, VStack } from "native-base";
import { useState } from "react";
import { sendCodeRequest } from "../../../api/auth/MailAPI";


 export const SignupEmailAuthScreen = () => {

    const [ email,setEmail ] = useState("");
    const [ isSending, setIsSending ] = useState(null);

    const navigation = useNavigation();

    const handleEmailAuth = async () => {

        const data = {
            email : email
        }

        if(!isSending){
            setIsSending(true)

            alert("인증번호를 발송했습니다.")
            const result = await sendCodeRequest(data)
            console.log(result)

            setIsSending(null)
            
            alert("인증코드가 발송되었습니다.")

            navigation.navigate('SignupStack', { 
                screen: 'SignupAuthVerifyScreen',
                params: {
                    data,
                }
             })
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
                                type={"email"}
                                placeholder={"이메일을 입력해주세요"}
                                value={email}
                                onChangeText={setEmail}
                            />
                        </FormControl>
                        
                        <Button
                            mt="2"
                            bgColor="#B5D692"
                            marginTop={10}
                            onPress={handleEmailAuth}>
                            인증번호 보내기
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </NativeBaseProvider>

    )

 }