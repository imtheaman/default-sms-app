import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../constant/Fonts';
const Width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  keyBoardAvoidCntainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 34,
    fontFamily: FontFamily.bold,
  },
  container: {
    // flex: 0.94,
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
  },
  inputContainer: {
    height: 56,
    borderWidth: 1,
    borderColor: '#938F99',
    borderRadius: 5,
    justifyContent: 'center',
  },
  inputStyle: {
    fontSize: 14,
    color: '#E6E0E9',
    fontFamily: FontFamily.regular,
    paddingHorizontal: 10,
    // backgroundColor:'red'
  },
  listTalentContainer: {
    flex: 1,
    width: Width * 0.9,
    height: 'auto',
    borderColor: '#545458A6',
    borderBottomWidth: 0.5,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  listTalentText: {
    color: '#000000',
    fontSize: 17,
    fontFamily: FontFamily.regular,
    lineHeight: 28,
    paddingLeft: 8,
  },
  DobErrorText: {
    color: '#ff3232',
    fontSize: 12,
    fontFamily: FontFamily.regular,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  locationModalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalListContainer: {
    width: '90%',
    height: '60%',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
  },
  closeImageContainer: {
    width: 30,
    height: 30,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 15,
    right: 10,
    top: 6,
  },
  closeImgStyle: {
    tintColor: '#ffffff',
  },
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 40,
    borderColor: 'white',
    backgroundColor: '#76768026',
    alignItems: 'center',
    height: 44,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  searchBarImgStyle: {
    width: 18,
    height: 18,
    alignSelf: 'center',
    tintColor: 'grey',
    marginLeft: 15,
  },
  searchInputStyle: {
    color: '#000000',
    fontSize: 16,
    width: '90%',
    justifyContent: 'center',
    fontFamily: FontFamily.regular,
    paddingHorizontal: 10,
  },
  renderContainer: {
    flex: 1,
    height: 'auto',
    borderColor: '#545458A6',
    borderBottomWidth: 0.5,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  renderText: {
    color: '#000000',
    fontSize: 17,
    fontFamily: FontFamily.regular,
    lineHeight: 28,
    textAlign: 'center',
  },
});
