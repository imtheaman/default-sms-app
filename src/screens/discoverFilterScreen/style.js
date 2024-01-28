import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../constant/Fonts';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  keyBoardAvoidCntainer: {
    flex: 1,
  },
  mainHeaderContainer: {
    height: '14%',
    backgroundColor: '#76768026',
    justifyContent: 'flex-end',
    paddingHorizontal: 25,
    paddingVertical: 16,
  },
  titleText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: FontFamily.bold,
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingBottom: 6,
  },
  categoryStyle: {
    width: 'auto',
    borderRadius: 40,
    marginVertical: 16,
    marginHorizontal: 4,
    backgroundColor: '#50505F',
    justifyContent: 'center',
  },
  selectButton: {
    backgroundColor: 'white',
  },
  categoryText: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: FontFamily.medium,
  },
  selectButtonText: {
    color: '#000',
  },
  filterListContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listFilterContainer: {
    // flex: 1,
    // width: '100%',
    // height: 'auto',
    // borderColor: '#545458A6',
    // borderBottomWidth: 0.5,
    // backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  mainFilterContainer: {
    flex: 1,
    width: '100%',
    height: 'auto',
    borderColor: '#545458A6',
    borderBottomWidth: 0.5,
    backgroundColor: 'transparent',
  },
  listTalentContainer: {
    flex: 1,
    width: '92%',
    height: 'auto',
    borderColor: '#545458A6',
    borderBottomWidth: 0.5,
    backgroundColor: '#1C1C1E33',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  listTalentText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: FontFamily.regular,
    lineHeight: 28,
    paddingLeft: 4
  },
  renderCategoryText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontFamily: FontFamily.light,
    lineHeight: 28,
  },
  CheckBoxTouch: {
    width: 28,
    height: 28,
    paddingRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CheckBoxContainer: {
    width: 18,
    height: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 4,
  },
  isCheckBoxContainer: {
    width: 18,
    height: 18,
    backgroundColor: '#1890FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
  },
  readMoreText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: FontFamily.regular,
    textDecorationLine: 'underline'
  },
  readMoreContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  minValueText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontFamily: FontFamily.regular
  },
  updateSliderContainer: {
    width: 'auto',
    backgroundColor: '#101010',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 30,
    alignSelf: 'center'
  },
  updateSliderValue:{
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: FontFamily.regular,
    textAlign: 'center'
  }
});
