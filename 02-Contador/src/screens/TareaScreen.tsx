import React from 'react';
import {StyleSheet, View} from 'react-native';

function TareaScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
}

export default TareaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#28425B',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    top: 50,
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});

/**
*Exercise 1.
  cajaNaranja: {
    flex: 1,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
  }

*Exercise 2.
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#28425B',
  },
  cajaAzul: {
    alignSelf: 'stretch',
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },

*Exercise 3.
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#28425B',
  },
  cajaMorada: {
    alignSelf: 'flex-end',
  }
  cajaAzul: {
    alignSelf: 'center',
  }

*Exercise 4.
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#28425B',
  },
  cajaMorada: {
    alignSelf: 'flex-end',
  },
  cajaNaranja: {
    alignSelf: 'center',
  }
  cajaAzul: {
    alignSelf: 'flex-start',
  }

  *Exercise 5.
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    //alignItems: 'flex-start',
    backgroundColor: '#28425B',
  },
  cajaMorada: {
    flex: 1,
    width: 100,
    //height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    flex: 1,
    width: 100,
    //height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaAzul: {
    flex: 1,
    width: 100,
    //height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },

  *Exercise 6.
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#28425B',
  },
  cajaMorada: {
    flex: 1,
  },
  cajaNaranja: {
    flex: 1,
  }
  cajaAzul: {
    flex: 2,
  }

  *Exercise 7.
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28425B',
  },

  *Exercise 8.
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28425B',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    left: 100,
  },

  *Exercise 9.
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    top: 100 or bottom: -100,
  },

  *Exercise 10.
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#28425B',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    top: 50,
  },
 */
