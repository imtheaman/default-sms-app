import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../constant/Fonts';
const Width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingHorizontal: 18,
    // paddingTop: 30,
    // backgroundColor: '#fff',
  },
  headerText: {
    color: '#fff',
    fontSize: 34,
    fontFamily: FontFamily.bold,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#F8B902',
  },
  tab: {
    flex: 1, // Make the tab take up equal space
    paddingVertical: 10,
  },
  activeTab: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#F8B902',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
  },
  activeTabText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
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
  bottomText: {
    color: '#CAC4D0', // Change text color for better visibility
    fontSize: 12,
    paddingHorizontal: 15,
    fontFamily: FontFamily.regular,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    height: 48, // Reduce the height to prevent excessive pushing of content when the keyboard is open
    borderRadius: 24, // Adjust the radius accordingly
    marginTop: 30,
    justifyContent: 'center',
    width: Width * 0.9,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  bottomContainer: {
    // backgroundColor: 'red',
    // right:50,
    // justifyContent: 'center',
  },
  buttonContainer: {
    // backgroundColor: 'blue',
    // justifyContent: 'center',
  },
  divider: {
    width: 1,
    height: 33,
    backgroundColor: '#e6e0e9',
    alignSelf: 'center',
  },
  label: {
    position: 'absolute',
    backgroundColor: '#000',
    paddingHorizontal: 5,
    top: -10,
    left: 10,
    fontSize: 12,
    fontWeight: '400',
    color: '#CAC4D0',
  },
  modalContainer: {
    paddingBottom: 20,
  },
  modalSearchTextInput: {
    width: '100%',
    height: '20%',
  },
  headerTextContainer: {
    marginTop: 15,
  },
  signUpContainer: {
    flexDirection: 'row',
    height: 53,
    width: Width * 0.9,
    borderWidth: 1,
    borderColor: '#938F99',
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 8,
  },
  signUpTextInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  countryCodeText: {
    color: '#E6E0E9',
    fontSize: 16,
    fontWeight: '400',
  },
  signUpTextInputStyle: {
    padding: 13,
    fontSize: 16,
    fontWeight: '400',
    color: '#E6E0E9',
    width: '85%',
  },
  signUpErrorText: {
      color: '#ff3232',
      fontSize: 12,
      fontFamily: FontFamily.regular,
      paddingHorizontal: 15,
  },
});
