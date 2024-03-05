import { Center, Container, Heading, NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import JournalListScreen from "./JournalListScreen";


const DashBoardScreen = ({navigation}) => {

    return (
        <>
            <NativeBaseProvider>
                <Heading style={styles.graphs}>
                    그래프 공간
                </Heading>
                <Center>
                    <Container>
                        {/* <FlatList data={data}> */}
                            <JournalListScreen navigation={navigation}/>
                        {/* </FlatList> */}
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