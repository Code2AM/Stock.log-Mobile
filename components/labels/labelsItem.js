import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Pressable, ScrollView, Text, VStack, View } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";

const LabelsItem = ({ item }) => {

    console.log(item);

    const navigation = useNavigation();

    const handleUpdateLabels = () => {
        navigation.navigate("EditLabelScreen", { item })
    }

    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    return (
        <ScrollView>
            <Box justifyContent={"center"} alignItems={"center"} onPress={handlePress} >
                <Pressable onPress={handleUpdateLabels} style={styles.container} marginTop={4} w={"80%"}>
                    <View style={styles.boxStyle}>
                        <Text style={styles.labelText}>{item.labelsTitle}</Text>
                    </View>
                </Pressable>
            </Box>
        </ScrollView>
    );
}

export default LabelsItem;

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
    labelText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#4B5563',
    },
});