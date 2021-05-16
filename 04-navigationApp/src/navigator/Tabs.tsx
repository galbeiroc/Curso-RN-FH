import React from 'react';
import { Text } from 'react-native';
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
        },
        labelStyle: {
          fontSize: 15
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = '';
          switch(route.name) {
            case 'BottomTab1':
              iconName='tb1';
            break;
            case 'BottomTab2':
              iconName='tb2';
            break;
            case 'StackNavigator':
              iconName='stk';
            break;
          }
          return <Text style={{ color }}>{iconName}</Text>
        }
      })}
    >
      <Tab.Screen name="BottomTab1" options={{ title: 'Tab1' }} component={BottomTab1} />
      <Tab.Screen name="BottomTab2" options={{ title: 'Tab2'}} component={BottomTab2} />
      <Tab.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </Tab.Navigator>
  )
};

export default BottomTabs;


/**
 * tabBarOptions: => Personalizar los tabs
 * sceneContainerStyle:=> Personalizar content tabs
 * screenOptions:=> Default options para todos screen return react element
 * 
 * <Tab.Screen
 *  name="BottomTab1"
 *  options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>}}
 *  component={BottomTab1}
 * />
 */