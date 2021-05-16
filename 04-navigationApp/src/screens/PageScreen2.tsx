import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button, Text, View } from 'react-native';
import { Styles } from '../theme/appTheme';

function PageScreen2() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Page custom',
      headerBackTitle: 'Back'
    })
  }, []);

  return (
    <View style={Styles.globalMargin}>
      <Text style={Styles.title}>Page Screen 2</Text>
      <Button 
        title="Go to Page 3"
        onPress={() => navigation.navigate('PageScreen3')}
      />
    </View>
  )
}

export default PageScreen2;
