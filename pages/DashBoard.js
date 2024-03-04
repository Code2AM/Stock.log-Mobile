import { NativeBaseProvider } from "native-base"
import { Text, View } from "react-native";


const DashBoard = () => {

    return (
        <NativeBaseProvider>
            <View>
                <Text>
                    대시보드
                </Text>
            </View>
        </NativeBaseProvider>
    )
}

export default DashBoard;