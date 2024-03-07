import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignupEmailAuthScreen } from "../../screens/auth/signup/SignupEmailAuthScreen";
import { SignupAuthVerifyScreen } from "../../screens/auth/signup/SignupAuthVerifyScreen";
import { SignupPassConfirmScreen } from "../../screens/auth/signup/SignupPassConfirmScreen";

const Stack = createNativeStackNavigator();

export const SignupStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({ headerShown: false })}
            initialRouteName = 'SignupEmailAuthScreen'>
                <Stack.Screen name = 'SignupEmailAuthScreen' component={SignupEmailAuthScreen}/>
                <Stack.Screen name = 'SignupAuthVerifyScreen' component={SignupAuthVerifyScreen}/>
                <Stack.Screen name = 'SignupPassConfirmScreen' component={SignupPassConfirmScreen}/>
        </Stack.Navigator>
    )
}