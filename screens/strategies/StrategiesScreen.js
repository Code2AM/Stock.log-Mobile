import { useNavigation } from "@react-navigation/core";
import { Box, Button, Fab, FlatList, Icon, Link, NativeBaseProvider, ScrollView } from "native-base"
import { useStore } from "zustand"
import { useStrategies } from "../../zustand/strategies/useStrategies";
import { StrategyItem } from "../../components/items/StrategyItem";
import { AntDesign } from '@expo/vector-icons';


export const StrategiesScreen = () => {

  const { strategies } = useStore(useStrategies);

  const navigation = useNavigation();

  const handleNewStrategy = () => {
    navigation.navigate("NewStrategyScreen");
  }
  

  return (
    <NativeBaseProvider>

      <Box>
          <FlatList
            data={strategies}
            renderItem={({ item }) => <StrategyItem item={item} />}
            keyExtractor={item => item.strategyId} />
        </Box>
          <Fab
                bg={"#B5D692"}
                onPress={handleNewStrategy}
                renderInPortal={false}
                shadow={5}
                size="16"
                icon={<Icon color="white" as={AntDesign} name="plus" size="6"/>}
                bottom={10}
                right={10}
                _pressed={{backgroundColor:"lime.500"}}
            />
      


    </NativeBaseProvider>
  )
}

// item -> StrategyItem
// 

// 도착하는 strategyDTO
// const strategyDTO = {
//   strategyId: 1,
//   strategyName: 1,
//   strategyStatus: 1,
// }

