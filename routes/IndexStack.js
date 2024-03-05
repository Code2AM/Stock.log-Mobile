import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Journals } from "../pages/journals/Journals";
import { SocialKakao } from "../components/auth/social/SocialKakao";
import { TestPage } from "../pages/auth/LoginScreen";



const Tab = createBottomTabNavigator();

export const IndexStack = () => {

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