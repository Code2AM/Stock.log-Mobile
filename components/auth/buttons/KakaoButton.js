import { useNavigation } from "@react-navigation/native";
import { Button, Image } from "native-base"

const image = require('../../../assets/icons/auth/kakao_login_medium_narrow.png');


export const KakaoButton = () => {

    const navigation = useNavigation();

    const handleKakaoLogin = () => {
        navigation.navigate('AuthStack', { screen: 'KakaoWebViewScreen' });


    }


    return (
        <Button onPress={handleKakaoLogin}
            bgColor={"#FEE500"}
            _style={{ alignSelf: 'center' }}
            width={180} // Adjust width as needed
            height={12}
            marginTop={12}
            marginLeft={39}>
            <Image source={image} alt="카카오로그인" />
        </Button>
    );
}