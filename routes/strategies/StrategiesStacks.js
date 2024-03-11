import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StrategiesScreen } from "../../screens/strategies/StrategiesScreen";
import { EditStrategyScreen } from "../../screens/strategies/EditStrategyScreen";
import { NewStrategyScreen } from "../../screens/strategies/NewStrategyScreen";





const Stack = createNativeStackNavigator();

export const StrategiesStacks = () => {

    return (

        <Stack.Navigator
            initialRouteName='LoginScreen'>

            <Stack.Screen
                name="StrategiesScreen"
                component={StrategiesScreen}
                options={{ title: '매매전략' }}
            />

            <Stack.Screen
                name="NewStrategyScreen"
                component={NewStrategyScreen}
            />

            <Stack.Screen
                name="EditStrategyScreen"
                component={EditStrategyScreen}
            />

        </Stack.Navigator>

    );
}