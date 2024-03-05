import { useNavigation } from "@react-navigation/native";
import { Button, NativeBaseProvider } from "native-base"



const SettingScreen = () => {
    const navigation = useNavigation();

    const hanlderBtnPress = () => {
        navigation.navigate("LabelsScreen");
    }
    return(
            <NativeBaseProvider>
                <Button size="sm" variant="link" onPress={hanlderBtnPress}>
                    라벨
                </Button>
            </NativeBaseProvider>
    )
}
export default SettingScreen;