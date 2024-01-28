import {Dimensions, Platform, StyleSheet} from 'react-native';
import { FontFamily } from '../../constant/Fonts';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // marginTop: 5,
  },
  imgContainer: {
    width: '100%',
    height: Height * 0.56,
    flex:1
  },
  imgStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  closeImgContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#FDFDFDC7',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 15,
    right: 13,
    top:Platform.OS === 'ios' ? 15 :8
  
  },
  closeImgStyle: {
    height: 11,
    width: 11,
    tintColor: '#000',
  },
  nameText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: FontFamily.bold,
    lineHeight: 28,
    letterSpacing: 0.35,
  },
  placeText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: FontFamily.bold,
    lineHeight: 16
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // paddingHorizontal: 15
    // marginTop: 25,
    // paddingBottom: 24,
    marginVertical:20
  },
  shareImgIcon: {
    width: 18,
    height: 18,
    top: 8
  },
  fiterTitleContainer: {
    // top: 15,
    // paddingHorizontal: 15,
    paddingVertical: 4,
  },
  fiterTitleText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  listContainer: {
    flex: 1,
    width: Width * 0.87,
    height: Height * 0.175,
    marginVertical: 12,
    backgroundColor: '#000',
    alignSelf: 'center',
    borderRadius: 30,
    flexDirection: 'row',
  },
  listImageContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  renderImgStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderTitleContainer: {
    flex: 1,
    marginLeft: 12,
    marginVertical: 8,
  },
  renderNameText: {
    color: '#fff',
    fontSize: 16,
    overflow: 'hidden',
    fontFamily: FontFamily.bold,
    paddingRight: 4
  },
  renderPlaceText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: FontFamily.regular,
    marginTop: 5,
  },
  renderDopText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: FontFamily.regular,
  },
  viewCrewContainer: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 20,
    position: 'absolute',
    bottom: 6,
    width: '70%',
  },
  viewcrewText: {
    color: '#fff',
    paddingVertical: 7,
    fontSize: 14,
    fontFamily: FontFamily.regular,
  },
  flatListContainer: {
    flex: 0.55,
    marginTop: 20,
  },
  bookmarkImgStyle: {
    // position: 'absolute',
    right: 28,
    top: 0,
  },
});
