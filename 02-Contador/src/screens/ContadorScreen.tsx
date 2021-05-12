import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fab from '../components/Fab';

export default function ContadorScreen() {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.content}>
      <Text style={styles.textContador}>Contador: {counter}</Text>
      <Fab title="-1" onPress={() => setCounter(counter - 1)} position="bl" />
      <Fab title="+1" onPress={() => setCounter(counter + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textContador: {
    textAlign: 'center',
    fontSize: 40,
    color: '#fc4352',
  },
});
