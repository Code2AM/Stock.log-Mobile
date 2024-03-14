import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Pressable, ScrollView, Text, VStack } from "native-base";
import { StyleSheet } from "react-native";

const LabelsItem = ({item}) => {

    console.log(item);

    const navigation = useNavigation();

    const handleUpdateLabels = () => {
        navigation.navigate("EditLabelScreen", {item})
    }

    return (
        <ScrollView>
            <Pressable onPress={handleUpdateLabels} style={styles.container}>
                <Box style={styles.boxStyle}>
                    <HStack>
                        <VStack>
                            <Text style={styles.labelText}>{item.labelsTitle}</Text>
                        </VStack>
                    </HStack>
                </Box>
        </Pressable>
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
      height:50
    },
    boxStyle: {
        alignItems:"center",
        justifyContent:"center",
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelText: {
        marginTop:10,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#4B5563',
    },
  });