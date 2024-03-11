import AsyncStorage from "@react-native-async-storage/async-storage";
import { logoutRequest } from "./AuthAPI";

// 로그인 화면으로 돌아가기 위해서 useNavigation으로 props로 받아야함
export const logout = async (navigation, toast) => {
  try {
    // 액세스 토큰과 리프레시 토큰 가져오기

    const accessToken = await AsyncStorage.getItem("accessToken");
    const refreshToken = await AsyncStorage.getItem("refreshToken");

    // 토큰 존재 여부에 따라 제거
    if (accessToken) {
      await AsyncStorage.removeItem('accessToken');
    }
    if (refreshToken) {
      await AsyncStorage.removeItem('refreshToken');
    }

    data = {
      accessToken: accessToken,
      refreshToken: refreshToken,
    }

    const result = await logoutRequest(data)

    // 추가 로그아웃 데이터 제거
    await AsyncStorage.removeItem('expiresAt');
    await AsyncStorage.removeItem('isLogin');

    toast.show({
      title: result,
      duration: 1800,
      placement: "top",
      avoidKeyboard: true,
    })

    // 로그인 화면으로 이동
    navigation.navigate("AuthStack", { screen: "LoginScreen" });
  } catch (error) {
    console.error('로그아웃 에러:', error);
    // 로그아웃 에러 처리 (예: 사용자에게 에러 메시지 표시)
  }
};