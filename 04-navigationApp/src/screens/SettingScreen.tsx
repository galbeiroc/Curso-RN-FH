import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Styles } from '../theme/appTheme';

function SettingScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{...Styles.globalMargin, marginTop: insets.top + 20}}>
      <Text>Setting Screen</Text>
    </View>
  )
}

export default SettingScreen;