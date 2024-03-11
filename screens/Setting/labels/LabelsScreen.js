import { AddIcon, Box, Button, CheckIcon, Container, FlatList, HStack, Icon, Input, NativeBaseProvider, Text, VStack, View, useToast } from "native-base";
import { useEffect, useState } from "react";
import { labelAdd, labelDelete, labelList, labelUpdate } from "../../../api/labels/LabelsAPI";
import { useStore } from "zustand";
import useLabels from "../../../zustand/labels/useLabels";
import LabelsItem from "../../../components/labels/labelsItem";
import { TextInput } from "react-native";


const LabelsScreen = () => {

    const [showInput, setShowInput] = useState(false);
    const [buttonText, setButtonText] = useState('추가');
    const [labelsTitle, setLabelsTitle] = useState('');
    const toast = useToast();
  
    const { labels } = useStore(useLabels);

    const handleToggleInput = () => {
      setShowInput(!showInput);
      setButtonText(showInput ? '추가' : '취소');
  };

    // 라벨 추가
    const handleAddLabel = async () => {

      const data = {
        labelsTitle: labelsTitle
      }
      
      const result = await labelAdd(data);
      toast.show({
        title: result,
        duration: 1500,
        placement: "top",
        avoidKeyboard: true
      })
    };

    // 라벨 삭제
    const handleDeleteLabel = async(labelsId) => {
      console.log(labelsId);
      console.log(typeof labelsId);
      const result = await labelDelete(labelsId);

        toast.show({
          title: result,
          duration: 1500,
          placement: "top",
          avoidKeyboard: true
        })
    }

    return (
        <NativeBaseProvider>
            <View>
            {showInput && (
                <TextInput
                    value={labelsTitle}
                    onChangeText={setLabelsTitle}
                    placeholder="라벨 이름 입력"
                />
            )}
            <Button title={buttonText} onPress={handleToggleInput} />
            {showInput && (
                <Button title="저장" onPress={handleAddLabel}>저장</Button>
            )}
            </View>
            <Box>
                <FlatList
                    data={labels}
                    renderItem={ ({ item }) => <LabelsItem item ={item}/>}
                    keyExtractor={item => item.labelsId} />
            </Box>
        </NativeBaseProvider>
    );
  }

export default LabelsScreen;
