import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, StatusBar } from "native-base";
import { MainStack } from "./routes/MainStack";


export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar/>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}