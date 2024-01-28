import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../constant/Fonts';
const Width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  keyBoardContainer: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1
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
    width: Width * 0.9,
    marginTop: 20,
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
    paddingHorizontal: 10,
  },
  addButtonStyle: {
    height: 50,
    borderRadius: 24,
  },
  ageContainer: {
    width: Width * 0.9,
    marginVertical: 20,
  },
  inputContainer: {
    height: 56,
    borderWidth: 1,
    borderColor: '#938F99',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10
  },
  inputStyle: {
    fontSize: 14,
    color: '#E6E0E9',
    width: '90%',
    padding: 14,
    fontFamily: FontFamily.regular,
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
  iconViewStyle: {
    marginVertical: 10
  },
});
