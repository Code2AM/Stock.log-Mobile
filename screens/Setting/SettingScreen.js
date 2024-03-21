import { useNavigation } from "@react-navigation/native";
import { Box, Button, Link, NativeBaseProvider, Stack, Text, View, ZStack, useToast } from "native-base"
import { StyleSheet, TouchableOpacity } from "react-native";
import LogoutButton from "../../components/auth/buttons/LogoutButton";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingScreen = () => {

    const navigation = useNavigation();

    const hanlderBtnPress = () => {
        navigation.navigate("LabelsScreen");
    }

    const handleStrategies = () => {
        navigation.navigate("StrategiesStack")
    }

    const handleTerms = () => {
        navigation.navigate("TermsScreen")
    }


    return (
        <NativeBaseProvider>
            <Stack flex={1} space={4} alignItems="center">
                <TouchableOpacity onPress={handleTerms} style={styles.button}>
                    <ZStack>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="book-open-outline" style={styles.icon} size={30} />
                        </View>
                        <Text style={styles.text}>이용약관</Text>
                    </ZStack>
                </TouchableOpacity>

                <TouchableOpacity onPress={hanlderBtnPress} style={styles.button}>
                    <ZStack>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="tag-outline" style={styles.icon} size={30} />
                        </View>
                        <Text style={styles.text}>라벨</Text>
                    </ZStack>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleStrategies} style={styles.button}>
                    <ZStack>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="fencing" style={styles.icon} size={30} />
                        </View>
                        <Text style={styles.text}>매매전략</Text>
                    </ZStack>
                </TouchableOpacity>
                <LogoutButton />
            </Stack>
        </NativeBaseProvider>
    );
}
export default SettingScreen;

const styles = StyleSheet.create({
    button: {
        height: 50, // 버튼 높이를 조정
        width: 400, // 버튼 너비를 조정
        marginTop: 25,
    },
    iconContainer: {
        marginRight: 10, // 아이콘과 텍스트 사이 간격 조정
        alignItems: 'center', // 아이콘을 수직 방향으로 가운데 정렬
    },
    icon: {
        // 아이콘 스타일 설정
        marginLeft: 30,
        marginTop: 7,
        color:"gray"
    },
    text: {
        fontSize: 15,
        marginLeft: 80,
        marginTop: 11
    }
});