import { Center, Container, Heading, NativeBaseProvider, Text } from "native-base";
import { StyleSheet } from "react-native";
import JournalListScreen from "./JournalListScreen";
import { useEffect, useState } from "react";
import { makeRequest } from "../../api/common/Api";
import { journalRequest } from "../../api/journals/JournalsAPI";


const DashBoardScreen = ({navigation}) => {

    const [journals, setJournals] = useState([]);

    const handleJournals = async () => {

        const journalsList = await journalRequest();
        console.log(journalsList);
        setJournals(journalsList);
    }
    // 데이터 가져옴
    useEffect(() => {
        handleJournals();
    },[])

    return (
        <>
            <NativeBaseProvider>
                <Heading style={styles.graphs}>
                    그래프 공간
                </Heading>
                <Text></Text>
                <Center>
                    <Container>
                        <FlatList data={journals}>
                            <JournalListScreen navigation={navigation}/>
                        </FlatList>
                    </Container>
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