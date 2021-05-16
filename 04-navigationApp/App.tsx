import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import StackNavigator from './src/navigator/StackNavigator';
import DrawerBasic from './src/navigator/DrawerBasic';

function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerBasic />
    </NavigationContainer>
  )
};

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