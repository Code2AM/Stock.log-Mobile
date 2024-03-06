import { Button, NativeBaseProvider } from "native-base"
import { testRequest } from "../../../api/auth/TestAPI"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TestScreen = () => {

    const handleTest  = () => {
      const result = testRequest();

      console.log(result)
      alert("성공")
    }

    const handleLogOut = async () => {
        await AsyncStorage.removeItem("accessToken");
    }
  
    return (
        <NativeBaseProvider>
            <Button
                    onPress={handleTest}
                >테스트 버튼</Button>
                <Button
                    onPress={handleLogOut}
                >로그아웃</Button>
        </NativeBaseProvider>
    )
}