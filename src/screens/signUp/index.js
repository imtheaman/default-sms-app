import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styled';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={{ height:'60%'}}>
      <Image  source={require('../../assets/images/logo.png')} />
      </View>
      <View style={{flex:1, width:'90%', }}>
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.buttonText}>Sign up for free</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={require('../../assets/images/google.png')}
          />
        </View>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={require('../../assets/images/fbLogo.png')}
          />
        </View>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={require('../../assets/images/appleLogo.png')}
          />
        </View>
        <Text style={styles.buttonText}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginContainer}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
};

export default SignUpScreen;
