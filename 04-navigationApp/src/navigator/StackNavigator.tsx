import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PageScreen1 from '../screens/PageScreen1';
import PageScreen2 from '../screens/PageScreen2';
import PageScreen3 from '../screens/PageScreen3';
import PersonScreen from '../screens/PersonScreen';

const Stack = createStackNavigator();


function StackNavigator() {
  return(
    <Stack.Navigator
      //initialRouteName="PageScreen2"
      screenOptions= {{
        headerStyle: {
          elevation: 0,  //android
          shadowColor: 'transparent' //ios
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="PageScreen1" options={{ title: 'Page 1'}} component={PageScreen1} />
      <Stack.Screen name="PageScreen2" options={{ title: 'Page 2'}} component={PageScreen2} />
      <Stack.Screen name="PageScreen3" options={{ title: 'Page 3'}} component={PageScreen3} />
      <Stack.Screen name="PersonScreen" options={{ title: 'Person'}} component={PersonScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

/**
 * Implement stack screens
 * initialRouteName: Permite establecer el primer screen => initialRouteName="PageScreen2"
 */
