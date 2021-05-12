import React from 'react';
import {Dimensions, StyleSheet, Text, useWindowDimensions, View} from 'react-native';

// const {width, height} = Dimensions.get('window');

function DimensionesScreen() {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.cajaMorada, width: width * 2}} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>
        Width: {width.toFixed(2)} - Heigth: {height.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    // width: '50%',
    // height: '50%',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  }
});

export default DimensionesScreen;

// Siemmpre es relativa al padre
// Siempre cajaMorada es relativo al padre container..
