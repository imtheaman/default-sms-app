import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CountryPicker} from 'react-native-country-codes-picker';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import Header from '../../components/header';
import Loading from '../../components/loadingIndicator';
import Strings from '../../constant/Strings';
import {Validation} from '../../constant/validation';
import {getUserRoleFromStorage} from '../../redux/slices/accountSwitchSlice';
import {signInApi} from '../../redux/slices/authSlice';
import {styles} from './style';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [secondPhoneError, setSecondPhoneError] = useState(false);
  const userRole = useSelector(state => state.user.role);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserRoleFromStorage());
  }, [dispatch]);

  useEffect(() => {
    console.log('User role updated:---------------------', userRole);
  }, [userRole]);

  // ====================Calling Sign in Api===================== //
  const onSignIn = () => {
    setLoading(true);
    const signInData = {
      user_identifier: phone,
    };
    dispatch(signInApi(signInData))
      .then(action => {
        if (action.type === 'signInPost/fulfilled') {
          console.log('Login Post API Success:----------->', action.payload);
          setLoading(false);
          setPhone('');
          navigation.navigate('OtpScreen', {phone: phone});
        } else {
          Alert.alert(
            (action.payload.message ),
        );           console.error('Login Post API Error:----------->', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };
  // ====================On Press Sign in button handler===================== //
  const onPressSignIn = () => {
    if (phone === '') {
      setPhoneError(true);
      setSecondPhoneError(false);
    } else if (phone.length < 10) {
      setSecondPhoneError(true);
      setPhoneError(false);
    } else {
      setPhoneError(false);
      setSecondPhoneError(false);
      onSignIn();
    }
  };

  // ====================On Press Sign UP button handler===================== //
  const onSignUp = () => {
    setPhoneError(false);
    setSecondPhoneError(false);
    navigation.navigate('CreateAccount');
  };
  // ====================ON CHANGE TEXT===================== //
  const onChangeTextPhoneNo = text => {
    setPhone(text);
    setPhoneError(false);
    if (text.length === 10) {
      setSecondPhoneError(false);
      Keyboard.dismiss();
    }
  };

  // ===================={ON SELECT COUNTRYCODE}===================== //

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{flex: 1}}>
        <Header title={Strings.logIn} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}>
          <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={styles.loginContainer}>
              <View style={styles.container}>
                <View style={styles.logInInputContainer}>
                  <Text style={styles.label}>{Strings.phoneNumber}</Text>
                  <TouchableOpacity
                    style={styles.countryCodeContainer}
                    onPress={() => modalHandler()}>
                    <Text style={styles.countryCodeText}>
                      {countryCode ? countryCode : Strings.countryCode}
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.divider} />
                  <TextInput
                    placeholder={Strings.phoneNumber}
                    placeholderTextColor={'#E6E0E9'}
                    value={phone}
                    maxLength={10}
                    onChangeText={text => onChangeTextPhoneNo(text)}
                    keyboardType="number-pad"
                    onFocus={() => {}}
                    style={styles.logInInputStyle}
                  />
                </View>
                {phoneError ? (
                  <Text style={styles.errorText}>{Validation.validNumber}</Text>
                ) : null}
                {secondPhoneError ? (
                  <Text style={styles.errorText}>
                    {Validation.validNumberFormat}
                  </Text>
                ) : null}
                <View style={styles.buttonContainer}>
                  <View>
                    <Button
                      title={Strings.logIn}
                      onPress={() => onPressSignIn()}
                    />
                  </View>
                  <View style={styles.dontHaveAccountContainer}>
                    <Text style={styles.anotherLogin}>
                      {Strings.dontHaveAccount}
                    </Text>
                    <TouchableOpacity
                      hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
                      onPress={() => onSignUp()}>
                      <Text style={styles.signUpText}>{Strings.signUp}</Text>
                    </TouchableOpacity>
                  </View>

                  {showModal && (
                    <CountryPicker
                      show={showModal}
                      pickerButtonOnPress={item => {
                        setCountryCode(item.dial_code);
                        setShowModal(false);
                      }}
                      onBackdropPress={() => setShowModal(false)}
                      inputPlaceholder={Strings.placeholderText}
                      inputPlaceholderTextColor={'black'}
                      countryNameTextStyle={{color: 'black'}}
                      dialCodeTextStyle={{color: 'black'}}
                      style={{
                        modal: {
                          height: '60%',
                        },
                        textInput: {
                          height: 60,
                          borderRadius: 6,
                        },
                        countryButtonStyles: {
                          height: 60,
                        },
                        dialCode: {
                          color: 'black',
                        },
                        countryName: {
                          color: 'black',
                        },
                      }}
                    />
                  )}
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <Loading isLoading={loading} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;
