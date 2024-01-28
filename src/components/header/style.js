import {Platform, StyleSheet} from 'react-native';
import { FontFamily } from '../../constant/Fonts';

export const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 10 : 25,
    paddingHorizontal:20
  },
  backImage: {
    tintColor: 'white',
    width: 12,
    height: 20
  },
  withIconText:{
    marginTop: 15,

  },
  titleTextContainer: {
    marginTop: 15,
    paddingHorizontal:20,
  },
  titleText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: FontFamily.bold
  },
});
