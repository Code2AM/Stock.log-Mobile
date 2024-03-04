import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Journals from "./journals/Journals";
import { SocialLogin } from "./auth/SocialLogin";
import TestPage, { LoginScreen } from "./auth/LoginScreen";
import Login from "./Login";
import FindPass from "./FindPassEmailAuth";
import EmailAuth from "./FindPassEmailAuth";
import FindPassEmailAuth from "./FindPassEmailAuth";
import SignupEmailAuth from "./SignupEmailAuth";
import SignupPassConfirm from "./SignupPassConfirm";


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
                component={SocialLogin}
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
        </Tab.Navigator>
    )
}

export default Index;