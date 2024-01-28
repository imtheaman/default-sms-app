import React, { useEffect, useRef } from 'react';
import { Image, View, Animated, Easing } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      checkUserToken()
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  const checkUserToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      console.log('check token here on splash -=-=->', userToken);
      if (userToken) {
        navigation.navigate('BottomTab');
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error checking user token:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedContainer,
          { transform: [{ translateY: slideAnim }] },
        ]}>
        <Image source={require('../../assets/images/launch_screen.png')} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
