import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import BuyScreen from "./BuyScreen";
import SellScreen from "./SellScreen";
import CommentScreen from "./CommentScreen";


const Tab = createMaterialTopTabNavigator();

const BuyAndSellTabNavigator = ({journals}) => {

    const BuyScreenWithProps = () => <BuyScreen journals={journals} />;

    const SellScreenWithProps = () => <SellScreen journals={journals} />;

    const CommentScreenWithProps = () => <CommentScreen journals={journals} />;
    return (
    <>
    <Tab.Navigator
        screenOptions={{
            swipeEnabled:false
        }}>
        <Tab.Screen name="Buy" component={BuyScreenWithProps} />
        <Tab.Screen name="Sell" component={SellScreenWithProps}/>
        <Tab.Screen name="Comment" component={CommentScreenWithProps}/>
    </Tab.Navigator>
    </>
    )
}

export default BuyAndSellTabNavigator;