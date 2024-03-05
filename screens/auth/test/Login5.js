
import { Button, Container, Link, NativeBaseProvider, Text } from "native-base"
import { useNavigation } from "@react-navigation/core";
import { StyleSheet } from "react-native";
import AuthInput from "../../../components/auth/AuthInput";

// import { BACKEND_URL } from '@env';
// const BACKEND_URL = process.env.BACKEND_URL;

export const Login5 = () => {

    const navigation = useNavigation();

    const handleFindPass = () => {
        navigation.navigate('FindPass'); // 비밀번호 찾기 화면으로 이동
    };

    const handleSignUp = () => {
        navigation.navigate('LoginAuth'); // 회원가입 화면으로 이동
        
    };

    return (
        <NativeBaseProvider>
                <Text textAlign="center" fontSize="xl">
                    회원가입
                </Text>
                <AuthInput
                    type={"email"}
                    placeholder={"Email"}
                />
                <AuthInput
                    type={"password"}
                    placeholder={"Password"}
                />
                <Link onPress={handleFindPass}>비밀번호를 잊어버리셨나요?</Link>
                <Button
                    onPress={() =>console.log(BACKEND_URL)}
                >
                    로그인
                </Button>

                <Link onPress={handleSignUp} >회원가입</Link>
        </NativeBaseProvider>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
