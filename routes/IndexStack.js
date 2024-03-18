import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { JournalsStack } from "./journals/JournalsStack";
import { NotesStack } from "./notes/NotesStack";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SettingStack } from "./setting/SettingStack";

const Tab = createBottomTabNavigator();

export const IndexStack = () => {

    return (
        <Tab.Navigator
        
            tabBarOptions={{
            activeTintColor: '#B5D692',
        }}
            
        >
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
                initialRouteName="NotesScreen"
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
                initialRouteName="SettingScreen"
                options={{
                     headerShown: false,
                     tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="wrench" color={color} size={size} />
                      ),
                }}
            />

        </Tab.Navigator>
    )
}