import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { JournalsStack } from "./journals/JournalsStack";
import { NotesStack } from "./notes/NotesStack";
import { SettingStack } from "./setting/SettingStack";
import { TestScreen } from "../screens/auth/test/TestScreen";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export const IndexStack = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Journals"
                component={JournalsStack}
                options={{
                     headerShown: false,
                     tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="file-invoice-dollar" color={color} size={size} />
                      ),
                     }}
            />

            <Tab.Screen
                name="Notes"
                component={NotesStack}
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="pen" color={color} size={size} />
                      ),
                 }}
            />

            <Tab.Screen
                name="Settings"
                component={SettingStack}
                options={{
                     headerShown: false,
                     tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="wrench" color={color} size={size} />
                      ),
                }}
            />

            <Tab.Screen
                name="Test"
                component={TestScreen}
                options={{ headerShown: false }}
            />


        </Tab.Navigator>
    )
}