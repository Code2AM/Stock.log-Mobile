import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Journals from "./journals/Journals";

const Tab = createBottomTabNavigator();

const Index = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="매매일지"
                component={Journals}
                options={{headerShown:false}}
            />
        </Tab.Navigator>
    )
}

export default Index;