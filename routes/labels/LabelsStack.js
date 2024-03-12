import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewLabelScreen } from "../../screens/Setting/labels/NewLabelScreen";
import LabelsScreen from "../../screens/Setting/labels/LabelsScreen";
import EditLabelScreen from "../../screens/Setting/labels/EditLabelScreen";

const Stack = createNativeStackNavigator();

export const LabelsStack = () => {

    return (

        <Stack.Navigator
            initialRouteName='LabelsScreen'
            screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name="LabelsScreen"
                component={LabelsScreen}
                options={{ title: '라벨' }}
            />

            <Stack.Screen
                name="NewLabelScreen"
                component={NewLabelScreen}
                options={{ title: '새 라벨' }}
            />

            <Stack.Screen
                name="EditLabelScreen"
                component={EditLabelScreen}
                options={{ title: '라벨 수정' }}
            />

        </Stack.Navigator>

    );
}