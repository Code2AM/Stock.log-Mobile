import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Pressable, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";

const LabelsItem = ({item}) => {

    console.log(item);

    const navigation = useNavigation();

    const handleUpdateLabels = () => {
        navigation.navigate("EditLabelScreen", {item})
    }

    return (
        <Pressable onPress={handleUpdateLabels} style={styles.container}>
            <Box style={styles.boxStyle}>
                <HStack>
                    <VStack>
                        <Text style={styles.labelText}>{item.labelsTitle}</Text>
                    </VStack>
                </HStack>
            </Box>
        </Pressable>
    );
}
export default LabelsItem;

const styles = StyleSheet.create({
    container: {
        marginLeft:58,
        alignItems:"center",
        width:"70%",
        marginTop:20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 5,
    },
    labelText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});