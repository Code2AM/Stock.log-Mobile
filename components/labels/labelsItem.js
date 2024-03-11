import { Box, HStack, Text, VStack } from "native-base";

const LabelsItem = ({item}) => {

    console.log(item);

    return (
        <Box>
            <HStack>
                <VStack>
                    <Text>
                        {item.labelsTitle}
                    </Text>
                </VStack>
            </HStack>
        </Box>
    )
}
export default LabelsItem;