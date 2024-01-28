import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    margin: 6,
    borderRadius: 30,
    padding: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    borderColor: '#fff',
    borderWidth: 0.5,
    margin: 6,
    borderRadius: 30,
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  loginContainer: {
    marginVertical: 10
  },
  imgContainer: {
    left: 10,
    position: 'absolute'
  },
  imgStyle: {
    width: 25,
    height: 25,
  },
});
