
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Box, Button, FlatList, HStack, Link, NativeBaseProvider, Pressable, ScrollView, Spacer, Text, VStack } from "native-base"
import { useEffect } from "react";




export const StrategyItem = ({item}) => {

    console.log(item);

    const navigation = useNavigation();

    const handleDetailStrategy = () => {
        navigation.navigate("EditStrategyScreen", {item});
    }

    return (
        <Pressable
        onPress={handleDetailStrategy}
    >

        <Box
            borderBottomWidth="1"
            _dark={{ borderColor: "muted.50" }}
            borderColor="muted.800"
            pl={["0", "4"]}
            pr={["0", "5"]}
            py="2"
            minHeight={120}
            height={120}
        >

                    <Text
                        _dark={{ color: "warmGray.50" }}
                        color="coolGray.800"
                        bold>
                        {item.strategyName}
                    </Text>

        </Box>
    </Pressable>
    )
}


// const strategyDTO = {
//   strategyId: 1,
//   strategyName: 1,
//   strategyStatus: 1,
// }
