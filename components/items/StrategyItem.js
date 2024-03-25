
import { useNavigation } from "@react-navigation/native";
import { Box, Pressable, ScrollView, Text, View } from "native-base"
import { StyleSheet } from "react-native";




export const StrategyItem = ({ item }) => {

    console.log(item);

    const navigation = useNavigation();

    const handleDetailStrategy = () => {
        navigation.navigate("EditStrategyScreen", { item });
    }

    return (
        <ScrollView>
            <Box style={styles.boxStyle} justifyContent={"center"} alignItems={"center"}>
                <Pressable onPress={handleDetailStrategy} style={styles.container} marginTop={4} w={"80%"}>
                    <View style={styles.boxStyle}>
                        <Text style={styles.strategyText}>{item.strategyName}</Text>
                    </View>
                </Pressable>
            </Box>

        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#E5E7EB',
        borderRadius: 8,
        marginBottom: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    strategyText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#4B5563',
    },
});
