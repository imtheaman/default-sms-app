import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import FloatingLabelInput from '../../components/floatLabelInput';
import Header from '../../components/header';
import Loading from '../../components/loadingIndicator';
import Strings from '../../constant/Strings';
import { postAPIData } from '../../redux/slices/otpSlice';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { otpAuthenticate } from '../../redux/slices/authSlice';

const OtpScreen = ({ route }) => {
  const navigation = useNavigation();
  const { phone } = route.params;

  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false);
  const [otpErrorText, setOtpErrorText] = useState('');
  const [loading, setLoading] = useState(false);
  const otpRef = useRef(null);

  const dispatch = useDispatch();

  const focusNextInput = nextInputRef => {
    nextInputRef && nextInputRef.current && nextInputRef.current.focus();
  };

  useEffect(() => {
    focusNextInput(otpRef);
    console.log('Check Phone', phone);
  }, []);

  const OtpHandler = () => {
    setLoading(true);
    const postData = {
      user_identifier: phone,
      otp: otp,
    };
    dispatch(otpAuthenticate(postData))
      .then(action => {
        console.log('Action Type:', action.type);
        if (action.type === 'otpPost/fulfilled') {
          let data = action.payload;
          console.log('OTPn Post API Success:----------->', data);
          let userToken = data.data.token
          let userId = data.data.user_id
          let userFirstNam = data.data.first_name;
          AsyncStorage.setItem('userToken', userToken)
          AsyncStorage.setItem('userId', userId)
          AsyncStorage.setItem('userFirstName', userFirstNam)
          console.log('userToken------------------>', userToken);
          console.log('userId------------------>', userId);
          setOtp('')
          setLoading(false);
          navigation.navigate('BottomTab');

        } else {
          Alert.alert('API failed please try again');
          console.error('OTP Post API Error:----------->', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  const onChangeTextOtpNo = text => {
    setOtp(text);
    if (text.length === 6) {
      Keyboard.dismiss();
    }
  };

  const OnOtpHandler = () => {
    console.log('working-=-=--');
    if (otp === '') {
      console.log('fist-- working-=-=--');
      setOtpError(true);
      setOtpErrorText('Please enter otp');
      console.log('stTE CHECK', otpError);
    } else if (otp.length < 6) {
      console.log('second---working-=-=--');
      setOtpError(true);
      setOtpErrorText('Please enter valid otp');
    } else {
      setOtpErrorText('');
      setOtpError(false);
      OtpHandler();
    }
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          title={Strings.confirmOtp}
          type={'headerIcon'}
          navigation={navigation}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.keyBoardAvoidCntainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                marginTop: Platform.OS === 'ios' ? 0 : 15,
              }}>
              <View style={styles.container}>
                <FloatingLabelInput
                  ref={otpRef}
                  keyboardType={'number-pad'}
                  label={Strings.otp}
                  value={otp}
                  onChangeText={text => onChangeTextOtpNo(text)}
                  secureTextEntry={true}
                  maxLength={6}
                  showError={otpError}
                  error={otpErrorText}
                />
                <View>
                  <Button title={Strings.next} onPress={() => OnOtpHandler()} />
                </View>
                <TouchableOpacity
                  style={styles.anotherLoginContainer}
                  hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                  <Text style={styles.anotherLogin}>{Strings.resendOtp}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <Loading isLoading={loading} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OtpScreen;
