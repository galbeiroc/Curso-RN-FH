import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  calContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10
  },
  smallResult: {
    color: 'rgba(255, 255, 255, .5)',
    fontSize: 30,
    textAlign: 'right',
  },
  contentNum: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  },
})