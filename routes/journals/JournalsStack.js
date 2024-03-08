import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import DashBoardScreen from "../../screens/journals/DashBoardScreen";
import JournalsDetailScreen from "../../screens/journals/JournalsDetailScreen";
import { useStore } from "zustand";
import { useNotes } from "../../zustand/notes/useNotes";
import { useEffect } from "react";

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
                    name="매매일지"
                    component={DashBoardScreen}
                    options={{
                        headerStyle:styles.journalsHeader, 
                        headerTitleAlign:"center", 
                        headerTitleStyle:styles.journalsHeaderTitleStyle
                    }}
                />
                <Stack.Screen
                    name="세부내역"
                    component={JournalsDetailScreen}
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