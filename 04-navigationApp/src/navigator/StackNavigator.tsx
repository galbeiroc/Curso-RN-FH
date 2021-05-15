import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PageScreen1 from '../screens/PageScreen1';
import PageScreen2 from '../screens/PageScreen2';
import PageScreen3 from '../screens/PageScreen3';

const Stack = createStackNavigator();


function StackNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="PageScreen1" component={PageScreen1} />
      <Stack.Screen name="PageScreen2" component={PageScreen2} />
      <Stack.Screen name="PageScreen3" component={PageScreen3} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

/**
 * Implement stack screens
 */
