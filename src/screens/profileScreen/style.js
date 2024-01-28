import { StyleSheet, Dimensions } from 'react-native';
import { FontFamily } from '../../constant/Fonts';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingHorizontal: 24,
    // paddingTop: 30,
  },
  datePickerOkContainer: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    // maxHeight: '80%',
    alignItems: 'center',
    // height: '26%',
    marginVertical: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: FontFamily.bold,
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // backgroundColor:'red',
    marginTop: 15
    // paddingVertical: 10
  },
  headerDropContainer: {
    flexDirection: 'row',
  },
  dropImgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 25,
  },
  profileImgContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#F8B903',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#020202',
  },
  imgResponseStyle: {
    width: 95,
    height: 95,
    borderRadius: 50,
  },
  nameText: {
    color: '#fff',
    fontSize: 26,
    overflow: 'hidden',
    // fontWeight:'100'
    fontFamily: FontFamily.thin,
  },
  dopText: {
    color: '#fff',
    // fontWeight: '700',
    fontSize: 13,
    fontFamily: FontFamily.medium,
  },
  placeText: {
    color: '#fff',
    // fontWeight: '100',
    overflow: 'hidden',
    letterSpacing: 1,
    fontSize: 13,
    fontFamily: FontFamily.thin,
  },
  tabs: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#F8B903',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
  },
  activeTab: {
    flex: 1,
    borderBottomWidth: 1.5,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#F8B903',
    textAlign: 'center',
    fontFamily: FontFamily.bold,
  },
  activeTabText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: FontFamily.bold,
  },
  fiterTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgrounssdColor:'blue',
    alignItems: 'center',
    // paddingHorizontal: 15,
    height: 20
  },
  fiterTitleText: {
    color: '#fff',
    fontSize: 14,
    // fontWeight: '700',
    // padding: 3,
    fontFamily: FontFamily.bold,
  },
  editImgStyle: {
    width: 20,
    height: 20,
    marginTop: 8,
  },
  secDivider: {
    width: '100%',
    height: 0.4,
    backgroundColor: '#D3D3D3',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    margin: 8,
  },
  aboutMainContainer: {
    flex: 1,
    // paddingHorizontal: 22,
  },
  aboutHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:'red',
    marginTop: 10
    // paddingHorizontal: 15,
    // padding: 10
  },
  bioImgStyle: {
    // width: 24,
    // height: 24,
  },
  bioText: {
    color: '#fff',
    alignSelf: 'center',
    paddingLeft: 9,
    // fontWeight: '700',
    fontSize: 14,
    fontFamily: FontFamily.bold,
  },
  dropImgPosContainer: {
    // paddingBottom: 5,
  },
  dropImgStyle: {
    // width: 16,
    // height: 20,
  },
  dropUpImgStyle: {
    transform: [{ rotate: '180deg' }],
  },
  bioContainer: {
    width: Width * 0.75,
    height: 'auto',
    // marginTop: 8,
  },
  bioContentText: {
    color: '#FFF',
    fontSize: 14,
    // fontWeight: '100',
    fontFamily: FontFamily.thin,
    paddingVertical: 2
    // backgroundColor:'red'
  },
  keyText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: FontFamily.bold,
    paddingVertical: 2
    // fontWeight: '700',
  },
  valueText: {
    color: '#FFF',
    fontSize: 14,
    paddingBottom: 15,
    fontFamily: FontFamily.thin,
    paddingVertical: 2
  },
  yearText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: FontFamily.thin,
  },
  divider: {
    width: Width * 0.9,
    height: 0.4,
    backgroundColor: '#d5d5e0',
  },
  awardImgStyle: {
    // width: 24,
    // height: 24,
  },
  addImgContainer: {
    width: 30,
    height: 30,
    position: 'absolute',
    backgroundColor: '#F8B903',
    borderRadius: 16,
    alignItems: 'center',
    left: 64,
    bottom: 30,
    justifyContent: 'center',
  },
  addImgText: {
    // height:12 , width:12
  },
  flatListContainer: {
    marginTop: 10,
    flex: 1,
  },
  listContainer: {
    flex: 1,
    width: Width * 0.87,
    height: Height * 0.175,
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
  },
  renderTalentNameText: {
    color: '#fff',
    fontSize: 16,
    overflow: 'hidden',
    fontFamily: FontFamily.bold,
    maxWidth: '80%'
  },
  renderPlaceText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: FontFamily.regular,
    marginTop: 5,
  },
  renderTalentDurationText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: FontFamily.regular,
    marginTop: 5,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 18,
    paddingTop: 5,
    // backgroundColor: 'red'
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
  settingLabelContainer: {
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 10,
    borderColor: '#D3D3D3',
    borderBottomWidth: 0.3,
  },
  settingLabelText: {
    fontSize: 17,
    color: '#FFFFFF',
    padding: 6,
    fontFamily: FontFamily.regular,
  },
  arrowImgStyle: {
    width: 9,
    height: 18,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: '90%',
    justifyContent: 'center',
    fontFamily: FontFamily.regular,
    paddingHorizontal: 6,
  },
  headerDetailContainer: {
    paddingLeft: 16,
  },
  addFilmButtonContainer: {
    marginVertical: 7,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  addFilmButton: {
    height: 50,
    borderRadius: 25,
    marginTop: 0,
    marginBottom: 5,
  },
  bioSecContainer: {
    flexDirection: 'row',
    // marginTop: 20,
    // paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalOption: {
    fontSize: 18,
    paddingVertical: 10,
    textAlign: 'center',
    color: 'black'
  },
  modalHeadContainer: {
    alignItems: 'center',
  },
  modalHeaderText: {
    fontFamily: FontFamily.bold,
    color: 'black',
    fontSize: 13,
  },
  modalHeaderSubText: {
    fontSize: 13,
    fontFamily: FontFamily.regular,
    paddingVertical: 10,
  },
  profileDividerProfile: {
    width: '100%',
    alignItems: 'center',
  },
  profileDividerText: {
    fontSize: 20,
    color: '#007AFF',
    fontFamily: FontFamily.regular,
    padding: 15,
  },
  modalDivider: {
    width: '100%',
    height: 0.3,
    backgroundColor: 'grey',
  },
  modalCloseContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '100%',
  },
  midalCloseText: {
    fontSize: 20,
    color: '#007AFF',
    fontFamily: FontFamily.bold,
  },
  onEditMainContainer: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  onEditContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor:'green'
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: FontFamily.regular,
  },
  editButtonContainer: {
    justifyContent: 'center',
  },
  bioTextContainer: {
    width: Width * 0.9,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  bioTextInput: {
    color: '#000000',
    fontSize: 14,
    width: '95%',
    height: 90,
    fontFamily: FontFamily.regular,
    // backgroundColor:'red'
    // padding: 13,
  },
  ageContainer: {
    // height: 56,
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
  rightImageStyle: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  editAwardContainer: {
    width: Width * 0.9,
    borderRadius: 6,
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderColor: '#938F99',
    borderWidth: 1,
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  editValueText: {
    color: '#FFF',
    fontSize: 13,
    // paddingBottom: 15,
    fontFamily: FontFamily.regular,
    textDecorationLine: 'underline',
    lineHeight: 20,
  },
  editYearText: {
    color: '#FFF',
    fontSize: 13,
    fontFamily: FontFamily.regular,
    lineHeight: 20,
  },
  editKeyText: {
    color: '#FFF',
    fontSize: 13,
    fontFamily: FontFamily.bold,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    // flex: 1,
    borderRadius: 15,
    height: Height * 0.175,
    marginVertical: 10,
    // width: ,
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    alignSelf: 'flex-end',
    // flex: 1,
    borderRadius: 15,
    height: Height * 0.175,
    marginVertical: 10,
    // width: ,
  },
  swipeableItem: {
    // backgroundColor: 'white',
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    overflow: 'visible',
  },
  swipeableItemDisabled: {
    // backgroundColor: 'white',
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    overflow: 'hidden',
  },
});
