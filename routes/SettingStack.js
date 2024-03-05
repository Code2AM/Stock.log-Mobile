import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LabelsScreen from "../screens/Setting/LabelsScreen";
import SettingScreen from "../screens/Setting/SettingScreen";

const Stack = createNativeStackNavigator();

export const SettingStack = () => {
    return(
        <Stack.Navigator>
             <Stack.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{ title: '설정' }}
            />
            <Stack.Screen
                name="LabelsScreen"
                component={LabelsScreen}
            />
        </Stack.Navigator>
    )
}