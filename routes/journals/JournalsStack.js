import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import DashBoardScreen from "../../screens/journals/DashBoardScreen";
import JournalDetailScreen from "../../screens/journals/JournalDetailScreen";

const Stack = createNativeStackNavigator();

export const JournalsStack = () => {

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name="Journals"
                    component={DashBoardScreen}
                    options={{
                        title:"매매일지",
                        headerStyle:styles.journalsHeader, 
                        headerTitleAlign:"center", 
                        headerTitleStyle:styles.journalsHeaderTitleStyle
                    }}
                />
                <Stack.Screen
                    name="JournalDetail"
                    component={JournalDetailScreen}
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