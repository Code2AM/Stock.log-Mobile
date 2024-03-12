import { NativeBaseProvider, VStack } from "native-base"
import { SellDetailList } from "../../../components/journals/JournalsDetailList";


const SellScreen = ({journals}) => {

    return (
        <>
            <NativeBaseProvider>
                    <VStack>
                        <SellDetailList journals = {journals}/>
                    </VStack>
            </NativeBaseProvider>
        </>
    )
}

export default SellScreen;