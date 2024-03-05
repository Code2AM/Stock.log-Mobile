// version2

import { Button, Link, NativeBaseProvider } from "native-base"
import { useNavigation } from "@react-navigation/core";
import AuthInput from "../../../components/auth/AuthInput";

export const Login2 = () => {

    const navigation = useNavigation();

    const handleFindPass = () => {
        // navigation.navigate('FindPass'); // ForgotPassword 화면으로 이동
    };

    // const handleSignUp = () => {
    //     navigation.navigate('SignUp'); // SignUp 화면으로 이
    // };

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
            <Button
                value={"로그인"}
            />
        </NativeBaseProvider>
        
    )
}
