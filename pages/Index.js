import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DashBoard from "./DashBoard";
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