import {StyleSheet, Dimensions} from 'react-native';
import { FontFamily } from '../../constant/Fonts';
const Width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingHorizontal: 18,
    // paddingTop: 30,
  },
  inputContainer: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 34,
    fontFamily:FontFamily.bold
  },
  container: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 56,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: 'gray',
    marginBottom: 20,
    paddingLeft: 10,
    color: '#fff',
    fontSize: 16,
    letterSpacing: 2,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    height: 48,
    width: Width * 0.9,
    borderRadius: 30,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // buttonText: {
  //   color: '#fff',
  //   fontSize: 18,
  //   fontWeight: '600',
  //   textAlign: 'center',
  //   paddingHorizontal: 10,
  // },
  anotherLoginContainer: {
    width: 'auto',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  anotherLogin: {
    color: '#fff',
    fontSize: 16,
    fontFamily:FontFamily.light
  },
  backIconContainer: {
    // paddingVertical: 15
  },
  backIcon: {
    // transform: [{ rotate: '180deg' }],
    tintColor: 'white',
    width: 12,
    height: 20
  },
  keyBoardAvoidCntainer: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1
  },
  errorText: {
    color: '#ff3232',
    fontSize: 12,
    fontFamily: FontFamily.regular,
    paddingHorizontal: 15,
  },
});
