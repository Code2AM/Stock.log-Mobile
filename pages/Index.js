import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DashBoard from "./DashBoard";
import { SocialLogin } from "./auth/SocialLogin";
import TestPage, { LoginScreen } from "./auth/LoginScreen";
import Login from "./Login";
import FindPass from "./FindPass";

const Tab = createBottomTabNavigator();

const Index = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="DashBoard"
                component={DashBoard}
            />

            <Tab.Screen
                name="Social Login"
                component={SocialLogin}
            />

            <Tab.Screen
                name="Test"
                component={TestPage}
            <Tab.Screen
                name="Login"
                component={Login}
            />
            <Tab.Screen
                name="FindPass"
                component={FindPass}
            />
        </Tab.Navigator>
    )
}

export default Index;