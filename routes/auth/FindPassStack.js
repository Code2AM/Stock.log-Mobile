import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FindPassEmailAuthScreen } from "../../screens/auth/findpass/FindPassEmailAuthScreen";
import { FindPassAuthVerifyScreen } from "../../screens/auth/findpass/FindPassAuthVerifyScreen";
import { FindPassPassConfirmScreen } from "../../screens/auth/findpass/FindPassPassConfirmScreen";

const Stack = createNativeStackNavigator();

export const FindPassStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({ headerShown: false })}
            initialRouteName = 'FindPassEmailAuthScreen'>
                <Stack.Screen name = 'FindPassEmailAuthScreen' component={FindPassEmailAuthScreen}/>
                <Stack.Screen name = 'FindPassAuthVerifyScreen' component={FindPassAuthVerifyScreen}/>
                <Stack.Screen name = 'FindPassPassConfirmScreen' component={FindPassPassConfirmScreen}/>
        </Stack.Navigator>
    )
}