import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../constant/Fonts';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingHorizontal: 24,
    // paddingtop: 30,
  },
  headerText: {
    color: '#fff',
    fontSize: 34,
    // fontWeight: '700',
    letterSpacing: 1,
    fontFamily: FontFamily.bold,
  },
  bodyContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  congratsText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 25,
  },
  anotherText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    paddingVertical: 10,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    height: '6%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    top: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  backIcon: {
    // transform: [{ rotate: '180deg' }],
    tintColor: 'white',
    width: 12,
    height: 20,
  },
  headerContainer: {
    paddingVertical: 10,
  },
  backIconContainer: {
    paddingVertical: 15,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    // height: Height * 0.055,
    borderRadius: 40,
    borderColor: 'white',
    backgroundColor: '#76768026',
    alignItems: 'center',
    // padding: 13,
  },
  searchImage: {
    width: 18,
    height: 18,
    alignSelf: 'center',
    marginLeft: 15,
  },
  searchInput: {
    color: '#fff',
    fontSize: 16,
    width:'90%',
    justifyContent: 'center',
    fontFamily: FontFamily.regular,
    paddingHorizontal:6
  },
  profileImgStyle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  profileNameText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: FontFamily.medium,
  },
  viewCrewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 20,
    marginTop: 5,
  },
  viewcrewText: {
    color: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 13,
    fontSize: 13,
    fontFamily: FontFamily.medium,
  },
  divider: {
    width: '83.5%',
    height: 0.5,
    backgroundColor: '#545458A6',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  renderContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  renderDetailContainer: {
    marginHorizontal: 15,
  },
  searchText: {
    color: '#FFFFFF',
    fontFamily: FontFamily.regular,
    paddingHorizontal: 25,
  },
});
