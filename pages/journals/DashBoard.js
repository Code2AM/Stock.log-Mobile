import { Center, Container, FlatList, Heading, NativeBaseProvider, Text } from "native-base";
import JournalList from "./JournalList";
import { StyleSheet } from "react-native";


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
                            <JournalList navigation={navigation}/>
                        {/* </FlatList> */}
                    </Container>
                </Center>
            </NativeBaseProvider>
        </>
    )
}

export default DashBoard;

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