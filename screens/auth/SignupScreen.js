import { Button, Input, NativeBaseProvider, Text } from "native-base"
import { useState } from "react";
import { signupRequest } from "../../api/auth/AuthAPI";
import { useNavigation } from "@react-navigation/native";


export const SignUpScreen = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();


    /* FIXME ==============================   여기 부터 시작 */
    const handleSignUp = async () => {
      console.log("여기까지 옴")

      console.log(username)
      console.log(password)

      /* 이제 username 과 password를 data에 담아서 backend로 보내면 됨  */

      const data = {
        email: username,
        password: password,
      };

      console.log(data);
      const result = await signupRequest(data);
      alert(result)

      navigation.navigate('AuthStack', { screen: 'LoginScreen' })
    }

    return (
        <NativeBaseProvider>
        <Text textAlign="center" fontSize="xl">
            회원가입
        </Text>
        <Input
            w={{
                base: "75%",
                md: "25%"
            }}
            type={"email"}
            placeholder={"Email"}
            value={username}
            onChangeText={setUsername}
        />

        <Input
            w={{
                base: "75%",
                md: "25%"
            }}
            type={"password"}
            placeholder={"Password"}
            value={password}
            onChangeText={setPassword}
        />

        <Button
            onPress={handleSignUp}
            p={5} // 원하는 패딩 값 설정 (예: 5)
            m={10}
            borderRadius={10} // 원하는 테두리 반경 설정 (예: 10)
        >회원가입</Button>
    </NativeBaseProvider>
    )
}
