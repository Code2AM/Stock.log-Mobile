
import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, FormControl, Heading, Input, Link, NativeBaseProvider, Text, VStack, useSafeArea } from "native-base";
import { useState } from "react";

export const FindPassEmailAuthScreen = () => {
    const [ email,setEmail ] = useState("");

    const navigation = useNavigation();

    const handleEmailAuth = () => {

        navigation.navigate('FindPassStack', { screen: 'FindPassAuthVerifyScreen' })
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
                         {/* <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                아이디가 없으신가요? {" "}
                            </Text>
                            <Link _text={{
                                color: "#B5D692",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }}
                                onPress={handleSignUp}>
                                회원가입
                            </Link>

                        </HStack> */}
                    </VStack>
                    
                </Box>
            </Center>
        </NativeBaseProvider>

    )
}