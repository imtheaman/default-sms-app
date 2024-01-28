import {StyleSheet, Dimensions} from 'react-native';
import { FontFamily } from '../../constant/Fonts';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  shareImgIcon: {
    width: 22,
    height: 22,
  },
  fiterTitleContainer: {
    paddingHorizontal: 15,
  },
  fiterTitleText: {
    color: '#fff',
    fontSize: 17,
    fontFamily:FontFamily.medium
    // fontFamily:FontFamily.medium,
  },
  listContainer: {
    flex: 1,
    width: Width * 0.5,
    height: Height * 0.05,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listImageContainer: {
    flex: 0.5,
  },
  renderImgStyle: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  renderTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  renderNameText: {
    color: '#000',
    fontSize: 16,
    fontFamily:FontFamily.medium,
    overflow: 'hidden',
  },
  renderPlaceText: {
    color: '#fff',
    fontSize: 10,
  },
  viewCrewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    marginHorizontal: 20,
    marginVertical: 13,
    right: 25,
    borderRadius: 14,
  },
  viewcrewText: {
    color: '#fff',
    fontFamily:FontFamily.medium,
    paddingVertical: 7,
  },
  flatListContainer: {

    width: Width * 0.8,
    height: Height * 0.15,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: 6
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
  },
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#F8B902',
  },
  tab: {
    flex: 1,
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
    fontFamily:FontFamily.medium,
  },
  activeTabText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily:FontFamily.medium,
  },
  aboutMainContainer: {
    flex: 0.55,
    paddingHorizontal: 22,
  },
  aboutHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bioImgStyle: {
    width: 29,
    height: 25,
  },
  awardImgStyle: {
    width: 18,
    height: 20,
    top: 5,
  },
  bioText: {
    color: '#fff',
    padding: 5,
    fontFamily:FontFamily.medium,
  },
  dropImgStyle: {
    width: 16,
    height: 20,
  },
  bioContainer: {
    width: Width * 0.75,
    height: 'auto',
    marginTop: 8,
  },
  bioContentText: {
    color: '#FFF',
    fontSize: 13,
    fontFamily:FontFamily.medium,
    paddingBottom: 15,
  },
  keyText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily:FontFamily.medium,
  },
  valueText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily:FontFamily.medium,
    paddingBottom: 15,
  },
  divider: {
    width: Width * 0.9,
    height: 0.5,
    backgroundColor: '#d5d5e0',
  },
});
