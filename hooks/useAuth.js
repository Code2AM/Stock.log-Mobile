import { useState } from "react";

export const useAuth = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = async (username, password) => {
//     try {
//       // 여기에 실제 로그인 API 호출 또는 로그인 로직을 추가
//       // 예: const response = await api.login(username, password);
      
//       // 로그인이 성공했다고 가정
//       setIsLoggedIn(true);

//       // 실제로는 서버 응답에 따라 처리해야 합니다.
//       return true; // 로그인 성공
//     } catch (error) {
//       console.error("로그인 실패:", error);
//       return false; // 로그인 실패
//     }
//   };

    const login = () => {
        setIsLoggedIn(true);
        return true;
    }

  const logout = () => {
    // ... 로그아웃 로직
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};