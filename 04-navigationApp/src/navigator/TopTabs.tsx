import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import Chat from '../Tabs/TopTab1';
import Contacts from '../Tabs/TopTab2';
import Albums from '../Tabs/TopTab3';
import { colors } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  const { top: paddingTop } = useSafeAreaInsets();
  return(
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colors.primary,
        },
        style: {
          shadowColor: 'transparent', //ios
          elevation: 0
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch(route.name) {
            case 'Chat':
              iconName='chatbox-ellipses-outline';
            break;
            case 'Contacts':
              iconName='people-outline';
            break;
            case 'Albums':
              iconName='albums-outline';
            break;
          }
          return <Icon name={iconName} size={20} color={color} />
        }
      })}
    >
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Albums" component={Albums} />
    </Tab.Navigator>
  );
};

export default TopTabs;