import { Button, Container, Input, NativeBaseProvider, Text } from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";
import LabelSheetBtn from "../../../components/settings/labels/LabelSheetBtn";

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
                   <Input style={styles.Input} variant="rounded" placeholder="라벨 입력" /> <Button style={styles.LabelAddButton}>추가</Button>
                    {/* <LabelSheetBtn onPress={handleCancelButtonClick} value={"수정"} /> */}
                </Container>
                </>
            )}
        </NativeBaseProvider>
    );
};

export default LabelsScreen;

const styles = StyleSheet.create({

    Container:{
        flex:1,
        flexDirection:"row"
    },

    Input: {
        width:"20%",
        borderColor:"#B5D692"
    },

    LabelAddButton:{
        backgroundColor:"#B5D692"
    },

    LabelButton: {
        width:"30%",
        backgroundColor: "#B5D692",
        marginLeft:"70%",
    }

})

