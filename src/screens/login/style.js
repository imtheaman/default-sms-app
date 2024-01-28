import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../constant/Fonts';
const Width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    paddingTop: 20,
  },
  loginContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 0 : 15,
  },
  anotherLogin: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Light',
  },
  label: {
    position: 'absolute',
    backgroundColor: '#000',
    paddingHorizontal: 5,
    top: -10,
    left: 10,
    fontSize: 12,
    color: '#CAC4D0',
    fontFamily: 'Roboto-Regular',
  },
  divider: {
    width: 1,
    height: 33,
    backgroundColor: '#e6e0e9',
    alignSelf: 'center',
  },
  errorText: {
    color: '#ff3232',
    fontSize: 12,
    fontFamily: FontFamily.regular,
    paddingHorizontal: 15,
  },
  logInInputContainer: {
    flexDirection: 'row',
    height: 53,
    width: Width * 0.9,
    borderWidth: 1,
    borderColor: '#938F99',
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 8,
  },
  logInInputStyle: {
    padding: 13,
    fontSize: 16,
    fontWeight: '400',
    color: '#E6E0E9',
    fontFamily: FontFamily.regular,
    width: '85%',
  },
  countryCodeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  countryCodeText: {
    color: '#E6E0E9',
    fontSize: 16,
    fontWeight: '400',
  },
  dontHaveAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  signUpText: {
    color: '#007AFF',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
});
