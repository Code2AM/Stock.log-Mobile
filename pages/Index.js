import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Journals from "./journals/Journals";
import DashBoard from "./DashBoard";
import Login from "./Login";
import FindPass from "./FindPass";


const Tab = createBottomTabNavigator();

const Index = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="매매일지"
                component={Journals}
                options={{headerShown:false}}
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