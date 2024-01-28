import { StyleSheet, Dimensions } from 'react-native';
import { FontFamily } from '../../constant/Fonts';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black', // Background color of the modal container
  },
  headingText: {
    color: '#fff',
    fontSize: 14,
    letterSpacing: 0.14,
    fontFamily: FontFamily.light,
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: FontFamily.bold,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: '100%',
  },
  searchInput: {
    color: '#fff',
    fontSize: 16,
    width: '90%',
    justifyContent: 'center',
    fontFamily: FontFamily.regular,
    paddingHorizontal: 6,
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
  searchContainer: {
    flexDirection: 'row',
    width: Width * 0.82,
    borderRadius: 40,
    borderColor: 'white',
    backgroundColor: '#76768026',
    alignItems: 'center',
  },
  filterImgStyle: {
    alignSelf: 'center',
  },
  categoryContainer: {
    alignItems: 'center',
  },
  categoryFilterContainer: {
    flexDirection: 'row',
  },
  categoryText: {
    width: Width * 0.25,
    color: '#fff',
    padding: 10,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: FontFamily.regular,
  },
  categoryFilterText: {
    color: '#fff',
    padding: 12,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: FontFamily.regular,
  },
  categoryStyle: {
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryFilterStyle: {
    width: 'auto',
    borderRadius: 40,
    borderColor: 'white',
    margin: 10,
    paddingHorizontal: 8,
    backgroundColor: '#50505F',
  },
  fiterTitleContainer: {
    marginTop: 20,
    marginVertical: 5,
  },
  fiterTitleBox: {
    marginVertical: 8,
  },
  fiterTitleText: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 23,
    fontFamily: FontFamily.bold,
  },
  viewProducerCrewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    right: 20,
    borderRadius: 34,
  },
  viewProducercrewText: {
    color: '#fff',
    paddingVertical: 11,
    paddingHorizontal: 30,
    fontSize: 17,
    fontFamily: FontFamily.regular,
  },
  listContainer: {
    flex: 1,
    width: Width * 0.86,
    height: Height * 0.4,
    marginVertical: 10,
    backgroundColor: '#000',
    alignSelf: 'center',
    borderRadius: 34,
    overflow: 'hidden',
  },
  listTalentContainer: {
    flex: 1,
    width: Width * 0.87,
    // height: Height * 0.175,
    marginVertical: 12,
    backgroundColor: '#000',
    alignSelf: 'center',
    borderRadius: 30,
    flexDirection: 'row',


    // padding:10
  },
  listFilterContainer: {
    flex: 1,
    width: Width * 0.87,
    // height: Height * 0.175,
    marginVertical: 12,
    backgroundColor: '#000',
    alignSelf: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  listImageContainer: {
    flex: 1,
    // overflow: 'hidden',
    // alignItems: 'center',
    justifyContent: 'center'
  },
  renderImgStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderTitleContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
    // marginLeft: 12,
    // marginVertical: 8,
  },
  renderNameText: {
    color: '#fff',
    fontSize: 16,
    overflow: 'hidden',
    fontFamily: FontFamily.bold,
    maxWidth: '75%',
  },
  renderDopText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: FontFamily.regular,
    marginTop: 5,
  },
  renderPlaceText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: FontFamily.regular,
  },
  titleContainer: {
    marginLeft: 25,
  },
  nameText: {
    color: '#fff',
    fontSize: 20,
    // fontWeight: '700',
    fontFamily: FontFamily.bold,
  },
  placeText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: FontFamily.regular,
  },
  viewCrewContainer: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 20,
    // position: 'absolute',
    // bottom: 6,
    width: '70%',
  },
  viewcrewText: {
    color: '#fff',
    paddingVertical: 7,
    fontSize: 14,
    fontFamily: FontFamily.regular,
  },
  selectButton: {
    backgroundColor: 'white',
  },
  bookmarkImgStyle: {
    // position: 'absolute',
    right: 28,
    top: 0,
  },
  selectButtonText: {
    color: '#000',
  },
  menuImgStyle: {
    width: 48,
    height: 48,
    alignSelf: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
  closeIcon: {
    width: 25,
    height: 25,
    tintColor: 'white', // Change the color as needed
  },
  verifiedIconContainer: {
    position: 'absolute',
    right: 20,
    top: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImgStyle: {
    width: 55,
    height: 55,
    borderRadius: 22,
  },
});
