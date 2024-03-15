import { Box, Button, NativeBaseProvider, View } from "native-base";
import { useTheme } from "./themContext";

const DarkmodeScreen = () => {

  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
      <Box>
        <Button 
          onPress={toggleTheme}
          marginTop={10}
        >
          {isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
        </Button>
      </Box>
  );
};

export default DarkmodeScreen;
