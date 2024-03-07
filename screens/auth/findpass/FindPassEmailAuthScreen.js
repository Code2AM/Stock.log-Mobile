 
import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, Text, VStack } from "native-base";
import { useState } from "react";

export const FindPassEmailAuthScreen = () => {
    const [ email,setEmail ] = useState("");

    const navigation = useNavigation();

    const handleEmailAuth = () => {

        // data에 담아서 보내지 않으면 안 보내짐
        const data = {
            email: email,
        };

        navigation.navigate('FindPassStack', { 
            screen: 'FindPassAuthVerifyScreen',
            params: {
                data,
            }
        })
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