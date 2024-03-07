import { useNavigation } from "@react-navigation/native";
import { Button, Link, NativeBaseProvider } from "native-base"
import { StyleSheet } from "react-native";

const SettingScreen = () => {
    const navigation = useNavigation();

    const hanlderBtnPress = () => {
        navigation.navigate("LabelsScreen");
    }
    return(
            <NativeBaseProvider>
                <Button size="lg" variant={Link} onPress={hanlderBtnPress} style={styles.button}>라벨</Button>
                <Button size="lg" variant={Link} onPress={hanlderBtnPress} style={styles.button}>매매전략 관리</Button>
            </NativeBaseProvider>
    )
}
export default SettingScreen;

const styles = StyleSheet.create({
    button:{
        color:"#B5D692",
        height:"12%"
    }
})