import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import BottomTab1 from '../Tabs/BottomTab1';
import BottomTab2 from '../Tabs/BottomTab2';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';

const TabIos = createBottomTabNavigator();
const TabAndroid = createMaterialBottomTabNavigator();

function BottomTabs() {
  return Platform.OS === 'ios' ? <BottomTabsIos /> : <BottomTabsAndroid />;
}

function BottomTabsAndroid() {
  return(
    <TabAndroid.Navigator
      sceneAnimationEnabled
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
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
      <TabAndroid.Screen name="BottomTab1" options={{ title: 'Tab1' }} component={BottomTab1} />
      <TabAndroid.Screen name="BottomTab2" options={{ title: 'Tab2' }} component={BottomTab2} />
      <TabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </TabAndroid.Navigator>
  )
}

function BottomTabsIos() {
  return(
    <TabIos.Navigator
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
      <TabIos.Screen name="BottomTab1" options={{ title: 'Tab1' }} component={BottomTab1} />
      <TabIos.Screen name="BottomTab2" options={{ title: 'Tab2'}} component={BottomTab2} />
      <TabIos.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </TabIos.Navigator>
  )
};

export default BottomTabs;


/**
 * tabBarOptions: => Personalizar los tabs
 * sceneContainerStyle:=> Personalizar content tabs
 * screenOptions:=> Default options para todos screen return react element
 * sceneAnimationEnabled:=> Animations en el tab
 * barStyle:=> Dar estilos al content tab
 * 
 * <Tab.Screen
 *  name="BottomTab1"
 *  options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>}}
 *  component={BottomTab1}
 * />
 */