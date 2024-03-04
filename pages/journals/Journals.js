import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashBoard from "./DashBoard";
import JournalsDetail from "./JournalsDetail";

const Stack = createNativeStackNavigator();

const Journals = () => {

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name="매매일지"
                    component={DashBoard}
                />
                <Stack.Screen
                    name="세부내역"
                    component={JournalsDetail}
                    options={{title:"매매기록"}}
                />
            </Stack.Navigator>
        </>
    )
}

export default Journals;