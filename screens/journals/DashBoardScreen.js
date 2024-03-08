import { Center, Container, FlatList, Heading, NativeBaseProvider, Pressable, Text } from "native-base";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { journalRequest } from "../../api/journals/JournalsAPI";
import JournalsList from "../../components/journals/JournalsList";


const DashBoardScreen = ({navigation}) => {

    const [journals, setJournals] = useState([]);

    const handleJournals = async () => {

        const journalsList = await journalRequest();
        console.log(journalsList);
        setJournals(journalsList);
    }
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleJournals();
        });

        // Clean up
        return unsubscribe;
    }, [navigation]);

    function onPressHandler(item){
        navigation.navigate("JournalDetail", {journals:item});
    };

    return (
        <>
            <NativeBaseProvider>
                <Heading style={styles.graphs}>
                    그래프 공간
                </Heading>
                <Text></Text>
                <Center>
                        <FlatList 
                            data={journals} 
                            renderItem={({item}) => 
                            <Pressable onPress={() => onPressHandler(item)}>
                                <JournalsList journals={item}/>
                            </Pressable>
                            }
                            keyExtractor={(item) => item.journalId}
                        />
                </Center>
            </NativeBaseProvider>
        </>
    )
}

export default DashBoardScreen;

const styles = StyleSheet.create({
    graphs:{
        backgroundColor:"#B5D692",
        width:"100%",
        height:"30%",
        marginBottom:10,
        alignItems:"center",
        textAlign:"center",
        color:"white"
    }
})