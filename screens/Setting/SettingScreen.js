import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, Container, Flex, Link, NativeBaseProvider, Stack, useToast } from "native-base"
import { StyleSheet } from "react-native";
import { logout } from "../../api/auth/LogoutAPI";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SettingScreen = () => {

    const navigation = useNavigation();
    const toast = useToast();

    const hanlderBtnPress = () => {
        navigation.navigate("LabelsScreen");
    }

    const handleLogout = async () => {
        await logout(navigation, toast);
    };

    const handleStrategies = () => {
      navigation.navigate("StrategiesStack")
    }


    return (
        <NativeBaseProvider>
            <Button size="lg" variant={Link} onPress={hanlderBtnPress} style={styles.button}>라벨</Button>
            <Button size="lg" variant={Link} onPress={handleStrategies} style={styles.button}>매매전략</Button>
            <Button size="lg" variant={Link} onPress={handleLogout} style={styles.button}>로그아웃</Button>
        </NativeBaseProvider>
    )
}
export default SettingScreen;

const styles = StyleSheet.create({
    button: {
        color: "#B5D692",
        height: "12%"
    }
})