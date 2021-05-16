import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTab1 from '../Tabs/BottomTab1';
import BottomTab2 from '../Tabs/BottomTab2';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return(
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <Tab.Screen name="BottomTab1" options={{ title: 'Tab1'}} component={BottomTab1} />
      <Tab.Screen name="BottomTab2" options={{ title: 'Tab2'}} component={BottomTab2} />
      <Tab.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </Tab.Navigator>
  )
};

export default BottomTabs;


/**
 * tabBarOptions: => Personalizar los tabs
 * sceneContainerStyle:=> Personalizar content tabs
 */