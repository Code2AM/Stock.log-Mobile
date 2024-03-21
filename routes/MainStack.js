import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStack } from "../routes/auth/AuthStack";
import { IndexStack } from "./IndexStack";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStore } from "zustand";
import { useAuth } from "../zustand/useAuth/useAuth";

const Stack = createNativeStackNavigator();

export const MainStack = () => {

    const { isSignedIn , setIsSignedIn } = useStore(useAuth);
   

    // Logined 상태 확인
    useEffect(() => {
        const checkLogined = async () => {
            await AsyncStorage.removeItem('Logined');
            console.log("checkedLogin")
            console.log(isSignedIn)

            const logined = await AsyncStorage.getItem('Logined');

            
            if (logined){
                setIsSignedIn(true)
            }
        };
        checkLogined();
    }, []);



    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({ headerShown: false })}
        >
            {isSignedIn ? (
                // Logined 상태일 때 IndexStack만 렌더링
                <Stack.Screen name="IndexStack" component={IndexStack} />
            ) : (
                // Logined 상태가 아닐 때 AuthStack 렌더링
                <Stack.Screen name="AuthStack" component={AuthStack} />
            )}
        </Stack.Navigator>

    )
}