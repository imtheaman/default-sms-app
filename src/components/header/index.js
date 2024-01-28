import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';

const Header = ({type, title, navigation}) => {
  switch (type) {
    case 'headerIcon':
      return (
        <View style={styles.container}>
          <TouchableOpacity
            hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
            onPress={() => navigation.goBack()}>
            <Image
              style={styles.backImage}
              source={require('../../assets/images/leftIcon.png')}
            />
          </TouchableOpacity>
          <View style={styles.withIconText}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </View>
      );

    default:
      return (
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      );
  }
};

export default Header;
