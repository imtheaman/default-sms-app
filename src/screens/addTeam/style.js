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
  keyBoardAvoidCntainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
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
    top: 15,
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
    paddingVertical: 5,
  },
  backIconContainer: {
    paddingVertical: 15,
  },
  profileImgStyle: {
    width: 45,
    height: 45,
    borderRadius: 22,
  },
  profileNameText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: FontFamily.medium,
  },
  divider: {
    width: '83.5%',
    height: 0.3,
    backgroundColor: '#40434A',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  viewcrewText: {
    color: '#EBEBF599',
    fontSize: 15,
    fontFamily: FontFamily.regular,
  },
  renderContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  renderTextContainer: {
    marginHorizontal: 15,
    flex: 1,
  },
  flatListContainer: {
    height: 'auto',
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 55,
    borderRadius: 15,
    height: 75,
    marginVertical: 10,
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    alignSelf: 'flex-end',
    borderRadius: 15,
    height: Height * 0.175,
    marginVertical: 10,
  },
  swipeableItem: {
    borderBottomColor: '#ccc',
    overflow: 'visible',
  },
  swipeableItemDisabled: {
    borderBottomColor: '#ccc',
    overflow: 'hidden',
  },
});
