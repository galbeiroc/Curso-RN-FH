import { useState, useRef } from 'react'

enum Operatores {
  sum, substract, multiplication, division
};

export function useCalculator() {
  const [number, setNumber] = useState('0');
  const [numberBefore, setNumBefore] = useState('0');

  const lastOperation = useRef<Operatores>()

  function reset() {
    setNumber('0');
    setNumBefore('0');
  };

  function getNumber(numText: string) {
    //Not accept doble point
    if (number.includes('.') && numText === '.') return;
    if ( number.startsWith('0') || number.startsWith('-0')) {
      //Decimal point
      if (numText === '.') {
        setNumber(number + numText);

        //Evaluate if it's another zero, there is a point
      } else if (numText === '0' && number.includes('.')) {
        setNumber(number + numText);

        //Evaluate if it's different zero and have a point
      } else if (numText !== '0' && !number.includes('.')) {
        setNumber(numText);

        //Avoid 000.0
      } else if (numText=== '0' && !numText.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numText)
      }
    } else {
      setNumber(number + numText);
    }
  }

  function setSignNumber() {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''))
    } else {
      setNumber('-' + number)
    }
  }

  function btnDelete() {
    let negative = '';
    let numberTemp = number;
    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substr(1);
    }

    if (numberTemp.length > 1) setNumber(negative + numberTemp.slice(0, -1));
    if (numberTemp.length === 1) setNumber('0');
  }
  function changeNumberXNumBefore() {
    if (number.endsWith('.')) { 
      setNumBefore(number.slice(0, -1));
    } else {
      setNumBefore(number);
    }
    setNumber('0');
  }

  function btnSum() {
    changeNumberXNumBefore();
    lastOperation.current = Operatores.sum
  }

  function btnSubstract() {
    changeNumberXNumBefore();
    lastOperation.current = Operatores.substract;
  }

  function btnMultiplication() {
    changeNumberXNumBefore();
    lastOperation.current = Operatores.multiplication;
  }

  function btnDivision() {
    changeNumberXNumBefore();
    lastOperation.current = Operatores.division;
  }

  function calculate() {
    const number1 = Number(number);
    const number2 = Number(numberBefore);

    switch(lastOperation.current) {
      case Operatores.sum:
        setNumber(`${number1 + number2}`);
        break;
      case Operatores.substract:
        setNumber(`${number2 - number1}`);
        break;
      case Operatores.multiplication:
        setNumber(`${number1 * number2}`);
        break;
      case Operatores.division:
        if (number1) {
          setNumber(`${number2 / number1}`);
          break;
        }
        break;
      default:
        break;
    }
    setNumBefore('0');
  }

  return {
    number, numberBefore, reset, getNumber, setSignNumber,
    calculate, btnSum, btnSubstract, btnMultiplication, btnDivision, btnDelete,
  }
}