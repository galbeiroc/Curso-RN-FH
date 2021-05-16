import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {};

function PageScreen1({ navigation }: Props) {
  return (
    <View style={Styles.globalMargin}>
      <Text style={Styles.title}>Page Screen 1</Text>
      <Button
        title='Go to Page 2'
        onPress={() => navigation.navigate('PageScreen2')}
      />

      <Text>Navigate with Arguments</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('PersonScreen', {
          id: 1,
          name: 'Albeiro',
        })}
      >
        <Text>Go to Person</Text>
        </TouchableOpacity>
    </View>
  )
}

export default PageScreen1;
