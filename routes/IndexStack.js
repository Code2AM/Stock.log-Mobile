import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { JournalsStack } from "./journals/JournalsStack";
import { SettingStack } from "./SettingStack";
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

            {/* <Tab.Screen
                name="Social Login"
                component={SocialKakao}
            /> */}

            {/* <Tab.Screen
                name="Test"
                component={TestPage}
            /> */}

            {/* <Tab.Screen
                name="Login"
                component={Login}
            /> */}

            {/* <Tab.Screen
                name="FindPass"
                component={FindPassEmailAuth}
                title={"이메일 인증"}
            /> */}

            {/* <Tab.Screen
                name="LoginAuth"
                component={SignupEmailAuth}
                title={"회원가입"}
            /> */}

            {/* <Tab.Screen
                name="SignupPassConfirm"
                component={SignupPassConfirm}
            /> */}

            {/* <Tab.Screen
                name="SettingList"
                component={Setting}
            /> */}

            {/* <Tab.Screen
                name="매매전략 페이지"
                component={StrategiesSetting}
            /> */}

            {/* <Tab.Screen
                name="라벨 페이지"
                component={Label}
            /> */}

            {/* <Tab.Screen
                name="증권사 및 수수료"
                component={Fee}
            /> */}

            {/* <Tab.Screen
                name="다크모드"
                component={Darkmode}
            /> */}

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