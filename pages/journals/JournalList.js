import { Box, Center, Container, Flex, Heading, Icon, NativeBaseProvider, Pressable, Text } from "native-base";
import { StyleSheet } from "react-native";


const JournalList = ({navigation}) => {

    const goToDetail = () => {
        navigation.navigate("세부내역");
    }

    return (
        <>
            <NativeBaseProvider>
                <Pressable onPress={goToDetail}>
                    <Container style={styles.journalBox}>
                        <Heading>
                            <Text>이름</Text>
                            <Icon/>
                            <Text>날짜</Text>
                            <Box>상하</Box>
                        </Heading>
                        <Flex direction="row">
                            <Center>
                                <Heading>
                                    물량
                                </Heading>
                                <Text>
                                    주수
                                </Text>
                            </Center>
                            <Center>
                                <Heading>
                                    매매가
                                </Heading>
                                <Text>
                                    가격
                                </Text>
                            </Center>
                            <Center>
                                <Heading>
                                    매도가
                                </Heading>
                                <Text>
                                    가격
                                </Text>
                            </Center>
                            <Center>
                                <Heading>
                                    실익
                                </Heading>
                                <Text>
                                    손익
                                </Text>
                            </Center>
                        </Flex>
                    </Container>
                </Pressable>
            </NativeBaseProvider>
        </>
    )
}

export default JournalList;

const styles = StyleSheet.create({
    journalBox:{
        backgroundColor:"white",
        width:"100%"
    }
})