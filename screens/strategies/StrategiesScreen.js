import { useNavigation } from "@react-navigation/core";
import { Box, Button, FlatList, Link, NativeBaseProvider } from "native-base"
import { useStore } from "zustand"
import { useStrategies } from "../../zustand/strategies/useStrategies";
import { StrategyItem } from "../../components/items/StrategyItem";


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
        <Button onPress={handleNewStrategy} variant={Link}>매매전략 추가</Button>
      </Box>


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

