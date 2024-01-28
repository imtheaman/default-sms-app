import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
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
import Button from '../../components/Button';
import Header from '../../components/header';
import Strings from '../../constant/Strings';
import {Validation} from '../../constant/validation';
import {styles} from './style';

const CreateAccountByPhone = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [secondPhoneError, setSecondPhoneError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  const onChangeTextPhoneNo = text => {
    setPhone(text);
    setPhoneError(false);
    if (text.length === 10) {
      setSecondPhoneError(false);
      Keyboard.dismiss();
    }
  };

  const onpressSignup = () => {
    if (phone === '') {
      setPhoneError(true);
      setSecondPhoneError(false);
    } else if (phone.length < 10) {
      setSecondPhoneError(true);
      setPhoneError(false);
    } else {
      setPhone('');
      setPhoneError(false);
      setSecondPhoneError(false);
      navigation.navigate('EnterDetail', {userPhoneNumber: phone});
    }
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{flex: 1}}>
        <Header title={Strings.createAnAccount} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}>
          <ScrollView contentContainerStyle={{flex: 1}}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                marginTop: Platform.OS === 'ios' ? 0 : 15,
              }}>
              <View style={styles.container}>
                <View style={styles.signUpContainer}>
                  <Text style={styles.label}>{Strings.phoneNumber}</Text>
                  <TouchableOpacity
                    style={styles.signUpTextInputContainer}
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
                    style={styles.signUpTextInputStyle}
                  />
                </View>
                <View>
                  <View style={styles.bottomContainer}>
                    {phoneError ? (
                      <Text style={styles.signUpErrorText}>
                        {Validation.validNumber}
                      </Text>
                    ) : null}
                    {secondPhoneError ? (
                      <Text style={styles.signUpErrorText}>
                        {Validation.validNumberFormat}
                      </Text>
                    ) : null}
                    <Text style={styles.bottomText}>
                      {Strings.confirmNumber}
                    </Text>
                  </View>
                  <View>
                    <Button
                      title={Strings.next}
                      onPress={() => onpressSignup()}
                    />
                  </View>
                </View>
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
                    backdrop: {},
                    countryName: {
                      color: 'black',
                    },
                    dialCode: {
                      color: 'black',
                    },
                  }}
                />
              )}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CreateAccountByPhone;
