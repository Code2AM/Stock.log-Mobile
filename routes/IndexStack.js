import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { JournalsStack } from "./journals/JournalsStack";
import { NotesStack } from "./notes/NotesStack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SettingStack } from "./setting/SettingStack";

const Tab = createBottomTabNavigator();

export const IndexStack = () => {

    return (
        
        <Tab.Navigator
            screenOptions={{               
                tabBarStyle: { backgroundColor: "#F2F2F2" },
                tabBarActiveTintColor:'#B5D692',
            }}
        >
            <Tab.Screen
                name="매매일지"
                component={JournalsStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="layers-edit" color={color} size={size} />
                    ), 
                }}
            />

            <Tab.Screen
                name="노트"
                component={NotesStack}
                initialRouteName="NotesScreen"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="note-edit-outline" color={color} size={size} />
                    ),
                    
                }}
            />

            <Tab.Screen
                name="설정"
                component={SettingStack}
                initialRouteName="SettingScreen"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}