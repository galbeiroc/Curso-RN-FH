import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, Styles } from '../theme/appTheme';

function BottomTab1() {
  useEffect(() => {
    console.log('Tab 1')
  },[]);

  return(
    <View style={Styles.globalMargin}>
      <Text style={Styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={50} color={colors.primary} />
        <Icon name="leaf-outline" size={50} color={colors.primary} />
        <Icon name="bookmarks-outline" size={50} color={colors.primary} />
        <Icon name="basketball-outline" size={50} color={colors.primary} />
        <Icon name="cellular-outline" size={50} color={colors.primary} />
        <Icon name="duplicate-outline" size={50} color={colors.primary} />
        <Icon name="film-outline" size={50} color={colors.primary} />
        <Icon name="funnel-outline" size={50} color={colors.primary} />
        <Icon name="layers-outline" size={50} color={colors.primary} />
        <Icon name="print-outline" size={50} color={colors.primary} />
        <Icon name="pricetags-outline" size={50} color={colors.primary} />
        <Icon name="snow-outline" size={50} color={colors.primary} />
        <Icon name="wifi-outline" size={50} color={colors.primary} />
        <Icon name="tv-outline" size={50} color={colors.primary} />
        <Icon name="logo-whatsapp" size={50} color={colors.primary} />
        <Icon name="logo-google-playstore" size={50} color={colors.primary} />
        <Icon name="logo-javascript" size={50} color={colors.primary} />
        <Icon name="logo-react" size={50} color={colors.primary} />
        <Icon name="logo-nodejs" size={50} color={colors.primary} />
        <Icon name="logo-npm" size={50} color={colors.primary} />
        <Icon name="logo-python" size={50} color={colors.primary} />
      </Text>
    </View>
  );
};

export default BottomTab1;
