import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingHorizontal: 15,
    paddingVertical: 25,
  },
  headerText: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: 1,
  },
  profileImgStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  profileNameText: {
    color: '#F2F2F2',
    fontSize: 16,
    fontWeight: '400',
  },
  messageText: {
    color: '#ebebf599',
    fontSize: 13,
    fontWeight: '400',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#D3D3D3',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  },
  listContainer: {
    marginTop: 15
  }
});
