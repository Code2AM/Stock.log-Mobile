import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Journals from "./journals/Journals";
import { SocialLogin } from "./auth/SocialLogin";
import TestPage from "./auth/LoginScreen";
import Login from "./Login";
import FindPass from "./FindPass";
import TestPage from "./auth/LoginScreen";
import { SocialKakao } from "./auth/SocialLogin";


const Tab = createBottomTabNavigator();

const Index = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Journals"
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
                component={FindPass}
            />
        </Tab.Navigator>
    )
}

export default Index;