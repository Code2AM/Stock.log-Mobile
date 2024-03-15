import { useEffect, useState } from "react";
import { Box, Button, Center, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { loginRequest } from "../../api/auth/AuthAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KakaoButton } from "../../components/auth/buttons/KakaoButton";
import { useStocks } from "../../zustand/stocks/useStocks";
import { getStocks, storeStocks } from "../../api/common/StockAPI";



export const LoginScreen = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const {stocks, fetchStocks, setStocks} = useStocks();

    const stockData = async () => {
        const data = await getStocks();
        await setStocks(data);
        console.log("데이터는 이렇다.",stocks);
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
                            <FormControl.Label>Email ID</FormControl.Label>
                            <Input
                                placeholder={"Email"}
                                value={username}
                                onChangeText={setUsername}
                            />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input
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
