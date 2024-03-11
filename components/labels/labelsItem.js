import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Pressable, Text, VStack } from "native-base";

const LabelsItem = ({item}) => {

    console.log(item);

    const navigation = useNavigation();

    const handleUpdateLabels = () => {
        navigation.navigate("EditLabelScreen", {item})
    }

    return (
    <Pressable onPress={handleUpdateLabels}>
        <Box>
            <HStack>
                <VStack>
                    <Text>
                        {item.labelsTitle}
                    </Text>
                </VStack>
            </HStack>
        </Box>
    </Pressable>
    )
}
export default LabelsItem;