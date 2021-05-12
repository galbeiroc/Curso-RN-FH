import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function FlexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda la pantalla
    //height: 300,
    backgroundColor: '#28C4D9',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    flexWrap: 'wrap',
  },
  caja1: {
    // flex: 4, //40%
    // flex: 1,
    borderWidth: 4,
    borderColor: 'white',
    fontSize: 30,
    // alignSelf: 'flex-start', //Asigna el contenido necesario
  },
  caja2: {
    // flex: 4, //40%
    borderWidth: 4,
    borderColor: 'red',
    fontSize: 30,
    //alignSelf: 'flex-start',
  },
  caja3: {
    // flex: 2, //20%
    borderWidth: 4,
    borderColor: 'green',
    fontSize: 30,
    //alignSelf: 'flex-end',
  },
});

export default FlexScreen;
