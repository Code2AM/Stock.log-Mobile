import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Journals } from "../pages/journals/Journals";
import { Login2 } from "../screens/auth/test/Login2";
import { Login3 } from "../screens/auth/test/Login3";
import { Login4 } from "../screens/auth/test/Login4";
import { Login5 } from "../screens/auth/test/Login5";





const Tab = createBottomTabNavigator();

export const IndexStack = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Journals"
                component={Journals}
                options={{ headerShown: false }}
            />

            {/* <Tab.Screen
                name="Social Login"
                component={SocialKakao}
            /> */}

            {/* <Tab.Screen
                name="Test"
                component={TestPage}
            /> */}

            {/* <Tab.Screen
                name="Login"
                component={Login}
            /> */}

            {/* <Tab.Screen
                name="FindPass"
                component={FindPassEmailAuth}
                title={"이메일 인증"}
            /> */}

            {/* <Tab.Screen
                name="LoginAuth"
                component={SignupEmailAuth}
                title={"회원가입"}
            /> */}

            {/* <Tab.Screen
                name="SignupPassConfirm"
                component={SignupPassConfirm}
            /> */}

            {/* <Tab.Screen
                name="SettingList"
                component={Setting}
            /> */}

            {/* <Tab.Screen
                name="매매전략 페이지"
                component={StrategiesSetting}
            /> */}

            {/* <Tab.Screen
                name="라벨 페이지"
                component={Label}
            /> */}

            {/* <Tab.Screen
                name="증권사 및 수수료"
                component={Fee}
            /> */}

            {/* <Tab.Screen
                name="다크모드"
                component={Darkmode}
            /> */}

            <Tab.Screen
                name="Login2"
                component={Login2}
            />

            {/* 카카오 로그인 관련  */}
            <Tab.Screen
                name="Login3"
                component={Login3}
            />

            {/* 카카오 로그인 2  */}
            <Tab.Screen
                name="Login4"
                component={Login4}
            />

            {/* 로그인 테스트 5  */}
            <Tab.Screen
                name="Login5"
                component={Login5}
            />

        </Tab.Navigator>
    )
}