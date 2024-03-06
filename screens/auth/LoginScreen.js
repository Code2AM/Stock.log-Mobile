import { useState } from "react";
import { Button, Input, Link, NativeBaseProvider, Text, View } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { loginRequest } from "../../api/auth/AuthAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const LoginScreen = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = async () => {
        // 실제 로그인 로직을 여기에 작성합니다 (예: API 호출, 유효성 검사)
        
        const data = {
            email: username,
            password: password,
          };

        console.log(data)

        const result = await loginRequest(data);
        console.log(result)
        alert("로그인 성공")

        const accessToken = await AsyncStorage.getItem("accessToken");

        console.log(accessToken)

        navigation.navigate('IndexStack', { screen: 'Journals' })


        // const loginSuccess = true;

        // if (loginSuccess) {
        //     // 로그인 성공, Index 화면으로 이동
        //     console.log('로그인 성공')

        //     navigation.navigate('IndexStack', { screen: 'Journals' })

        // } else {
        //     // 로그인 실패 처리 (예: 오류 메시지 표시)
        //     console.error('로그인 실패');
        // }
    };


    const handleFindPass = () => {

    };

    const handleSignUp = () => {
        navigation.navigate('AuthStack', { screen: 'SignupScreen' })
    }

    return (
        <NativeBaseProvider>
            <View>
                <Text textAlign="center" fontSize="xl">
                    로그인
                </Text>

                <Input
                    w={{
                        base: "75%",
                        md: "25%"
                    }}
                    type={"email"}
                    placeholder={"Email"}
                    value={username}
                    onChangeText={setUsername}
                />

                <Input
                    w={{
                        base: "75%",
                        md: "25%"
                    }}
                    type={"password"}
                    placeholder={"Password"}
                    value={password}
                    onChangeText={setPassword}
                />

                <Link onPress={handleFindPass}>비밀번호를 잊어버리셨나요?</Link>

                <Button
                    onPress={handleLogin}
                    p={5} // 원하는 패딩 값 설정 (예: 5)
                    m={10}
                    borderRadius={10} // 원하는 테두리 반경 설정 (예: 10)
                >로그인</Button>

                <Link onPress={handleSignUp} >회원가입</Link>

            </View>

        </NativeBaseProvider>
    );
};
