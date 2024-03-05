import { NativeBaseProvider, Text } from "native-base";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/buttons/AuthButton";

const FindPass = () =>{
    return(
    <NativeBaseProvider>
        <Text>
            비밀번호 찾기
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

export default FindPass;