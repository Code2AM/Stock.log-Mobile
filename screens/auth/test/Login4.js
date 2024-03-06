
import { View } from 'native-base';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const REST_API_KEY = '90c89051f8411e2bede27122b3866f52';
const REDIRECT_URI = 'http://192.168.0.13:8081/callback';
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

export const Login4 = () => {

    function KakaoLoginWebView (data) {

        console.log("Data received:", data);
    
    
        const exp = "code=";
        var condition = data.indexOf(exp);    
        if (condition != -1) {
          var authorize_code = data.substring(condition + exp.length);
          console.log(authorize_code);
        };
      }
    
      console.log("Dfdsdfsd")

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
      )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
  },    
});
