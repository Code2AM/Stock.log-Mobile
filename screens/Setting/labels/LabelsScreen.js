import { AddIcon, Button, CheckIcon, Container, HStack, Icon, Input, NativeBaseProvider, Text, VStack, View } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { labelAdd, labelList } from "../../../api/labels/LabelsAPI";

const LabelsScreen = () => {

    const [showInput, setShowInput] = useState(false);
    const [buttonText, setButtonText] = useState('추가');
    const [labelsTitle, setLabelsTitle] = useState('');
  
    const toggleInput = () => {
      setShowInput(!showInput);
      setButtonText(showInput ? '추가' : '취소');
    };
  
    const [labelData, setLabelData] = useState(null);
  
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

    const handleAddLabel = async () => {
        try {
            await labelAdd(labelsTitle);
            setLabelsTitle(''); 
        } catch (error) {
            console.error(error);
        }
    };
  
    return (
      <NativeBaseProvider>
        <Container>
          {/* Input과 CheckIcon */}
          <HStack style={styles.hstack}>
            {showInput && (
              <>
                <Input
                  variant="filled"
                  placeholder="라벨 이름을 입력해주세요"
                  onChangeText={(text) => setLabelsTitle(text)}
                />
                 <CheckIcon
                    style={styles.check}
                    name="check-circle"
                    size="sm"
                    onPress={handleAddLabel} // CheckIcon 클릭 시 라벨 추가 함수 호출
                />
              </>
            )}
          </HStack>
  
          {labelData && (
            <View>
              {labelData.map((label) => (
                <Text key={label.labelsId}>{label.labelsTitle}</Text>
              ))}
            </View>
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
    }
});
