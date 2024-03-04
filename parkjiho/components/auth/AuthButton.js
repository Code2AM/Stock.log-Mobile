import { Box, Button, NativeBaseProvider } from "native-base"

const AuthButton = () => {
    return (
    <NativeBaseProvider>
        <Box alignItems="center">
            <Button onPress={() => console.log("hello world")}>로그인</Button>
        </Box>
    </NativeBaseProvider>
    )
}

export default AuthButton