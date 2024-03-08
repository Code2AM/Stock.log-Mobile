import { AddIcon, Button, CheckIcon, Container, FlatList, HStack, Icon, Input, NativeBaseProvider, Text, VStack, View, useToast } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { labelAdd, labelDelete, labelList, labelUpdate } from "../../../api/labels/LabelsAPI";

const LabelsScreen = () => {

    const [showInput, setShowInput] = useState(false);
    const [buttonText, setButtonText] = useState('추가');
    const [labelsTitle, setLabelsTitle] = useState('');
    const toast = useToast();
  
    const toggleInput = () => {
      setShowInput(!showInput);
      setButtonText(showInput ? '추가' : '취소');
    };
  
    const [labelData, setLabelData] = useState(null);
    
    // 라벨 리스트 뿌려줌
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await labelList();
          setLabelData(response);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

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

    // // 라벨 수정
    // const handleUpdateLabel = async() => {
    //   const data = {
    //     labelsTitle: labelsTitle
    //   }

    //   const result = await labelUpdate(data);
    //   toast.show({
    //     title: result,
    //     duration: 1500,
    //     placement: "top",
    //     avoidKeyboard: true
    //   })

    // } 
  
    return (
      <NativeBaseProvider>
        <Container>
          <HStack style={styles.hstack}>
            {showInput && (
              <>
                <Input
                  variant="filled"
                  placeholder="라벨 이름을 입력해주세요"
                  onChangeText={setLabelsTitle}
                  value={labelsTitle}
                />
                 <Button onPress={handleAddLabel}>추가</Button>
              </>
            )}
          </HStack>
  
    {labelData && (
      <Container style={styles.labelTitle}>
        {labelData.map((label) => (
          <View key={label.labelsId}>
            <Text>{label.labelsTitle}</Text>
            <Button onPress={() => handleDeleteLabel(label.labelsId)}>삭제</Button>
          </View>
        ))}
      </Container>
)}
  
          {/* 추가 버튼 */}
          <Button
            style={styles.addBtn}
            onPress={toggleInput}
            leftIcon={<AddIcon name="cloud-upload-outline" size="sm" />}>
            {buttonText}
          </Button>
        </Container>
      </NativeBaseProvider>
    );
  };
  
  export default LabelsScreen;

const styles = StyleSheet.create({
    addBtn: {
        position: 'absolute', // 절대 위치 지정
        marginTop: "50%",
        marginLeft: "50%",
        backgroundColor: "#B5D692",
    },
    
    hstack:{
      marginLeft:"20%",
      marginTop:"5%",
      space:"2",
      alignItems:"center"
    },
    check:{
        marginLeft:"5%"
    },
});
