import { useState } from "react";
import { Box, Button, Center, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { loginRequest } from "../../api/auth/AuthAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KakaoButton } from "../../components/auth/buttons/KakaoButton";



export const LoginScreen = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = async () => {
        const data = {
            email: username,
            password: password,
        };

        console.log(data)

        const result = await loginRequest(data);
        console.log(result)
        alert("로그인 성공")

        const accessToken = await AsyncStorage.getItem("accessToken");

        navigation.navigate('IndexStack', { screen: 'Journals' })
    };


    const handleFindPass = () => {

    };

    const handleSignUp = () => {
        navigation.navigate('AuthStack', { screen: 'SignupScreen' })
    }

    // return (
    //     <NativeBaseProvider>
    //         <View>
    //             <Text textAlign="center" fontSize="xl">
    //                 로그인
    //             </Text>

    //             <Input
    //                 w={{
    //                     base: "75%",
    //                     md: "25%"
    //                 }}
    //                 type={"email"}
    //                 placeholder={"Email"}
    //                 value={username}
    //                 onChangeText={setUsername}
    //             />

    //             <Input
    //                 w={{
    //                     base: "75%",
    //                     md: "25%"
    //                 }}
    //                 type={"password"}
    //                 placeholder={"Password"}
    //                 value={password}
    //                 onChangeText={setPassword}
    //             />

    //             <Link onPress={handleFindPass}>비밀번호를 잊어버리셨나요?</Link>

    //             <Button
    //                 onPress={handleLogin}
    //                 p={5}
    //                 m={10}
    //                 borderRadius={10}
    //             >로그인</Button>

    //             <Link onPress={handleSignUp} >회원가입</Link>

    //             <KakaoButton />

    //         </View>

    //     </NativeBaseProvider>
    // );

    return (
        <NativeBaseProvider>
            <Center w="100%" h="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <Heading
                        size="2xl"
                        fontWeight="900"
                        color="#B5D692"

                        marginBottom={12}
                        _dark={{
                            color: "warmGray.50"
                        }}>
                        stock.log
                    </Heading>

                    <VStack space={3} mt="5" >
                        <FormControl>
                            <FormControl.Label>Email ID</FormControl.Label>
                            <Input
                                type={"email"}
                                placeholder={"Email"}
                                value={username}
                                onChangeText={setUsername}
                            />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input
                                type={"password"}
                                placeholder={"Password"}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <Link
                                _text={{
                                    fontSize: "xs",
                                    fontWeight: "500",
                                    color: "#B5D692"
                                }}
                                alignSelf="flex-end"
                                mt="1"
                                onPress={handleFindPass}>
                                비밀번호를 잃어버리셨나요?
                            </Link>
                        </FormControl>
                        <Button
                            mt="2"
                            bgColor="#B5D692"
                            marginTop={10}
                            onPress={handleLogin}>
                            로그인
                        </Button>
                        <HStack mt="6" justifyContent="center">
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

                        </HStack>
                    </VStack>
                    <KakaoButton _style={{ alignSelf: 'center' }} />
                </Box>
            </Center>
        </NativeBaseProvider>

    )
};
