import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";
import { kakaoLoginRequest } from "../../api/auth/SocialAPI";

const REST_API_KEY = "90c89051f8411e2bede27122b3866f52";
const REDIRECT_URI = "http://192.168.0.13:8081/callback";

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

export const KakaoWebViewScreen = () => {

  const navigation = useNavigation();

  function KakaoLoginWebView(data) {

    console.log("Data received:", data);

    const exp = "code=";
    var condition = data.indexOf(exp);

    // 인중 코드 초기화
    let code = "";

    // 문자열이 있는지 확인
    if (condition != -1) {
      code = data.substring(condition + exp.length);
      console.log("여기")
      console.log(code)

      const result = kakaoLoginRequest(code);

      console.log("카카오 로그인 성공 결과는 : ")
      console.log(result)

      // 카카오 로그인 성공시 Journals 페이지로 반환
      navigation.navigate('IndexStack', { screen: 'Journals' })
    };
  }

  return (
    <View style={Styles.container}>
      <WebView
        style={{ flex: 1 }}
        originWhitelist={['*']}
        scalesPageToFit={false}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={event => { KakaoLoginWebView(event.nativeEvent["url"]); }}
      />
    </View>
  );
};


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
  },
});

