import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { JournalsStack } from "./journals/JournalsStack";
import { NotesStack } from "./notes/NotesStack";
import { SettingStack } from "./setting/SettingStack";
import { TestScreen } from "../screens/auth/test/TestScreen";


const Tab = createBottomTabNavigator();

export const IndexStack = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Journals"
                component={JournalsStack}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="Notes"
                component={NotesStack}
            />

            <Tab.Screen
                name="Settings"
                component={SettingStack}
            />

            <Tab.Screen
                name="Test"
                component={TestScreen}
            />


        </Tab.Navigator>
    )
}