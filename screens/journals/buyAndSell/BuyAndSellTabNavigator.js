import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import BuyScreen from "./BuyScreen";
import SellScreen from "./SellScreen";


const Tab = createMaterialTopTabNavigator();

const BuyAndSellTabNavigator = ({journals}) => {

    const BuyScreenWithProps = () => <BuyScreen journals={journals} />;

    const SellScreenWithProps = () => <SellScreen journals={journals} />;

    return (
    <>
    <Tab.Navigator>
        <Tab.Screen name="Buy" component={BuyScreenWithProps} />
        <Tab.Screen name="Sell" component={SellScreenWithProps}/>
    </Tab.Navigator>
    </>
    )
}

export default BuyAndSellTabNavigator;