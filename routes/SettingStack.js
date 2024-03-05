import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LabelsScreen from "../screens/Setting/LabelsScreen";

const Stack = createNativeStackNavigator();

export const SettingStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="LabelsScreen"
                component={LabelsScreen}
            />
        </Stack.Navigator>
    )
}