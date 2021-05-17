import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5856D6',
  white: '#fff',
  black: '#ccc'
}

export const Styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 5
  },
  bigButton: {
    width: 120,
    height: 80,
    borderRadius: 15,
    backgroundColor: '#FF9427',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10
  },
  bigButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  contentAvatar: {
    alignItems: 'center',
    marginTop: 20
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  }, 
  contentMenu: {
    marginVertical: 25,
    marginHorizontal: 20,
    alignContent: 'center',
    alignItems: 'flex-start'
  },
  buttonMenu: {
    marginVertical: 10
  },
  textMenu: {
    fontSize: 20,
  }
})