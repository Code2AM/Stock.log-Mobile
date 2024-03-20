import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { JournalsStack } from "./journals/JournalsStack";
import { NotesStack } from "./notes/NotesStack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SettingStack } from "./setting/SettingStack";

const Tab = createBottomTabNavigator();

export const IndexStack = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#B5D692',
                gestureEnabled:false
                // 전체 탭 바 배경색
            }}
            screenOptions={{
                tabBarStyle: { backgroundColor: "#F2F2F2" },
                gestureEnabled:false
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
                    gestureEnabled: false // 뒤로 가기 제스처 비활성화
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
                    gestureEnabled: false // 뒤로 가기 제스처 비활성화
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
                    gestureEnabled: false // 뒤로 가기 제스처 비활성화
                }}
            />

        </Tab.Navigator>
    )
}