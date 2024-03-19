 
import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, FormControl, HStack, Heading, Icon, Input, Link, NativeBaseProvider, Text, VStack, useTheme, useToast } from "native-base";
import { useState } from "react";
import { sendCodeRequest } from "../../../api/auth/MailAPI";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const FindPassEmailAuthScreen = () => {
    const [ email,setEmail ] = useState("");
    const [ isSending, setIsSending ] = useState(null);

    const navigation = useNavigation();
    const toast = useToast();

    const handleEmailAuth = async () => {


        const data = {
            email: email,
        };

        if(!isSending){
            setIsSending(true)

            toast.show({
                title: "인증번호를 발송했습니다.",
                duration: 1800,
                placement: "top",
                avoidKeyboard: true,
              })

            const result = await sendCodeRequest(data)
            console.log(result)

            setIsSending(null)

            toast.show({
                title: "인증번호가 도착했습니다, 이메일을 확인해주세요.",
                duration: 1800,
                placement: "top",
                avoidKeyboard: true,
              })

            navigation.navigate('FindPassStack', { 
                screen: 'FindPassAuthVerifyScreen',
                params: {
                    data,
                }
            })
        }
        else {
            toast.show({
                title: "인증번호를 발송 중입니다. 잠시만 기달려주세요",
                duration: 1800,
                placement: "top",
                avoidKeyboard: true,
              })
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
                        비밀번호 찾기
                    </Heading>

                    <VStack space={3} mt="5" >
                        <FormControl>
                            {/* <FormControl.Label>Email</FormControl.Label> */}
                            <Input
                                placeholder="Email"
                                value={email}
                                onChangeText={setEmail}
                                InputLeftElement={<Icon as={<MaterialIcons name="person" />}
                                size={5} ml="2" color="muted.400" />} />
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