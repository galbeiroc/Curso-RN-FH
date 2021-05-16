import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { Styles } from '../theme/appTheme';

interface Props  extends StackScreenProps<any, any>{};

function PageScreen3({ navigation } :Props) {
  return (
    <View style={Styles.globalMargin}>
      <Text style={Styles.title}>Page Screen 3</Text>
      <Button 
        title="Go Back"
        onPress={() => navigation.pop()}
      />
      <Button
        title="Go Home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

export default PageScreen3;
