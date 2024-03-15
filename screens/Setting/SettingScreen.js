import { useNavigation } from "@react-navigation/native";
import { Box, Button, NativeBaseProvider, Stack, Text, View, ZStack, useToast } from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native";
import { logout } from "../../api/auth/LogoutAPI";
import Feather from 'react-native-vector-icons/Feather';

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

    const handleDarkmode = () => {
        navigation.navigate("DarkmodeScreen")
      }


    return (
        <NativeBaseProvider>
            <Stack flex={1} space={4} alignItems="center">
                
            <TouchableOpacity onPress={hanlderBtnPress} style={styles.button}>
                <ZStack>
                    <View style={styles.iconContainer}>
                        <Feather name="book" style={styles.icon} size={35} />
                    </View>
                    <Text style={styles.text}>라벨</Text>
                </ZStack>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleStrategies} style={styles.button}>
                <ZStack>
                    <View style={styles.iconContainer}>
                        <Feather name="bookmark" style={styles.icon} size={35} />
                    </View>
                    <Text style={styles.text}>매매전략</Text>
                </ZStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleDarkmode} style={styles.button}>
                <ZStack>
                    <View style={styles.iconContainer}>
                        <Feather name="bookmark" style={styles.icon} size={35} />
                    </View>
                    <Text style={styles.text}>다크모드</Text>
                </ZStack>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogout} style={styles.button}>
                <ZStack>
                    <View style={styles.iconContainer}>
                        <Feather name="bookmark" style={styles.icon} size={35} />
                    </View>
                    <Text style={styles.text}>로그아웃</Text>
                </ZStack>
            </TouchableOpacity>
                
            </Stack>
        </NativeBaseProvider>
    );
}
export default SettingScreen;

const styles = StyleSheet.create({
    button: {
        height: 100, // 버튼 높이를 조정
        width: 400, // 버튼 너비를 조정
        marginTop: 25,
    },
    iconContainer: {
        marginRight: 10, // 아이콘과 텍스트 사이 간격 조정
        alignItems: 'center', // 아이콘을 수직 방향으로 가운데 정렬
    },
    icon: {
        // 아이콘 스타일 설정
        marginLeft:30,
        marginTop:7
    },
    text: {
        fontSize: 15,
        marginLeft:100,
        marginTop:15
    }
});