import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../constant/Fonts';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  keyBoardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  // inputContainer: {
  //   flex: 1,
  //   padding: 10,
  // },
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
  headerText: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '700',
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
  backIconContainer: {
    paddingVertical: 15,
  },
  backIcon: {
    // transform: [{ rotate: '180deg' }],
    tintColor: 'white',
    width: 12,
    height: 20,
  },
  crewListContainer: {
    height: 56,
    borderWidth: 0.25,
    borderColor: '#938F99',
    borderRadius: 5,
  },
  crewListTextContainer: {
    borderWidth: 1,
    borderColor: '#938F99',
    borderRadius: 5,
  },
  crewListInputStyle: {
    fontSize: 16,
    color: '#CAC4D0',
    width: '100%',
    padding: 14,
  },
  addButtonStyle: {
    height: 50,
    borderRadius: 24,
  },
  flatListContainer: {
    width: Width * 0.8,
    height: Height * 0.15,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: 6,
  },
  listContainer: {
    flex: 1,
    width: Width * 0.5,
    height: Height * 0.05,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderNameText: {
    color: '#000',
    fontSize: 16,
    fontFamily: FontFamily.medium,
    overflow: 'hidden',
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
    justifyContent:'center'
  },
  inputStyle: {
    fontSize: 14,
    color: '#E6E0E9',
    width: 140,
    left: 10,
    fontFamily: FontFamily.regular,
    // backgroundColor:'red'
  },
  DobErrorText: {
    color: '#ff3232',
    fontSize: 12,
    fontFamily: FontFamily.regular,
    paddingHorizontal: 15,
    marginTop: 5,
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
});
