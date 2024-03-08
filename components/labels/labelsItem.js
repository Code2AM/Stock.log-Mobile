import { Box, HStack, Text, VStack } from "native-base";

const labelsItem = ({item}) => {

    console.log(item);


    return (
        <Box>
            <HStack space={[2, 3]} justifyContent="space-between">

                <VStack>
                    <Text>
                        {item.labelsTitle}
                    </Text>
                </VStack>
            </HStack>
        </Box>
    )
}
export default labelsItem;