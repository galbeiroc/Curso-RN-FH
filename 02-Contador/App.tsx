import React from 'react';
import {SafeAreaView} from 'react-native';
// import FlexScreen from './src/screens/FlexScreen';
import TareaScreen from './src/screens/TareaScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import DimensionesScreen from './src/screens/DimensionesScreen';
// import PosicionScreen from './src/screens/PosicionScreen';
// import HolaMundoScreen from './src/screens/HolaMundoScreen';
// import ContadorScreen from './src/screens/ContadorScreen';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PosicionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
// });

export default App;
