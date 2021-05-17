import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import BottomTab1 from '../Tabs/BottomTab1';
import BottomTab2 from '../Tabs/BottomTab2';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';
import TopTabs from './TopTabs';

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
              iconName='apps-outline';
            break;
            case 'BottomTab2':
              iconName='pricetags-outline';
            break;
            case 'StackNavigator':
              iconName='copy-outline';
            break;
          }
          return <Icon name={iconName} size={20} color={color} />
        }
      })}
    >
      <TabAndroid.Screen name="BottomTab1" options={{ title: 'Icons' }} component={BottomTab1} />
      <TabAndroid.Screen name="BottomTab2" options={{ title: 'Tabs' }} component={TopTabs} />
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
          shadowColor: 'transparent', //ios
          elevation: 0 //android
        },
        labelStyle: {
          fontSize: 15
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch(route.name) {
            case 'BottomTab1':
              iconName='apps-outline';
            break;
            case 'BottomTab2':
              iconName='pricetags-outline';
            break;
            case 'StackNavigator':
              iconName='copy-outline';
            break;
          }
          return (
            <Text style={{ color }}>
              <Icon name={iconName} size={20} color={colors.white} />
            </Text>
          )
        }
      })}
    >
      <TabIos.Screen name="BottomTab1" options={{ title: 'Tab1' }} component={BottomTab1} />
      <TabIos.Screen name="BottomTab2" options={{ title: 'Tab2'}} component={TopTabs} />
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