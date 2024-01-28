import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../constant/Fonts';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  listTalentContainer: {
    flex: 1,
    // width: Width * 0.9,
    height: 'auto',
    borderColor: '#545458A6',
    borderBottomWidth: 0.5,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  listTalentText: {
    color: '#000000',
    fontSize: 17,
    fontFamily: FontFamily.regular,
    lineHeight: 28,
    textAlign: 'center',
  },
  filterContainer: {
    // flex: 0.12,
    // flexDirection: 'row',
    marginVertical: 12,
    marginHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 40,
    borderColor: 'white',
    backgroundColor: '#76768026',
    alignItems: 'center',
    height: 44,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  searchImage: {
    width: 18,
    height: 18,
    alignSelf: 'center',
    tintColor: 'grey',
    marginLeft: 15,
  },
  searchInput: {
    color: '#000000',
    fontSize: 16,
    width: '90%',
    justifyContent: 'center',
    fontFamily: FontFamily.regular,
    paddingHorizontal: 10,
  },
  closeImgContainer: {
    width: 30,
    height: 30,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 15,
    right: 10,
    top: 6,
  },
  closeImgStyle: {
    tintColor: '#ffffff',
  },
});
