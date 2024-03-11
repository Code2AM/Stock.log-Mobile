import { FlatList, Heading, NativeBaseProvider, Pressable, Text } from "native-base";
import { StyleSheet } from "react-native";
import { useEffect} from "react";
import JournalsList from "../../components/journals/JournalsList";
import useJournals from "../../zustand/journals/useJournals";
import AddJournalsButton from "../../components/journals/AddJournalsButton";


const DashBoardScreen = ({navigation}) => {

    // 전역 변수화
    const {journals, setJournals} = useJournals();

    const handleJournals = async () => {
        setJournals();
    }
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleJournals();
        });

        // Clean up
        return unsubscribe;
    }, [navigation]);

    function onPressHandler(item){
        navigation.navigate("JournalDetail", {journalId:item.journalId});
    };

    console.log(journals); // 확인
    return (
        <>
            <NativeBaseProvider>
                <Heading style={styles.graphs}>
                    그래프 공간
                </Heading>
                        <FlatList 
                            data={journals} 
                            renderItem={({item}) => 
                            <Pressable onPress={() => onPressHandler(item)}>
                                <JournalsList journals={item}/>
                            </Pressable>
                            }
                            keyExtractor={(item) => item.journalId}
                        />
                        <AddJournalsButton journals={journals} navigation={navigation}/>
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
        alignItems:"center",
        textAlign:"center",
        color:"white",
        marginBottom:"2%"
    }
})