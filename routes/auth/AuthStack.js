import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignupStack } from "./SignupStack";
import { FindPassStack } from "./FindPassStack";
import { LoginScreen } from "../../screens/auth/LoginScreen";
import { KakaoWebViewScreen } from "../../screens/auth/KakaoWebViewScreen";



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