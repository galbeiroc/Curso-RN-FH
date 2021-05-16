import React from 'react';
import {
  createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView
} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingScreen from '../screens/SettingScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

function DrawerLateral() {
  const { width } = useWindowDimensions();

  return(
    <Drawer.Navigator
      drawerType={width >= 768 ? "permanent" : "front"}
      drawerContent={(props) => <ContentMenu {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};


function ContentMenu({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) {
  return(
    <DrawerContentScrollView>
      {/* Section Avatar */}
      <View style={Styles.contentAvatar}>
        <Image
          style={Styles.avatar}
          source={{uri: 'https://ra.ac.ae/wp-content/uploads/2017/02/user-icon-placeholder.png'}}
        />
      </View>
      {/* Section menu */}
      <View style={Styles.contentMenu}>
        <TouchableOpacity onPress={() => navigation.navigate('StackNavigator')} style={Styles.buttonMenu}>
          <Text style={Styles.textMenu}>Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')} style={Styles.buttonMenu}>
          <Text style={Styles.textMenu}>Setting</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
};

export default DrawerLateral;

/**
 * * drawerPosition=> "left" | "right"
 * 
 * * drawerType=> Determina como el drawer luce
 * front: Traditional drawer which covers the screen with a overlay behind it.
 * back: The drawer is revealed behind the screen on swipe.
 * slide: Both the screen and the drawer slide on swipe to reveal the drawer.
 * permanent: A permanent drawer is shown as a sidebar.
 * 
 * drawerContent: Personalizar drawer, retorn React element
 */
