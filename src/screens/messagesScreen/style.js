import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../constant/Fonts';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingHorizontal: 20,
    // paddingTop: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: 1,
  },
  bodyContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratsText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 18,
    width: '100%',
    // backgroundColor:'red'
  },
  searchContainer: {
    flexDirection: 'row',
    width: Width * 0.82,
    borderRadius: 40,
    borderColor: 'white',
    backgroundColor: '#76768026',
    alignItems: 'center',
    height:45
  },
  searchImage: {
    width: 18,
    height: 18,
    alignSelf: 'center',
    marginLeft: 15,
  },
  filterImage: {
    width: 18,
    height: 16,
  },
  searchInput: {
    color: '#fff',
    fontSize: 16,
    width: '90%',
    justifyContent: 'center',
    fontFamily: FontFamily.regular,
    padding: 8,
  },
  filterImgStyle: {
    // width: 8,
    alignSelf: 'center',
  },
  categoryStyle: {
    width: 'auto',
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginVertical: 16,
    marginHorizontal: 6,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  selectButton: {
    backgroundColor: 'white',
  },
  categoryText: {
    paddingHorizontal: 16,
    paddingVertical: 13,
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: FontFamily.regular,
  },
  selectButtonText: {
    color: '#000',
  },
  categoryContainer: {
    flexDirection: 'row',
    // backgroundColor:'red',
    // paddingBottom: 6,
  },
  profileNameText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: FontFamily.bold,
  },
  messageText: {
    color: '#EBEBF599',
    fontSize: 15,
    fontFamily: FontFamily.regular,
  },
  profileImgStyle: {
    width: 45,
    height: 45,
    borderRadius: 23,
  },
  arrowImgStyle: {
    top: 5,
    marginLeft: 10,
  },
  divider: {
    width: '83.5%',
    height: 0.4,
    backgroundColor: '#EBEBF54D',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
});
