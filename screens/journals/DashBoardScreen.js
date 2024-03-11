import { FlatList, Heading, NativeBaseProvider, Pressable, Text } from "native-base";
import { StyleSheet } from "react-native";
import { useEffect} from "react";
import JournalsList from "../../components/journals/JournalsList";
import useJournals from "../../zustand/journals/useJournals";
import AddJournalsButton from "../../components/journals/AddJournalsButton";
import { useStocks } from "../../zustand/stocks/useStocks";


const DashBoardScreen = ({navigation}) => {

    // 전역 변수화
    const {journals, setJournals} = useJournals();
    const {stocks, fetchStocks} = useStocks();

    const handleJournals = async () => {
        await setJournals();
    }
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            await handleJournals();

            if(stocks == []){
                await fetchStocks();
            }
        });

        // Clean up
        return unsubscribe;
    }, [navigation]);

    function onPressHandler(item){
        navigation.navigate("JournalDetail", {journalId:item.journalId});
    };

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