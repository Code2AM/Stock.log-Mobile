import { Button, Container, Input, NativeBaseProvider, Text } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";

const LabelsScreen = () => {
    const [isInputVisible, setIsInputVisible] = useState(false);

    const handleAddLabelClick = () => {
        setIsInputVisible(true);
    };

    const handleCancelButtonClick = () => {
        setIsInputVisible(false);
    };

    return (
        <NativeBaseProvider>
            {!isInputVisible ? (
                <Button onPress={handleAddLabelClick} style={styles.LabelButton}>라벨 추가 버튼</Button>
            ) : (
                <>
                <Container style={styles.Container}>
                   <Input variant="rounded" placeholder="라벨 입력" style={styles.Input}/> <Button style={styles.LabelAddButton}>추가</Button>
                </Container>
                    <Button onPress={handleCancelButtonClick} style={styles.LabelButton}>취소</Button>
                </>
            )}
        </NativeBaseProvider>
    );
};

export default LabelsScreen;

const styles = StyleSheet.create({

    Container:{
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },

    Input: {
       borderColor:"#B5D692"
    },

    LabelAddButton:{
        backgroundColor:"#B5D692"
    },

    LabelButton: {
        width:"30%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B5D692",
        marginLeft:"70%",
        marginTop:"100%"
    }

})

