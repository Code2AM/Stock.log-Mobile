import { Box, FlatList, HStack, Heading, NativeBaseProvider, Pressable, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";
import { useEffect} from "react";
import JournalsList from "../../components/journals/JournalsList";
import useJournals from "../../zustand/journals/useJournals";
import AddJournalsButton from "../../components/journals/AddJournalsButton";
import { useStocks } from "../../zustand/stocks/useStocks";
import { useStrategies } from "../../zustand/strategies/useStrategies";
import JournalsChart from "../../components/journals/JournalsChart";


const DashBoardScreen = ({navigation}) => {

    // 전역 변수화
    const {journals, setJournals} = useJournals();
    const {stocks, fetchStocks} = useStocks();
    const {strategies, fetchStrategies} = useStrategies();

    const handleJournals = async () => {
        await setJournals();
    }
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            await handleJournals();

            await fetchStocks();
            
            await fetchStrategies();
        });

        // Clean up
        return unsubscribe;
    }, [navigation, strategies]);

    function onPressHandler(item){
        navigation.navigate("JournalDetail", {journalId:item.journalId});
    };

    return (
        <>
            <NativeBaseProvider>
                <JournalsChart journals={journals}/>
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