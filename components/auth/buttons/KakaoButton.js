import { Button } from "native-base"


export const KakaoButton = () => {

    const handleKakaoLogin = () => {
        console.log("KakaoLogin")
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