import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const themeSetting = await AsyncStorage.getItem('isDarkMode');
      if (themeSetting !== null) {
        setIsDarkMode(themeSetting === 'true');
      }
    } catch (error) {
      console.error('Failed to load theme', error);
    }
  };

  const toggleTheme = async () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    try {
      await AsyncStorage.setItem('isDarkMode', newTheme.toString());
    } catch (error) {
      console.error('Failed to save theme', error);
    }
  };

  // 다크 모드와 라이트 모드에 대한 각각의 스타일 정의
  const darkModeStyles = {
    backgroundColor: 'black',
    color: 'white',
    
  };

  const lightModeStyles = {
    backgroundColor: 'white',
    color: 'black',
    
  };

  // 테마 상태에 따라 적절한 스타일 선택
  const themeStyles = isDarkMode ? darkModeStyles : lightModeStyles;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};
