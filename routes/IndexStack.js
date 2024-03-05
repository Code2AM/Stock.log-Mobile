import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { JournalsStack } from "./journals/JournalsStack";





const Tab = createBottomTabNavigator();

export const IndexStack = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Journals"
                component={JournalsStack}
                options={{headerShown:false}}
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
        </Tab.Navigator>
    )
}