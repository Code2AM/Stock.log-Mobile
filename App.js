import { NavigationContainer } from '@react-navigation/native';
import Index from './pages/Index';
import { NativeBaseProvider, StatusBar } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar/>
      <NavigationContainer>
        <Index/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}