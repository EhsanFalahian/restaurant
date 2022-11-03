import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import home from '@Home/screens/Home';
import RestaurantDetails from '../../features/RestaurantDetails/screens/RestaurantDetails';
import {screenOption} from '../../core/config/navigation';
import OrderCompleted from '../../features/OrderCompoleted/screens/OrderCompleted';

const AppNavigator = (): JSX.Element => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={'home'} screenOptions={screenOption}>
      <Stack.Screen name={'home'} component={home} />
      <Stack.Screen name={'restaurantDetails'} component={RestaurantDetails} />
      <Stack.Screen name={'orderCompleted'} component={OrderCompleted} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
