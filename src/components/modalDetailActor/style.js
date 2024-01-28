import {StyleSheet, Dimensions, Platform} from 'react-native';
import { FontFamily } from '../../constant/Fonts';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // marginTop: 5,
  },
  scrollContainer: {
    flex: 1
  },
  imgContainer: {
    // flex: 0.75,
    width: '100%',
    height: Height * 0.35,
  },
  imgStyle: {
    flex: 1,
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
    letterSpacing: 0.35
  },
  placeText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: FontFamily.bold,
    lineHeight: 16
  },
  titleContainer: {
    paddingHorizontal: 24,
  },
  shareImgIcon: {
    width: 20,
    height: 20,
  },
  fiterTitleContainer: {
    paddingHorizontal: 15,
  },
  fiterTitleText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  listContainer: {
    flex: 1,
    width: Width * 0.87,
    height: Height * 0.165,
    marginVertical: 10,
    backgroundColor: '#000',
    alignSelf: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  listImageContainer: {
    flex: 1,
  },
  renderImgStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  renderTitleContainer: {
    flex: 1,
    marginLeft: 12,
    marginVertical: 8,
  },
  renderNameText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: FontFamily.bold,
    overflow: 'hidden',
  },
  renderPlaceText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: FontFamily.regular,
    marginTop: 5
  },
  viewCrewContainer: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 20,
    position: 'absolute',
    bottom: 6,
    width: '70%'
  },
  viewcrewText: {
    color: '#fff',
    paddingVertical: 7,
    fontSize: 14,
    fontFamily: FontFamily.regular,
  },
  flatListContainer: {
    marginTop: 10,
    paddingHorizontal: 20
  },
  bookmarkImgContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    right: 25,
    bottom: 14,
  },
  contactImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 18
  },
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabs: {
    width: '88%',
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#F8B902',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
  },
  activeTab: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#F8B902',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: FontFamily.bold
  },
  activeTabText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: FontFamily.bold
  },
  aboutMainContainer: {
    // flex: 1,
    height: Height * 1,
    paddingHorizontal: 24,
  },
  aboutHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bioSecContainer: {
    flexDirection: 'row',
    marginTop: 20,
    // paddingHorizontal: 5
  },
  dropImgPosContainer: {
    paddingBottom: 5
  },
  bioImgStyle: {
    width: 24,
    height: 24,
  },
  awardImgStyle: {
    width: 24,
    height: 24,
  },
  bioText: {
    color: '#fff',
    alignSelf: 'center',
    paddingLeft: 9,
    fontSize: 14,
    fontFamily: FontFamily.bold,
  },
  dropImgStyle: {
    // width: 16,
    // height: 20,
  },
  dropUpImgStyle: {
    transform: [{ rotate: '180deg'}]
  },
  bioContainer: {
    width: Width * 0.75,
    height: 'auto',
    marginTop: 8,
  },
  bioContentText: {
    color: '#FFF',
    fontSize: 14,
    paddingBottom: 15,
    fontFamily: FontFamily.thin,
  },
  keyText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: FontFamily.bold,
  },
  valueText: {
    color: '#FFF',
    fontSize: 14,
    paddingBottom: 15,
    fontFamily: FontFamily.thin,
  },
  divider: {
    width: Width * 0.9,
    height: 0.5,
    backgroundColor: '#d5d5e0',
  },
  yearText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: FontFamily.thin,
  },
  contactIconContainer: {
    paddingHorizontal: 8
  },
  verifiedIconContainer: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
