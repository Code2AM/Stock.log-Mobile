
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Box, Button, FlatList, HStack, Link, NativeBaseProvider, Pressable, ScrollView, Spacer, Text, VStack } from "native-base"
import { useEffect } from "react";




export const NoteItem = ({item}) => {

    console.log(item);

    const navigation = useNavigation();

    const handleDetailNote = () => {
        navigation.navigate("NoteEditorScreen", {item});
    }

    return (
        <Pressable
        onPress={handleDetailNote}
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

            <HStack space={[2, 3]} justifyContent="space-between">

                <VStack>
                    <Text
                        _dark={{ color: "warmGray.50" }}
                        color="coolGray.800"
                        bold>
                        {item.noteName}
                    </Text>
                    <Text
                        color="coolGray.600"
                        _dark={{ color: "warmGray.200" }}>
                        {item.noteContents}
                    </Text>
                </VStack>

                <Spacer />

                <Text
                    fontSize="xs"
                    _dark={{ color: "warmGray.50" }}
                    color="coolGray.800"
                    alignSelf="flex-start">
                    {/* {item.noteDate} 를 시간대 형식으로 변환 */}
                    {
                        new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date(item.noteDate))
                    }
                </Text>
            </HStack>
        </Box>
    </Pressable>
    )
}