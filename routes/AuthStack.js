import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/auth/LoginScreen";
import { SignUpScreen } from "../screens/auth/SignupScreen";
import { KakaoWebViewScreen } from "../screens/auth/KakaoWebViewScreen";


const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({ headerShown: false })}
            initialRouteName = 'LoginScreen'>
                <Stack.Screen name = 'LoginScreen' component={LoginScreen}/>
                <Stack.Screen name = 'SignupScreen' component={SignUpScreen}/>
                <Stack.Screen name = 'KakaoWebViewScreen' component={KakaoWebViewScreen}/>
        </Stack.Navigator>
    )
}