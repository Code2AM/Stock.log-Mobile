import { useState } from "react";
import { Button, Link, NativeBaseProvider, View } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../../hooks/useAuth";
import AuthInput from "../../components/auth/AuthInput";


export const LoginScreen = () => {


    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        // 실제 로그인 로직을 여기에 작성합니다 (예: API 호출, 유효성 검사)
        // 실제 구현으로 바꿔주세요
        // const loginSuccess = await login(username, password);

        const loginSuccess = true;

        if (loginSuccess) {
            // 로그인 성공, Index 화면으로 이동
            console.log('로그인 성공')
            
            login(); // 필요하다면 로그인 상태 업데이트
            navigation.navigate('IndexStack',{screen: 'Journals'})
            
        } else {
            // 로그인 실패 처리 (예: 오류 메시지 표시)
            console.error('로그인 실패');
        }
    };

    return (
        <NativeBaseProvider>
            <View>
                <AuthInput
                    type={"email"}
                    placeholder={"Email"}
                    value={username}
                    onChangeText={setUsername}
                />
                <AuthInput
                    type={"password"}
                    placeholder={"Password"}
                    value={password}
                    onChangeText={setPassword}
                />
                <Link onPress={handleLogin}>비밀번호를 잊어버리셨나요?</Link>
                <Button title="로그인" onPress={handleLogin} />
            </View>

        </NativeBaseProvider>
    );
};
