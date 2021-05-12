import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

function BoxObjectModelScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  title: {
    paddingHorizontal: 50,
    paddingVertical: 30,
    marginHorizontal: 20,
    fontSize: 20,
    //width: 150,
    borderWidth: 10,
  },
});

export default BoxObjectModelScreen;
