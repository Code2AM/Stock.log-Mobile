import { NativeBaseProvider, View } from "native-base";
import SettingListBtn from "../../parkjiho/components/setting/SettingListBtn"
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StrategiesSetting from "./StrategiesSetting";

const Setting = () => {
    const navigation = useNavigation();

    const handleButtonClick = (name) => {
        navigation.navigate(name); // 해당 페이지로 이동
    };
    
    const Stack = createNativeStackNavigator();

    return(
        <NativeBaseProvider>
            <View styles={styles.settingContainer}>
                <SettingListBtn
                    title={"매매전략 관리"}
                    onPress={() => handleButtonClick('매매전략 페이지')}
                />
                <SettingListBtn
                    title={"비밀번호 변경"}
                        
                />
                <SettingListBtn
                    title={"라벨"}
                    onPress={() => handleButtonClick('라벨 페이지')}
                />
                <SettingListBtn
                    title={"증권사 및 수수료"}
                    onPress={() => handleButtonClick('증권사 및 수수료')}
                />
                <SettingListBtn
                    title={"다크모드"}
                    onPress={() => handleButtonClick('다크모드')}
                />
            </View>
        </NativeBaseProvider>
    )   
}

export default Setting;

const styles = StyleSheet.create({
    settingContainer:{
        flex:1
    }
})