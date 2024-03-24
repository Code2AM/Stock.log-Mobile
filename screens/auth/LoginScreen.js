import React, { useEffect, useState } from "react";
import { Box, Button, Center, FormControl, HStack, Heading, Icon, Input, Link, NativeBaseProvider, Pressable, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { loginRequest } from "../../api/auth/AuthAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KakaoButton } from "../../components/auth/buttons/KakaoButton";
import { useStocks } from "../../zustand/stocks/useStocks";
import { getStocks, storeStocks } from "../../api/common/StockAPI";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as SplashScreen from 'expo-splash-screen';



export const LoginScreen = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const {stocks, fetchStocks, setStocks} = useStocks();
    const [show, setShow] = React.useState(false);

    const stockData = async () => {
        const data = await getStocks();
        await setStocks(data);
    };

    const storeData = async () => {
        const data = await fetchStocks();
        storeStocks(data);
    }

    useEffect(() => {
        
        if(stocks?.length === 0){
            storeData();
            stockData();
            // 새로고침이 아직 없다.
        }

        setTimeout(() => {
            SplashScreen.hideAsync();
        },2000)
    },[])

    const handleLogin = async () => {
        const data = {
            email: username,
            password: password,
        };

        const result = await loginRequest(data);
        console.log(result)

        // // 요청이 몰리는 것을 막고 앱 실행시 하루에 한번 정도만 불러오면 되기 때문에 로그인 페이지로 이동시킴
        alert("로그인 성공")

        const accessToken = await AsyncStorage.getItem("accessToken");

        navigation.navigate('IndexStack', { screen: 'Journals' })
    };


    const handleFindPass = () => {
        navigation.navigate('FindPassStack', { screen: 'FindPassEmailAuthScreen' })
    };

    const handleSignUp = () => {
        navigation.navigate('SignupStack', { screen: 'SignupEmailAuthScreen' })
    }
    
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
                                <Input
                                    placeholder="Email"
                                    value={username}
                                    onChangeText={setUsername}
                                    marginBottom={3}
                                    InputLeftElement={<Icon as={<MaterialIcons name="person" />}
                                    size={5} ml="2" color="muted.400" />} />
                        </FormControl>
                        <FormControl>
                            <Input
                                value= {password}
                                onChangeText= {setPassword}
                                type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                            </Pressable>} placeholder="Password"
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
                            onPress={handleLogin}
                            _pressed={{backgroundColor:'emerald.400'}}>
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