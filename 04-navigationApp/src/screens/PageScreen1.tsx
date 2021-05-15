import React from 'react'
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {};

function PageScreen1({ navigation }: Props) {
  console.log(navigation);
  
  return (
    <View>
      <Text>Page Screen 1</Text>
      <Button
        title='Go to Page 2'
        onPress={() => navigation.navigate('PageScreen2')}
      />
    </View>
  )
}

export default PageScreen1;
