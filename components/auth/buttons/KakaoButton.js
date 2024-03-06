import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base"


export const KakaoButton = () => {
    
    const navigation = useNavigation();

    const handleKakaoLogin = () => {
        navigation.navigate('AuthStack', { screen: 'KakaoWebViewScreen' });
    }


    return (

        <Button
            onPress={handleKakaoLogin}
            p={5}
            m={30}
            borderRadius={50}
            bg="yellow.300"
            width={100}  
            height={100}
        >Kakao</Button>

    )
}