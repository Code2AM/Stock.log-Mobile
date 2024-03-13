
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Box, Button, FlatList, HStack, Link, NativeBaseProvider, Pressable, ScrollView, Spacer, Text, VStack } from "native-base"
import { useEffect } from "react";
import { StyleSheet } from "react-native";




export const StrategyItem = ({item}) => {

    console.log(item);

    const navigation = useNavigation();

    const handleDetailStrategy = () => {
        navigation.navigate("EditStrategyScreen", {item});
    }

    return (
        <ScrollView>
            <Pressable onPress={handleDetailStrategy} style={styles.container}>
                <Box style={styles.boxStyle}>
                    <HStack>
                        <VStack>
                            <Text style={styles.strategyText}>{item.strategyName}</Text>
                        </VStack>
                    </HStack>
                </Box>
        </Pressable>
      </ScrollView>
    );
}

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
    strategyText: {
        marginTop:10,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#4B5563',
    },
  });


// const strategyDTO = {
//   strategyId: 1,
//   strategyName: 1,
//   strategyStatus: 1,
// }
