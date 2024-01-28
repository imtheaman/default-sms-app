import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../constant/Fonts';
const Width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingHorizontal: 18,
    // paddingTop: 30,
  },
  keyBoardAvoidCntainer: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1
  },
  inputContainer: {
    flex: 1,
    padding: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 34,
    fontFamily: FontFamily.bold,
  },
  container: {
    flex: 0.94,
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
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  bottomText: {
    color: '#FFF',
    // bottom: 14,
    right: 78,
    fontSize: 12,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
    alignItems: 'center',
  },
  label: {
    position: 'absolute',
    backgroundColor: '#000',
    paddingHorizontal: 5,
    top: -10,
    left: 10,
    fontSize: 12,
    color: '#CAC4D0',
    fontFamily: FontFamily.regular,
  },
  headerContainer: {
    marginTop: 15,
  },
  datePickerOkContainer: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  okText: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 10,
    fontFamily: FontFamily.regular,
  },
  dateContainer: {
    width: Width * 0.9,
    marginVertical: 20,
    // backgroundColor:'red'
  },
  inputContainer: {
    height: 56,
    borderWidth: 1,
    borderColor: '#938F99',
    borderRadius: 5,
    justifyContent:'center'
    // backgroundColor:'green',
    // width:0
  },
  inputStyle: {
    fontSize: 14,
    color: '#E6E0E9',
    width: 140,
    // padding: 14,
    fontFamily: FontFamily.regular,
    // backgroundColor:'red',
    left:10
  },
  DobErrorText: {
    color: '#ff3232',
    fontSize: 12,
    fontFamily: FontFamily.regular,
    paddingHorizontal: 15,
    marginTop: 5
},
});
