import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../../screens/Setting/SettingScreen";
import { StrategiesStack } from "../strategies/StrategiesStack";
import { LabelsStack } from "../labels/LabelsStack";
import { StyleSheet } from "react-native";
import DarkmodeScreen from "../../screens/darkmode/darkModeScreen";

const Stack = createNativeStackNavigator();
export const SettingStack = () => {
    return(
        <Stack.Navigator>

             <Stack.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{
                    title: '설정',
                    headerStyle:styles.settingsHeader, 
                    headerTitleAlign:"center",
                    headerTitleStyle:styles.settingsHeaderTitleStyle
                 }}
            />

            <Stack.Screen
                name="LabelsScreen"
                component={LabelsStack}
                options={{
                    title: '라벨',
                    headerStyle:styles.settingsHeader, 
                    headerTitleAlign:"center",
                    headerTitleStyle:styles.settingsHeaderTitleStyle
                 }}
            />

            <Stack.Screen
                name="StrategiesStack"
                component={StrategiesStack}
                options={{
                    title: '매매전략',
                    headerStyle:styles.settingsHeader, 
                    headerTitleAlign:"center",
                    headerTitleStyle:styles.settingsHeaderTitleStyle
                 }}  
            />

            <Stack.Screen
                name="DarkmodeScreen"
                component={DarkmodeScreen}
                options={{
                    title: '다크모드',
                    headerStyle:styles.settingsHeader, 
                    headerTitleAlign:"center",
                    headerTitleStyle:styles.settingsHeaderTitleStyle
                 }}  
            />
            
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    settingsHeader : {
        backgroundColor:"#B5D692"
    },
    settingsHeaderTitleStyle : {
        color:"white",
        fontWeight:"bold"
    }
})