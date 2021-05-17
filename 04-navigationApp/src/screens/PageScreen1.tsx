import React, { useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, Styles } from '../theme/appTheme';

//interface Props extends StackScreenProps<any, any> {};
interface Props extends DrawerScreenProps<any, any> {};

function PageScreen1({ navigation }: Props) {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 15}}>
          <Icon name="menu-outline" size={35} color={colors.primary} />
        </TouchableOpacity>
      )
    })
  },[])
  return (
    <View style={Styles.globalMargin}>
      <Text style={Styles.title}>Page Screen 1</Text>
      <Button
        title='Go to Page 2'
        onPress={() => navigation.navigate('PageScreen2')}
      />

      <Text style={{ marginVertical: 20, fontSize: 18 }}>Navigate with Arguments</Text>
      <View style={{ flexDirection: 'row'}}>
      <TouchableOpacity
        style={Styles.bigButton}
        onPress={() => navigation.navigate('PersonScreen', {
          id: 1,
          name: 'Albeiro',
        })}
      >
        <Icon name="man-outline" size={30} color={colors.white} />
        <Text style={Styles.bigButtonText}>
          Go to Albeiro
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...Styles.bigButton, backgroundColor: '#5856D6'}}
        onPress={() => navigation.navigate('PersonScreen', {
          id: 2,
          name: 'Karen',
        })}
      >
        <Icon name="woman-outline" size={30} color={colors.white} />
        <Text style={Styles.bigButtonText}>
          Go to Karen
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PageScreen1;
