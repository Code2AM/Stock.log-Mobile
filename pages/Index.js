import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DashBoard from "./DashBoard";

const Tab = createBottomTabNavigator();

const Index = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="DashBoard"
                component={DashBoard}
        />
        </Tab.Navigator>
    )
}

export default Index;