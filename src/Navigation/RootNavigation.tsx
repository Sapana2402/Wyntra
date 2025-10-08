import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Dashboard from '../Screens/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/Profile';
import Cart from '../Screens/Cart';
import ProductDetails from '../Screens/ProductDetails';
import LoginScreen from '../Screens/Login';
import { useSelector } from 'react-redux';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialDesignIcons';
import { Colors } from '../Assets/Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RootNavigation = () => {
  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();
  const { token } = useSelector(state => state.auth);

  const BottomTabNavigator = () => {
    return (
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: Colors.common.pink,
          tabBarInactiveTintColor: Colors.common.darkGray,
          tabBarIcon: ({ focused, color, size }) => {
            let name = 'dashboard';
            if (route.name == 'Dashboard') {
              name = 'dashboard';
            } else if (route.name == 'Profile') {
              name = 'person';
            } else if (route.name == 'Cart') {
              name = 'shopping-cart';
            }
            return <MaterialIcons name={name} size={size} color={color} />;
          },
        })}
      >
        <BottomTab.Screen component={Dashboard} name="Dashboard" />
        <BottomTab.Screen component={Cart} name="Cart" />
        <BottomTab.Screen component={Profile} name="Profile" />
      </BottomTab.Navigator>
    );
  };

  const AuthStack = () => {
    return (
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen
          component={BottomTabNavigator}
          name="BottomTabNavigator"
        />
        <BottomTab.Screen component={ProductDetails} name="ProductDetails" />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        {token ? (
          <Stack.Screen component={AuthStack} name="AuthStack" />
        ) : (
          <Stack.Screen component={LoginScreen} name="LoginScreen" />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
