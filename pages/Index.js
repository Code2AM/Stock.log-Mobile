import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Journals from "./journals/Journals";
import { SocialKakao } from "./auth/SocialLogin";
import TestPage, { LoginScreen } from "./auth/LoginScreen";
import Login from "./Login";
import FindPassEmailAuth from "./FindPassEmailAuth";
import SignupEmailAuth from "./SignupEmailAuth";
import SignupPassConfirm from "./SignupPassConfirm";
import Setting from "./setting/Setting";
import StrategiesSetting from "./setting/StrategiesSetting";
import Label from "./setting/Label";
import Fee from "./setting/Fee";
import Darkmode from "./setting/Darkmode";


const Tab = createBottomTabNavigator();

const Index = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="매매일지"
                component={Journals}
                options={{headerShown:false}}
            />

            <Tab.Screen
                name="Social Login"
                component={SocialKakao}
            />

            <Tab.Screen
                name="Test"
                component={TestPage}
            />
            <Tab.Screen
                name="Login"
                component={Login}
            />
            <Tab.Screen
                name="FindPass"
                component={FindPassEmailAuth}
                title={"이메일 인증"}
            />
            <Tab.Screen
                name="LoginAuth"
                component={SignupEmailAuth}
                title={"회원가입"}
            />
            <Tab.Screen
                name="SignupPassConfirm"
                component={SignupPassConfirm}
            />
            <Tab.Screen
                name="SettingList"
                component={Setting}
            />
            <Tab.Screen
                name="매매전략 페이지"
                component={StrategiesSetting}
            />
             <Tab.Screen
                name="라벨 페이지"
                component={Label}
            />
            <Tab.Screen
                name="증권사 및 수수료"
                component={Fee}
            />
            <Tab.Screen
                name="다크모드"
                component={Darkmode}
            />
        </Tab.Navigator>
    )
}

export default Index;