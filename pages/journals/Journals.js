import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashBoard from "./DashBoard";
import JournalsDetail from "./JournalsDetail";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export const Journals = () => {

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name="매매일지"
                    component={DashBoard}
                    options={{
                        headerStyle:styles.journalsHeader, 
                        headerTitleAlign:"center", 
                        headerTitleStyle:styles.journalsHeaderTitleStyle
                    }}
                />
                <Stack.Screen
                    name="세부내역"
                    component={JournalsDetail}
                    options={{
                        title:"매매기록",
                        headerStyle:styles.journalsHeader, 
                        headerTitleAlign:"center", 
                        headerTitleStyle:styles.journalsHeaderTitleStyle
                    }}
                />
            </Stack.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    journalsHeader : {
        backgroundColor:"#B5D692"
    },
    journalsHeaderTitleStyle : {
        color:"white",
        fontWeight:"bold"
    }
})