import { Container, Link, NativeBaseProvider, Text } from "native-base"
import AuthInput from "../parkjiho/components/auth/AuthInput"
import AuthButton from "../parkjiho/components/auth/AuthButton"
import { useNavigation } from "@react-navigation/core";
import { StyleSheet } from "react-native";

const Login = () => {
    const navigation = useNavigation();

    const handleFindPass = () => {
        navigation.navigate('FindPass'); // 비밀번호 찾기 화면으로 이동
    };

    const handleSignUp = () => {
        navigation.navigate('LoginAuth'); // 회원가입 화면으로 이동
    };

    return(  
        <NativeBaseProvider>
            <Container styles={styles.container}> 
                <Text textAlign="center" fontSize="xl">
                    회원가입
                </Text>
                <AuthInput
                    type={"email"}
                    placeholder={"Email"}
                    styles={styles.container}
                />
                <AuthInput
                    type={"password"}
                    placeholder={"Password"}
                    styles={styles.container}
                />
                <Link onPress={handleFindPass}>비밀번호를 잊어버리셨나요?</Link>
                <AuthButton
                    value={"로그인"}
                />
                <Link onPress={handleSignUp} >회원가입</Link>
            </Container>
        </NativeBaseProvider>
    );
}


export default Login;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})