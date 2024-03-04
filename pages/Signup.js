import { NativeBaseProvider } from "native-base"
import AuthInput from "../parkjiho/components/auth/AuthInput"
import AuthButton from "../parkjiho/components/auth/AuthButton"

const SignUp = () => {
    <NativeBaseProvider>
        <Text textAlign="center" fontSize="xl">
             회원가입
        </Text>
        <AuthInput
            type={"password"}
            placeholder={"비밀번호"}
        />
         <AuthInput
            type={"password"}
            placeholder={"비밀번호"}
        />
        <AuthButton
            value={"확인"}
        />
    </NativeBaseProvider>
}
export default SignUp;