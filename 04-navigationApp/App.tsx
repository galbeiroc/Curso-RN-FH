import 'react-native-gesture-handler';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <Text>Hello World</Text>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

 export default App;


 /**
  * React Navigation
  * 1 => Stack Navigation:: 
  * 0.0:. navigation.native: Para extraer lo mediante hooks ó props
  * 1.1:. navigation.pop: Destruye el screen más cerca al usuario
  * 1.2:. popTop: Va al primer screen
  * 1.3:. goBack: Va al screen anterior
  * 2 => Drawer Navigation
  * 3 => BottomTab Navigation
  * 4 => MaterialTop Navigation
  */