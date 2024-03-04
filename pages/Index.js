import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DashBoard from "./DashBoard";
import { SocialLogin } from "./auth/SocialLogin";
import TestPage, { LoginScreen } from "./auth/LoginScreen";

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
            />
        </Tab.Navigator>
    )
}

export default Index;