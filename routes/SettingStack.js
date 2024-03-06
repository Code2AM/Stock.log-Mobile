import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../screens/Setting/SettingScreen";
import LabelsScreen from "../screens/Setting/labels/LabelsScreen";
import LabelAddScreen from "../screens/Setting/labels/LabelAddScreen";

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

            <Stack.Screen
                name="LabelAddScreen"
                component={LabelAddScreen}
            />
            
        </Stack.Navigator>
    )
}