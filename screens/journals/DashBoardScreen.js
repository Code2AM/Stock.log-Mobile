import { FlatList, Heading, NativeBaseProvider, Pressable, Text } from "native-base";
import { StyleSheet } from "react-native";
import { useEffect} from "react";
import JournalsList from "../../components/journals/JournalsList";
import useJournals from "../../zustand/journals/useJournals";


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
                <Text></Text>
                        <FlatList 
                            data={journals} 
                            renderItem={({item}) => 
                            <Pressable onPress={() => onPressHandler(item)}>
                                <JournalsList journals={item}/>
                            </Pressable>
                            }
                            keyExtractor={(item) => item.journalId}
                        />
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
        color:"white"
    }
})