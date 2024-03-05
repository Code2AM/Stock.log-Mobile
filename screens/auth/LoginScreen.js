import { useState } from "react";


import { Button, Link, NativeBaseProvider, View } from "native-base";

import { useNavigation } from "@react-navigation/core";
import { useAuth } from "../../hooks/useAuth";
import AuthInput from "../../components/auth/AuthInput";

export const LoginScreen = () => {


    const { login } = useAuth();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        // 실제 로그인 로직을 여기에 작성합니다 (예: API 호출, 유효성 검사)
        // 실제 구현으로 바꿔주세요
        // const loginSuccess = await login(username, password);

        const loginSuccess = true;

        if (loginSuccess) {
            // 로그인 성공, Index 화면으로 이동
            console.log('로그인 성공')
            login(); // 필요하다면 로그인 상태 업데이트
            navigation.navigate('IndexStack',{screen: 'Journals'})
            
        } else {
            // 로그인 실패 처리 (예: 오류 메시지 표시)
            console.error('로그인 실패');
        }
    };

    return (
        <NativeBaseProvider>
            <View>
                <AuthInput
                    type={"email"}
                    placeholder={"Email"}
                    value={username}
                    onChangeText={setUsername}
                />
                <AuthInput
                    type={"password"}
                    placeholder={"Password"}
                    value={password}
                    onChangeText={setPassword}
                />
                <Link onPress={handleLogin}>비밀번호를 잊어버리셨나요?</Link>
                <Button title="로그인" onPress={handleLogin} />
            </View>

        </NativeBaseProvider>
    );
};


// version2

// import { Link, NativeBaseProvider } from "native-base"
// import AuthInput from "../../components/auth/AuthInput"
// import AuthButton from "../../components/auth/AuthButton"
// import { useNavigation } from "@react-navigation/core";
// import { NavigationContainer } from "@react-navigation/native";

// const Login = () => {

//     const navigation = useNavigation();

//     const handleFindPass = () => {
//         navigation.navigate('FindPass'); // ForgotPassword 화면으로 이동
//     };

//     const handleSignUp = () => {
//         navigation.navigate('SignUp'); // SignUp 화면으로 이동
//     };

//     return(  
//         <NativeBaseProvider>
//             <AuthInput
//                 type={"email"}
//                 placeholder={"Email"}
//             />
//              <AuthInput
//                 type={"password"}
//                 placeholder={"Password"}
//             />
//             <Link onPress={handleFindPass}>비밀번호를 잊어버리셨나요?</Link>
//             <AuthButton
//                 value={"로그인"}
//             />
//         </NativeBaseProvider>
        
//     )
// }
// export default Login;




// version 3

// import React from "react";
// import { View, StyleSheet } from "react-native";
// import { WebView } from 'react-native-webview';

// const REST_API_KEY = '90c89051f8411e2bede27122b3866f52';
// const REDIRECT_URI = 'http://192.168.0.13:8081/callback';
// const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

// export const TestPage = () => {

//   function KakaoLoginWebView (data) {

//     console.log("Data received:", data);


//     const exp = "code=";
//     var condition = data.indexOf(exp);    
//     if (condition != -1) {
//       var authorize_code = data.substring(condition + exp.length);
//       console.log(authorize_code);
//     };
//   }

//   return (
//     <View style={Styles.container}>      
//       <WebView
//         style={{ flex: 1 }}
//         originWhitelist={['*']}
//         scalesPageToFit={false}
//         source={{
//           uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
//         }}
//         injectedJavaScript={INJECTED_JAVASCRIPT}
//         javaScriptEnabled
//         onMessage={event => { KakaoLoginWebView(event.nativeEvent["url"]); }}
//       />
//     </View>
//   )
// }

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 24,
//     backgroundColor: '#fff',
//   },    
// });



// version 4

// import { useState } from "react";
// import { Button } from "react-native";
// import { useAuth } from "../../hooks/useAuth";
// import AuthInput from "../../components/auth/AuthInput";
// import { Link, NativeBaseProvider, View } from "native-base";
// import { navigate } from "./RootNavigation";

