import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../../screens/Setting/SettingScreen";
import { StrategiesStack } from "../strategies/StrategiesStack";
import { LabelsStack } from "../labels/LabelsStack";

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
                component={LabelsStack}
                options={{ title: '라벨' }}
            />

            <Stack.Screen
                name="StrategiesStack"
                component={StrategiesStack}
                options={{ title: '매매전략' }}   
            />
            
        </Stack.Navigator>
    )
}