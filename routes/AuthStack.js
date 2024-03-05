import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/auth/LoginScreen";


const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({ headerShown: false })}
            initialRouteName = 'LoginScreen'>
                <Stack.Screen name = 'LoginScreen' component={LoginScreen}/>
        </Stack.Navigator>
    )
}