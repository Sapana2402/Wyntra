import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Dashboard from "../Screens/Dashboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Screens/Profile";
import Cart from "../Screens/Cart";
import ProductDetails from "../Screens/ProductDetails";

const RootNavigation = () => {
    const Stack = createStackNavigator()
    const BottomTab = createBottomTabNavigator()

    const BottomTabNavigator = () => {
      return(
          <BottomTab.Navigator screenOptions={(route)=>({
                headerShown: false
          })}>
            {/* <BottomTab.Screen component={ProductDetails} name="ProductDetails" /> */}
            <BottomTab.Screen component={Dashboard} name="Dashboard" />
            <BottomTab.Screen component={Cart} name="Cart" />
            <BottomTab.Screen component={Profile} name="Profile" />
        </BottomTab.Navigator>
      )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={({route})=>({
                headerShown: false
            })}>
                <Stack.Screen component={BottomTabNavigator} name="BottomTabNavigator" />
                {/* <Stack.Screen component={Dashboard} name="Dashboard" /> */}
            </Stack.Navigator>
        </NavigationContainer>
      );
}

export default RootNavigation;