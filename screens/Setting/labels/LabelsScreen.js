import { AddIcon, Box, Button, CheckIcon, Container, FlatList, HStack, Icon, Input, NativeBaseProvider, Text, VStack, View, useToast } from "native-base";
import { useEffect, useState } from "react";
import { labelAdd, labelDelete, labelList, labelUpdate } from "../../../api/labels/LabelsAPI";
import { useStore } from "zustand";
import useLabels from "../../../zustand/labels/useLabels";
import LabelsItem from "../../../components/labels/labelsItem";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";


const LabelsScreen = () => {

    const navigation = useNavigation();
  
    const { labels, fetchAllLabels } = useStore(useLabels);

    useEffect(() =>{
      fetchAllLabels();
    },[])

    console.log(labels);

    const handleNewLabelScreen = () => {
      navigation.navigate("NewLabelScreen");
    }

    return (
        <NativeBaseProvider>
            <Box>
                <FlatList
                    data={labels}
                    renderItem={ ({ item }) => <LabelsItem item = {item}/>}
                    keyExtractor={item => item.labelsId} />
            </Box>
            <Button onPress={handleNewLabelScreen}>라벨 추가</Button>
        </NativeBaseProvider>
    );
  }

export default LabelsScreen;
