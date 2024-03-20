



//////////////////
// import dotenv from "react-native-dotenv";


import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { NativeBaseProvider } from "native-base";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

// const REST_API_KEY = dotenv.get("REACT_APP_REST_API_KEY");
// const REDIRECT_URI = dotenv.get("REDIRECT_URL");
// const BACKEND_URL = dotenv.get("BACKEND_URL");


const REST_API_KEY = '90c89051f8411e2bede27122b3866f52';
const REDIRECT_URI = 'http://192.168.0.13:8081/callback';


const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;





export const SocialKakao = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigation();

  const handleRedirect = (event) => {
    const url = event.url;
    const code = new URLSearchParams(url.split("?")[1]).get("code");

    if (code) {
      // 로그인 성공
      console.log(code)
      setIsLoggedIn(true);
    } else {
      // 로그인 실패 또는 다른 상황 처리
      console.error("카카오 로그인 실패:", event);
    }
  };

  return (
    <NativeBaseProvider>
      <View>
        {isLoggedIn ? (
          // 로그인 후 보여줄 내용
          <Text>로그인 성공!</Text>
        ) : (
          // 로그인 전 보여줄 내용
          <Button title="카카오 로그인" onPress={() => navigation.navigate('WebViewScreen', { uri: KAKAO_AUTH_URI })} />
        )}
        <WebView
          style={{ flex: 1 }}
          onNavigationStateChange={handleRedirect}
          source={{ uri: KAKAO_AUTH_URI }}
        />
      </View>
    </NativeBaseProvider>
  );
};


