import { NativeBaseProvider, Text, VStack } from "native-base"
import AuthInput from "../parkjiho/components/auth/AuthInput";
import AuthButton from "../parkjiho/components/auth/AuthButton";
import { StyleSheet } from "react-native";

const SignupPassConfirm = () => {
    return (
        <NativeBaseProvider>
            <Text textAlign="center" fontSize="xl">
                비밀번호 찾기
            </Text>
                <AuthInput
                    type={"password"}
                    placeholder={"비밀번호를 입력해주세요"}
                    styles={styles.input}
                />
                <AuthInput
                    type={"password"}
                    placeholder={"비밀번호를 다시 입력해주세요"}
                    styles={styles.input}
                />
                <AuthButton
                    value={"확인"}
                    styles={styles.input}
                />
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    input:{
        flex:1
    }
})

export default SignupPassConfirm;