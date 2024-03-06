import { Box, Button, NativeBaseProvider } from "native-base"
import { StyleSheet } from "react-native";



const AuthButton = ({ value }) => {


    return (
    <NativeBaseProvider>
        <Box alignItems="center">
            <Button onPress={() => console.log("hello world")} style={styles.button}>{value}</Button>
        </Box>
    </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#B5D692" // 버튼의 기본 스타일
    },
});


export default AuthButton