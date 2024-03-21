import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NoteEditorScreen from "../../screens/notes/NoteEditorScreen";
import NotesScreen from "../../screens/notes/NotesScreen";
import { NewNoteScreen } from "../../screens/notes/NewNoteScreen";
import { StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";



export const NotesStack = () => {
    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();
    const route = useRoute();

    // 노트 탭을 눌렀을 때 노트 화면으로 이동하도록 설정
    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e) => {
            if (route.name !== 'NotesScreen') {
                e.preventDefault();
                navigation.navigate('NotesScreen');
            }
        });

        return unsubscribe;
    }, [navigation, route]);

    return (

        <Stack.Navigator
            initialRouteName='NotesScreen'>

            <Stack.Screen
                name="NotesScreen"
                component={NotesScreen}          
                options={{
                    title: '노트',
                    headerStyle:styles.NotesHeader, 
                    headerTitleAlign:"center",
                    headerTitleStyle:styles.NotesHeaderTitleStyle
                 }}
            />

            <Stack.Screen
                name="NoteEditorScreen"
                component={NoteEditorScreen}
                options={{
                    title: '노트 수정',
                    headerStyle:styles.NotesHeader, 
                    headerTitleAlign:"center",
                    headerTitleStyle:styles.NotesHeaderTitleStyle,
                }}
            />

            <Stack.Screen
                name="NewNoteScreen"
                component={NewNoteScreen}
                options={{
                    title: '새 노트',
                    headerStyle:styles.NotesHeader, 
                    headerTitleAlign:"center",
                    headerTitleStyle:styles.NotesHeaderTitleStyle
                }}
            />

        </Stack.Navigator>

    );
}

const styles = StyleSheet.create({
    NotesHeader : {
        backgroundColor:"#B5D692"
    },
    NotesHeaderTitleStyle : {
        color:"white",
        fontWeight:"bold"
    }
})