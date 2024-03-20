import { Fab, Icon } from "native-base";
import { AntDesign } from '@expo/vector-icons';

const AddJournalsButton = ({ navigation}) => {

    const addJournals = () => {
        navigation.navigate("AddJournals");
    }


    return (
        <>
            <Fab
                bg={"#B5D692"}
                onPress={addJournals}
                renderInPortal={false}
                shadow={5}
                size="16"
                icon={<Icon color="white" as={AntDesign} name="plus" size="6"/>}
                bottom={10}
                right={10}
                _pressed={{backgroundColor:"lime.500"}}
            />
        </>
    )
};

export default AddJournalsButton;