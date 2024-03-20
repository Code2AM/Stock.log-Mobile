import { useNavigation } from "@react-navigation/native";
import React from "react";
import WebView from "react-native-webview";
import { kakaoLoginRequest } from "../../api/auth/SocialAPI";

const REST_API_KEY = process.env.EXPO_PUBLIC_REST_API_KEY;
const REDIRECT_URI = process.env.EXPO_PUBLIC_REDIRECT_URL;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

export const KakaoWebViewScreen = () => {

  const navigation = useNavigation();

  const kakaoLoginWebView = (newNavState) => {

    const { url } = newNavState;
    const code = url.split('code=')[1];

    const result = kakaoLoginRequest(code);

    console.log("카카오 로그인 성공 결과는 : ")
    console.log(result)

    // 카카오 로그인 성공시 Journals 페이지로 반환
    navigation.navigate('IndexStack', { screen: 'Journals' })
  };


  return (
    <WebView
      source={{ uri: KAKAO_AUTH_URL }}
      onNavigationStateChange={kakaoLoginWebView}
    />
  );
}


