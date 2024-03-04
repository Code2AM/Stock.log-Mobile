import { Box, Button, NativeBaseProvider } from "native-base"

const AuthButton = ({ value }) => {


    return (
    <NativeBaseProvider>
        <Box alignItems="center">
            <Button onPress={() => console.log("hello world")}>{value}</Button>
        </Box>
    </NativeBaseProvider>
    )
}

export default AuthButton