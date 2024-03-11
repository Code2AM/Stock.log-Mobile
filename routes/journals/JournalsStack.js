import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import DashBoardScreen from "../../screens/journals/DashBoardScreen";
import { useStore } from "zustand";
import { useNotes } from "../../zustand/notes/useNotes";
import { useEffect } from "react";
import JournalDetailScreen from "../../screens/journals/JournalDetailScreen";
import BuyAndSellInput from "../../screens/journals/BuyAndSellInput";

const Stack = createNativeStackNavigator();

export const JournalsStack = () => {

    const { fetchAllNotes } = useStore(useNotes)

    useEffect(() => {
      fetchAllNotes();
    },[])
    

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name="JournalsMain"
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
                <Stack.Screen
                    name="BuyAndSellInput"
                    component={BuyAndSellInput}
                    options={{
                        title:"기록 추가",
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