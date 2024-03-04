import { Link, NativeBaseProvider } from "native-base"
import AuthInput from "../parkjiho/components/auth/AuthInput"
import AuthButton from "../parkjiho/components/auth/AuthButton"
import { useNavigation } from "@react-navigation/core";
import { NavigationContainer } from "@react-navigation/native";

const Login = () => {

    const navigation = useNavigation();

    const handleFindPass = () => {
        navigation.navigate('FindPass'); // ForgotPassword 화면으로 이동
    };

    const handleSignUp = () => {
        navigation.navigate('SignUp'); // SignUp 화면으로 이동
    };

    return(  
        <NativeBaseProvider>
            <AuthInput
                type={"email"}
                placeholder={"Email"}
            />
             <AuthInput
                type={"password"}
                placeholder={"Password"}
            />
            <Link onPress={handleFindPass}>비밀번호를 잊어버리셨나요?</Link>
            <AuthButton
                value={"로그인"}
            />
        </NativeBaseProvider>
        
    )
}
export default Login;