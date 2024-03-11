import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../../screens/Setting/SettingScreen";
import LabelsScreen from "../../screens/Setting/labels/LabelsScreen";
import { NewLabelScreen } from "../../screens/Setting/labels/NewLabelScreen";
import EditLabelScreen from "../../screens/Setting/labels/EditLabelScreen";

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
                name="NewLabelScreen"
                component={NewLabelScreen}
            />

            <Stack.Screen
                name="EditLabelScreen"
                component={EditLabelScreen}
            />
            
            
        </Stack.Navigator>
    )
}