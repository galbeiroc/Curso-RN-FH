import React, { useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { Styles } from '../theme/appTheme';

//interface Props extends StackScreenProps<any, any> {};
interface Props extends DrawerScreenProps<any, any> {};

function PageScreen1({ navigation }: Props) {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Button title="Menu" onPress={() => navigation.toggleDrawer()}/>
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
        <Text style={Styles.bigButtonText}>
          Go to Karen
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PageScreen1;
