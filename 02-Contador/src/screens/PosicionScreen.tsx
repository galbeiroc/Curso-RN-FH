import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function PosicionScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cajaGreen} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 350,
    // height: 400,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    // top: 100,
    // left: 100,
    top: 0,
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 5,
    borderColor: 'white',
    //top: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cajaGreen: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 5,
    borderColor: 'white',
    //top: 10,
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject
  },
});
