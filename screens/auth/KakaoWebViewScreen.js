import { useNavigation } from "@react-navigation/native";
import React from "react";
import WebView from "react-native-webview";
import { kakaoLoginRequest } from "../../api/auth/SocialAPI";
import { useStore } from "zustand";
import { useAuth } from "../../zustand/useAuth/useAuth";

const REST_API_KEY = '90c89051f8411e2bede27122b3866f52';
const REDIRECT_URI = "http://192.168.0.13:8081/callback";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

export const KakaoWebViewScreen = () => {

  const navigation = useNavigation();

  const {isSignedIn , setIsSignedIn} = useStore(useAuth);

  const kakaoLoginWebView = (newNavState) => {

    console.log("kakaoLoginWebView")

    const { url } = newNavState;
    const code = url.split('code=')[1];

    const result = kakaoLoginRequest(code);

    console.log("카카오 로그인 성공 결과는 : ")
    console.log(result)

    // 카카오 로그인 성공시 Journals 페이지로 반환
    // navigation.navigate('IndexStack', { screen: 'Journals' })

    setIsSignedIn(true);
    console.log("로그인 성공")
    console.log(setIsSignedIn)
  };


  return (
    <WebView
      source={{ uri: KAKAO_AUTH_URL }}
      onNavigationStateChange={kakaoLoginWebView}
    />
  );
}


