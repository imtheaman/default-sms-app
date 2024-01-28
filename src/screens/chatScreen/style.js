import { StyleSheet } from 'react-native';
import { FontFamily } from '../../constant/Fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  keyBoardAvoidCntainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  flexOne: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  messageInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    maxHeight: 100,
  },
  sendButton: {
    paddingHorizontal: 8,
  },
  mainHeaderContainer: {
    height: '12%',
    backgroundColor: '#76768026',
    justifyContent: 'flex-end',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  profileImgStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 18,
  },
  profileNameText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: FontFamily.bold,
  },
  lastSeenText: {
    color: '#EBEBF599',
    fontSize: 10,
    fontFamily: FontFamily.regular,
  },
  backImageContainer: {
    transform: [{ rotate: '180deg' }],
  },
  bottomContainer: {
    height: '10%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 30,
  },
  messageInput: {
    color: '#00000099',
    fontSize: 14,
    fontFamily: FontFamily.regular,
  },
});