import { StyleSheet, Dimensions } from 'react-native';
import { FontFamily } from '../../constant/Fonts';
const Width = Dimensions.get("window").width;

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
    fontFamily: FontFamily.bold
  },
  container: {
    flex: 1,
    paddingVertical: 6,
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
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    height: 48,
    width: Width * 0.92,
    borderRadius: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 10
  },
  bottomText: {
    color: '#FFF',
    // bottom: 14,
    right: 78,
    fontSize: 12
  },
  bottomAnotherText: {
    color: '#CAC4D0',
    // bottom: 14,
    // right: 55,
    fontSize: 12,
    alignSelf: 'flex-start',
    fontFamily: FontFamily.regular,
    paddingHorizontal: 15,
  },
  headerContainer: {
    marginTop: 15
  },
  keyBoardAvoidCntainer: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1
  },
});
