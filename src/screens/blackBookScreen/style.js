import {StyleSheet, Dimensions} from 'react-native';
import {FontFamily} from '../../constant/Fonts';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    width: '100%',
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
  searchInput: {
    color: '#fff',
    fontSize: 16,
    width: '90%',
    justifyContent: 'center',
    fontFamily: FontFamily.regular,
    padding: 8,
  },
  filterImgStyle: {
    alignSelf: 'center',
  },
  filterImage: {
    width: 18,
    height: 16,
  },
  recentTitleContainer: {
    marginVertical: 5,
  },
  recentTitleText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: FontFamily.bold,
  },
  renderMainContainer: {
    flex: 1,
    width: '100%',
    height: Height * 0.75,
    marginVertical: 10,
    backgroundColor: '#413e3e',
    alignSelf: 'center',
    borderRadius: 34,
    // overflow: 'hidden'
  },
  listImageContainer: {
    flex: 1,
    overflow: 'visible'
  },
  renderImgStyle: {
    flex: 1,
    
  },
  renderBookmarkImageContainer: {
    // bottom: 8,
    // position:'absolute',
    // right:0,
    position: 'absolute',
    right: 24,
    top: -10
  },
  renderBookmarkImage: {
    // position: 'absolute',
    // right: 24,
  },
  renderTitleContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  renderNameText: {
    color: '#fff',
    fontSize: 22,
    overflow: 'hidden',
    fontFamily: FontFamily.bold,
  },
  renderPlaceText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: FontFamily.regular,
    marginTop: 6,
  },
  renderDopText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: FontFamily.regular,
  },
  contentText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: FontFamily.light,
    paddingTop: 24,
  },
  categoryFilterStyle: {
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  archiveContainer: {
    width: 'auto',
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24,
    marginTop: 15
  },
  categoryFilterText: {
    color: '#000000',
    fontSize: 10,
    padding: 14,
    letterSpacing: 1,
    fontFamily: FontFamily.medium,
  },
   remarkText: {
    color: '#000000',
    fontSize: 14,
    paddingHorizontal: 24,
    paddingVertical:10,
    letterSpacing: 1,
    fontFamily: FontFamily.medium,
  },
  viewCrewContainer: {
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 40,
  },
  viewcrewText: {
    color: '#fff',
    fontSize: 14,
    paddingHorizontal: 24,
    paddingVertical:10,
    fontFamily: FontFamily.regular,
  },
});
