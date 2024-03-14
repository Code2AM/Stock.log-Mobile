import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, StatusBar } from "native-base";
import { MainStack } from "./routes/MainStack";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";


SplashScreen.preventAutoHideAsync();

export default function App() {

  useEffect(() => {

  },[])

  return (
    <NativeBaseProvider>
      <StatusBar/>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}