// export const LoginAuth = () => {
//     const { login } = useAuth();
    

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = () => {
//         // 실제 로그인 로직을 여기에 작성합니다 (예: API 호출, 유효성 검사)
//         // 실제 구현으로 바꿔주세요
//         // const loginSuccess = await login(username, password);

//         const loginSuccess = true;

//         if (loginSuccess) {
//             // 로그인 성공, Index 화면으로 이동
//             console.log('로그인 성공')
//             login(); // 필요하다면 로그인 상태 업데이트
//             navigate('매매일지', {userId:123}) // useNavigation Hook 사용
//         } else {
//             // 로그인 실패 처리 (예: 오류 메시지 표시)
//             console.error('로그인 실패');
//         }
//     };

//     return (
//         <NativeBaseProvider>
//             <View>
//                 <AuthInput
//                     type={"email"}
//                     placeholder={"Email"}
//                     value={username}
//                     onChangeText={setUsername}
//                 />
//                 <AuthInput
//                     type={"password"}
//                     placeholder={"Password"}
//                     value={password}
//                     onChangeText={setPassword}
//                 />
//                 <Link onPress={handleLogin}>비밀번호를 잊어버리셨나요?</Link>
//                 <Button title="로그인" onPress={handleLogin} />
//             </View>

//         </NativeBaseProvider>
//     );
// };


// version5

// import React, { useEffect } from "react";
// import { View, StyleSheet, Linking } from "react-native";
// import { WebView } from 'react-native-webview';

// const REST_API_KEY = '90c89051f8411e2bede27122b3866f52';
// const REDIRECT_URI = 'http://192.168.0.13:8081/callback';
// const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

// const TestPage = () => {

//   function KakaoLoginWebView (data) {

//     console.log("Data received:", data);


//     const exp = "code=";
//     var condition = data.indexOf(exp);    
//     if (condition != -1) {
//       var authorize_code = data.substring(condition + exp.length);
//       console.log(authorize_code);
//     };
//   }

//   console.log("Dfdsdfsd")
//   return (
//     <View style={Styles.container}>
    
//       <WebView
//         style={{ flex: 1 }}
//         originWhitelist={['*']}
//         scalesPageToFit={false}
//         source={{
//           uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
//         }}
//         injectedJavaScript={INJECTED_JAVASCRIPT}
//         javaScriptEnabled
//         onMessage={event => { KakaoLoginWebView(event.nativeEvent["url"]); }}
//       />
//     </View>
//   )
// }

// export default TestPage;

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 24,
//     backgroundColor: '#fff',
//   },    
// });


// version 6

// import { Container, Link, NativeBaseProvider, Text } from "native-base"
// import AuthInput from "../parkjiho/components/auth/AuthInput"
// import AuthButton from "../parkjiho/components/auth/AuthButton"
// import { useNavigation } from "@react-navigation/core";
// import { StyleSheet } from "react-native";

// const Login = () => {
//     const navigation = useNavigation();

//     const handleFindPass = () => {
//         navigation.navigate('FindPass'); // 비밀번호 찾기 화면으로 이동
//     };

//     const handleSignUp = () => {
//         navigation.navigate('LoginAuth'); // 회원가입 화면으로 이동
//     };

//     return(  
//         <NativeBaseProvider>
//             <Container styles={styles.container}> 
//                 <Text textAlign="center" fontSize="xl">
//                     회원가입
//                 </Text>
//                 <AuthInput
//                     type={"email"}
//                     placeholder={"Email"}
//                     styles={styles.container}
//                 />
//                 <AuthInput
//                     type={"password"}
//                     placeholder={"Password"}
//                     styles={styles.container}
//                 />
//                 <Link onPress={handleFindPass}>비밀번호를 잊어버리셨나요?</Link>
//                 <AuthButton
//                     value={"로그인"}
//                 />
//                 <Link onPress={handleSignUp} >회원가입</Link>
//             </Container>
//         </NativeBaseProvider>
//     );
// }


// export default Login;

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })
