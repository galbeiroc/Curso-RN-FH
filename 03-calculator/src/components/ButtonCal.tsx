import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  text: string | number;
  color?: string;
  wide?: boolean;
  actionBtn: (numText: string) => void;
}

function ButtonCal({ text, color = "#2D2D2D", wide = false, actionBtn}: Props) {
  return (
    <TouchableOpacity onPress={()  => actionBtn(text)}>
      <View style={[{
        ...styles.btn,
        backgroundColor: color,
        width: (wide) ? 180 : 80
      }]}>
        <Text style={{
          ...styles.btnText,
          color: (color === "#9B9B9B") ? 'black' : 'white'
        }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
    color: 'white'
  },
});

export default ButtonCal
