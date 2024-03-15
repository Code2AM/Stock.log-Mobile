
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Box, Button, FlatList, HStack, Link, NativeBaseProvider, Pressable, ScrollView, Spacer, Text, VStack } from "native-base"
import { useEffect } from "react";
import { StyleSheet } from "react-native";




export const NoteItem = ({item}) => {

    console.log(item);

    const navigation = useNavigation();

    const handleDetailNote = () => {
        navigation.navigate("NoteEditorScreen", {item});
    }

    return (
        <ScrollView>
            <Pressable onPress={handleDetailNote}>
                <Box
                    borderBottomWidth={1}
                    borderColor="gray.300"
                    p={4}
                    mb={4}
                    rounded="md"
                    _hover={{
                        backgroundColor: "gray.100"
                    }}
                >
                    <HStack justifyContent="space-between" alignItems="center">
                        <VStack flex={1} space={2}>
                            <Text color="gray.700" fontSize="lg" fontWeight="bold">{item.noteName}</Text>
                            <Text color="gray.500" fontSize="sm">{item.labelsDTO.labelsTitle}</Text>
                            <Text color="gray.600" fontSize="md">{item.noteContents}</Text>
                        </VStack>
                        <Text color="gray.400" fontSize="xs">{new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(item.noteDate))}</Text>
                    </HStack>
                </Box>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleText:{
        fontSize:"20"
    },
    contentText:{
        fontSize:"15"
    }
})