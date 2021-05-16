import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { Styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

function PersonScreen({ route, navigation }: Props) {
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params?.name
    });
  },[])
  return (
    <View style={Styles.globalMargin}>
      <Text style={Styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  )
}

export default PersonScreen
