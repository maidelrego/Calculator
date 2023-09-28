import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appBackground: {
    flex: 1,
    backgroundColor: 'black',
  },
  calContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 80,
    textAlign: 'right',
    marginBottom: 10,
  },
  lastResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
