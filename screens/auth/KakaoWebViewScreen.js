import { useNavigation } from "@react-navigation/native";
import React from "react";
import WebView from "react-native-webview";
import { kakaoLoginRequest } from "../../api/auth/SocialAPI";
import { useStore } from "zustand";
import { useUpdate } from "../../zustand/update/useUpdate";

const REST_API_KEY = "90c89051f8411e2bede27122b3866f52";
const REDIRECT_URI = "http://192.168.0.13:8081/callback";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;


export const KakaoWebViewScreen = () => {

  const navigation = useNavigation();

  const { needUpdateBuy, setNeedUpdateBuy } = useStore(useUpdate)

  const handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState;
    const code = url.split('code=')[1];
    if (code) {
      const result = kakaoLoginRequest(code);

      console.log("카카오 로그인 성공 결과는 : ")
      console.log(result)

      // update 할 값을 지정
      setNeedUpdateBuy(true);
      console.log("setNeedUpdate")
      console.log(needUpdateBuy)

      // 카카오 로그인 성공시 Journals 페이지로 반환
      navigation.navigate('IndexStack', { screen: 'Journals' })
    }
};

  return (
    <WebView
            source={{ uri: KAKAO_AUTH_URL }}
            onNavigationStateChange={handleWebViewNavigationStateChange}
        />
  );
};