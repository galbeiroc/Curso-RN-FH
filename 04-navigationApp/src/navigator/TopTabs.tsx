import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from '../Tabs/TopTab1';
import Contacts from '../Tabs/TopTab2';
import Albums from '../Tabs/TopTab3';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Albums" component={Albums} />
    </Tab.Navigator>
  );
};

export default TopTabs;