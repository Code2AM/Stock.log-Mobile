import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StrategiesScreen } from "../../screens/strategies/StrategiesScreen";
import { EditStrategyScreen } from "../../screens/strategies/EditStrategyScreen";
import { NewStrategyScreen } from "../../screens/strategies/NewStrategyScreen";





const Stack = createNativeStackNavigator();

export const StrategiesStack = () => {

    return (

        <Stack.Navigator
            initialRouteName='StrategiesScreen'
            screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name="StrategiesScreen"
                component={StrategiesScreen}
                options={{ title: '매매전략' }}
            />

            <Stack.Screen
                name="NewStrategyScreen"
                component={NewStrategyScreen}
                options={{ title: '새 매매전략' }}
            />

            <Stack.Screen
                name="EditStrategyScreen"
                component={EditStrategyScreen}
                options={{ title: '매매전략 수정' }}
            />

        </Stack.Navigator>

    );
}