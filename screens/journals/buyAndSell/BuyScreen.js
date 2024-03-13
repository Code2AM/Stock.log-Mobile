import { NativeBaseProvider, VStack } from "native-base"
import { BuyDetailList } from "../../../components/journals/JournalsDetailList";


const BuyScreen = ({journals}) => {

    return (
        <>
            <NativeBaseProvider>
                    <VStack>
                        <BuyDetailList journals = {journals}/>
                    </VStack>
            </NativeBaseProvider>
        </>
    )
}

export default BuyScreen;