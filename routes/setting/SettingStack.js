import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../../screens/Setting/SettingScreen";
import { StrategiesStack } from "../strategies/StrategiesStack";
import { LabelsStack } from "../labels/LabelsStack";
import { StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import TermsScreen from "../../screens/Setting/TermsScreen";

export const SettingStack = () => {

    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
    const route = useRoute();

    // 설정 탭을 눌렀을 때 설정 화면으로 이동하도록 설정
    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e) => {
            // 현재 화면이 설정 화면이 아닌 경우에만 설정 화면으로 이동
            if (route.name !== 'SettingScreen') {
                e.preventDefault();
                navigation.navigate('SettingScreen');
            }
        });

        return unsubscribe;
    }, [navigation, route]);

    return(
        <Stack.Navigator>
            <Stack.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{
                    title: '설정',
                    headerStyle: styles.settingsHeader, 
                    headerTitleAlign: "center",
                    headerTitleStyle: styles.settingsHeaderTitleStyle,
                    gestureEnabled:false
                }}
            />
            <Stack.Screen
                name="LabelsScreen"
                component={LabelsStack}
                options={{
                    title: '라벨',
                    headerStyle: styles.settingsHeader, 
                    headerTitleAlign: "center",
                    headerTitleStyle: styles.settingsHeaderTitleStyle
                }}
            />
            <Stack.Screen
                name="StrategiesStack"
                component={StrategiesStack}
                options={{
                    title: '매매전략',
                    headerStyle: styles.settingsHeader, 
                    headerTitleAlign: "center",
                    headerTitleStyle: styles.settingsHeaderTitleStyle
                }}  
            />

            <Stack.Screen
                name="TermsScreen"
                component={TermsScreen}
                options={{
                    title: '이용약관',
                    headerStyle: styles.settingsHeader, 
                    headerTitleAlign: "center",
                    headerTitleStyle: styles.settingsHeaderTitleStyle
                }}  
            />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    settingsHeader: {
        backgroundColor: "#B5D692"
    },
    settingsHeaderTitleStyle: {
        color: "white",
        fontWeight: "bold"
    }
})