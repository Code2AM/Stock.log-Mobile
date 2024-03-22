import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStack } from "../routes/auth/AuthStack";
import { IndexStack } from "./IndexStack";


const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({ headerShown: false })}
            initialRouteName={"AuthStack"}
        >
           <Stack.Screen name="AuthStack" component={AuthStack}/>
           <Stack.Screen name="IndexStack" component={IndexStack}/>
        </Stack.Navigator>

    )
}