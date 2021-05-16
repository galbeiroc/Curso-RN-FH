import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { Styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';

type RouteParams = {
  id: number,
  name: string,
}

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{}; //get types global stack

function PersonScreen({ route, navigation }: Props) {
  // const params = route.params as RouteParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    });
  },[])

  return (
    <View style={Styles.globalMargin}>
      <Text style={Styles.title}>{JSON.stringify(params, null, 2)}</Text>
    </View>
  )
}

export default PersonScreen;

/**
 * import { RootStackParams } from '../navigator/StackNavigator';
 *
 * ParamList:=> RootStackParams
 * RootName :=> 'PersonScreen'
 * 
 * Pendiente Stack protegido
 */
