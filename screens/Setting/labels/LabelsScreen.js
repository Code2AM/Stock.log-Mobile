import { AddIcon, Box, Button, CheckIcon, Container, Fab, FlatList, HStack, Icon, Input, NativeBaseProvider, ScrollView, Tag, Text, VStack, View, useToast } from "native-base";
import { useEffect, useState } from "react";
import { useStore } from "zustand";
import useLabels from "../../../zustand/labels/useLabels";
import LabelsItem from "../../../components/labels/labelsItem";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';


const LabelsScreen = () => {


    const navigation = useNavigation();
  
    const { labels, fetchAllLabels } = useStore(useLabels);

    useEffect(() =>{
      fetchAllLabels();
    },[])

  //   useEffect(() => {
  //     console.log("useEffect working");
  //     console.log(labels);
  //     if (labels.length === 0) {
  //         navigation.navigate('NewLabelScreen');
  //     }
  // }, [labels]);

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
            <Fab
                bg={"#B5D692"}
                onPress={handleNewLabelScreen}
                renderInPortal={false}
                shadow={5}
                size="16"
                icon={<Icon color="white" as={AntDesign} name="plus" size="6"/>}
                bottom={10}
                right={10}
                _pressed={{backgroundColor:"lime.500"}}
            />
          
        </NativeBaseProvider>
    );
  }

export default LabelsScreen;

