import { NativeBaseProvider, VStack } from "native-base"
import AuthInput from "../parkjiho/components/auth/AuthInput";
import AuthButton from "../parkjiho/components/auth/AuthButton";

const SignupPassConfirm = () => {
    return (
        <NativeBaseProvider>
            <VStack space={1} flex={1} alignItems="center" justifyContent="center">
                <AuthInput
                    type={"password"}
                    placeholder={"비밀번호를 입력해주세요"}
                />
                <AuthInput
                    type={"password"}
                    placeholder={"비밀번호를 다시 입력해주세요"}
                />
                <AuthButton
                    value={"확인"}
                />
            </VStack>
        </NativeBaseProvider>
    );
};

export default SignupPassConfirm;