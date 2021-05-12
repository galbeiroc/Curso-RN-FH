import React from 'react';
import { View, Text } from 'react-native';

import { useCalculator } from '../hook/useCalculator';
import { styles } from '../theme/appTheme';
import ButtonCal from '../components/ButtonCal';

function CalculatorScreen() {
  const {
    number, numberBefore, reset, getNumber, setSignNumber,
    calculate, btnSum, btnSubstract, btnMultiplication, btnDivision, btnDelete,
  } = useCalculator();

  return (
    <View style={styles.calContainer}>
      {
        (numberBefore !== '0') && (<Text style={styles.smallResult}>{numberBefore}</Text>)
      }
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number}
      </Text>

      <View style={styles.contentNum}>
        <ButtonCal text={'C'} color="#9B9B9B" actionBtn={reset} />
        <ButtonCal text={'+/-'} color="#9B9B9B" actionBtn={setSignNumber} />
        <ButtonCal text={'del'} color="#9B9B9B" actionBtn={btnDelete} />
        <ButtonCal text={'/'} color="#FF9427" actionBtn={btnDivision} />
      </View>
      <View style={styles.contentNum}>
        <ButtonCal text={'7'} actionBtn={getNumber} />
        <ButtonCal text={'8'} actionBtn={getNumber} />
        <ButtonCal text={'9'} actionBtn={getNumber} />
        <ButtonCal text={'*'} color="#FF9427" actionBtn={btnMultiplication} />
      </View>
      <View style={styles.contentNum}>
        <ButtonCal text={'4'} actionBtn={getNumber} />
        <ButtonCal text={'5'} actionBtn={getNumber} />
        <ButtonCal text={'6'} actionBtn={getNumber} />
        <ButtonCal text={'-'} color="#FF9427" actionBtn={btnSubstract} />
      </View>
      <View style={styles.contentNum}>
        <ButtonCal text={'1'} actionBtn={getNumber} />
        <ButtonCal text={'2'} actionBtn={getNumber} />
        <ButtonCal text={'3'} actionBtn={getNumber} />
        <ButtonCal text={'+'} color="#FF9427" actionBtn={btnSum} />
      </View>
      <View style={styles.contentNum}>
        <ButtonCal text={'0'} wide actionBtn={getNumber} />
        <ButtonCal text={'.'} actionBtn={getNumber} />
        <ButtonCal text={'='} color="#FF9427" actionBtn={calculate} />
      </View>
    </View>
  )
}

export default CalculatorScreen;
