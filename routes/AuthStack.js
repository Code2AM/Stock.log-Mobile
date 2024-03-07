import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { SignUpScreen } from "../screens/auth/SignupScreen";
import { KakaoWebViewScreen } from "../screens/auth/KakaoWebViewScreen";
import { SignupStack } from "./auth/SignupStack";
import { FindPassStack } from "./auth/FindPassStack";


const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({ headerShown: false })}
            initialRouteName = 'LoginScreen'>
                <Stack.Screen name = 'LoginScreen' component={LoginScreen}/>
                <Stack.Screen name = 'SignupStack' component={SignupStack}/>
                <Stack.Screen name = 'FindPassStack' component={FindPassStack}/>
                <Stack.Screen name = 'KakaoWebViewScreen' component={KakaoWebViewScreen}/>
        </Stack.Navigator>
    )
}