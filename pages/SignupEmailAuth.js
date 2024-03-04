import { NativeBaseProvider, Text } from "native-base";
import AuthInput from "../parkjiho/components/auth/AuthInput";
import AuthButton from "../parkjiho/components/auth/AuthButton";

const SignupEmailAuth = () =>{

    return(
    <NativeBaseProvider>
        <Text>
         회원가입
        </Text>
        <AuthInput
            type={"email"}
            placeholder={"이메일을 입력해주세요"}
        />
        <AuthButton
            value={"인증번호 보내기"}
        />
    </NativeBaseProvider>
    )
}

export default SignupEmailAuth;