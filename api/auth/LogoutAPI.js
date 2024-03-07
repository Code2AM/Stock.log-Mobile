import AsyncStorage from "@react-native-async-storage/async-storage";

// 로그인 화면으로 돌아가기 위해서 useNavigation으로 props로 받아야함
export const logout = async (navigation, toast) => {
    try {
      // 액세스 토큰과 리프레시 토큰 가져오기
      const { accessToken, refreshToken } = await AsyncStorage.multiGet([
        'accessToken',
        'refreshToken',
      ]);
  
      // 토큰 존재 여부에 따라 제거
      if (accessToken) {
        await AsyncStorage.removeItem('accessToken');
      }
      if (refreshToken) {
        await AsyncStorage.removeItem('refreshToken');
      }
  
      // 추가 로그아웃 데이터 제거
      await AsyncStorage.multiRemove(['expiresAt', 'isLogin']);

      toast.show({
        title: "안녕히 가세요. 다음에 또 봐요!",
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