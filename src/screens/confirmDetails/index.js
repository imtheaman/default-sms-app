import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Alert
} from 'react-native';
import Button from '../../components/Button';
import FloatingLabelInput from '../../components/floatLabelInput';
import Header from '../../components/header';
import Strings from '../../constant/Strings';
import {signUpApi} from '../../redux/slices/authSlice';
import {styles} from './style';
import {useDispatch} from 'react-redux';
import Loading from '../../components/loadingIndicator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfirmDetailsScreen = ({route}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    userNumber,
    userFirstName,
    userLastName,
    userDob,
    userGender,
    userTalent,
    userAddress1,
    userAddress2,
    userLandMark,
    userCity,
    userDistrict,
    userState,
    userPincode,
    userCountry,
  } = route.params;

  useEffect(() => {
    console.log(
      'hereee-=--=--===-=-==--=-=>>>>',
      userNumber,
      userFirstName,
      userLastName,
      userDob,
      userGender,
      userTalent,
      userAddress1,
      userAddress2,
      userLandMark,
      userCity,
      userDistrict,
      userState,
      userPincode,
      userCountry,
    );
  }, []);

  //=====================SignUpApi====================//
  const onSignUp = () => {
    // setLoading(true);
    const postData = {
      mobile_number: userNumber,
      first_name: userFirstName,
      last_name: userLastName,
      dob: userDob,
      gender: userGender,
      profession_id: userTalent.id,
      address: {
        address_line1: userAddress1,
        address_line2: userAddress2,
        landmark: userLandMark,
        city: userCity,
        pincode_id: userPincode.id,
        district_id: userDistrict.id,
        state_id: userState.id,
        country_id: userCountry,
      },
    };
    dispatch(signUpApi(postData))
      .then(action => {
        if (action.type === 'signUpPost/fulfilled') {
          console.log('SignUp Post API Success:----------->', action.payload);
          AsyncStorage.setItem('userFirstName', userFirstName)
          // setLoading(false);
          navigation.navigate('OtpScreen', {
            phone: userNumber,
          });
        } else {
          Alert.alert(
            (action.payload.message ),
        );            console.error('SignUp Post API Error:----------->', action.error);
          // setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        // setLoading(false);
      });
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{flex: 1}}>
        <Header title={Strings.confirmDetails} />

        <KeyboardAvoidingView style={styles.keyBoardAvoidCntainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                marginTop: Platform.OS === 'ios' ? 0 : 15,
              }}>
              <View style={styles.container}>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={Strings.firstName}
                    value={userFirstName}
                    onChangeText={() => {}}
                    editable={false}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={Strings.lastName}
                    value={userLastName}
                    onChangeText={() => {}}
                    editable={false}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={Strings.dob}
                    value={userDob}
                    onChangeText={() => {}}
                    editable={false}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={Strings.gender}
                    value={userGender}
                    onChangeText={() => {}}
                    editable={false}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={Strings.talentRole}
                    value={userTalent.name}
                    onChangeText={() => {}}
                    editable={false}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={'Address Line 1'}
                    value={userAddress1}
                    onChangeText={() => {}}
                    editable={false}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={'Address Line 2'}
                    value={userAddress2}
                    onChangeText={() => {}}
                    editable={false}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={'Landmark'}
                    value={userLandMark}
                    onChangeText={() => {}}
                    editable={false}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={'City'}
                    value={userCity}
                    onChangeText={() => {}}
                    editable={false}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={'Pin code'}
                    value={userPincode.pincode}
                    onChangeText={() => {}}
                    editable={false}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={'State'}
                    value={userState.name}
                    onChangeText={() => {}}
                    editable={false}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={'District'}
                    value={userDistrict.name}
                    onChangeText={() => {}}
                    editable={false}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={Strings.phoneNumber}
                    value={userNumber}
                    // onChangeText={() => { }}
                    editable={false}
                  />
                </View>
                <Text style={styles.bottomAnotherText}>
                  {Strings.confirmNumber}
                </Text>
                <View>
                  <Button title={Strings.next} onPress={() => onSignUp()} />
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

export default ConfirmDetailsScreen;
