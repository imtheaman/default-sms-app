import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Modal,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
  Alert,
  Image,
  FlatList,
  Keyboard,
  Pressable,
} from 'react-native';
import { styles } from './style';
import FloatingLabelInput from '../../components/floatLabelInput';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import DatePicker from 'react-native-date-picker';
import GenderOptionModal from '../../components/genderModal';
import { FontFamily } from '../../constant/Fonts';
import Strings from '../../constant/Strings';
import Header from '../../components/header';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/loadingIndicator';
import {
  editTalentProfileApi,
  updateTalentUserProfile,
} from '../../redux/slices/profileScreenSlice';
import axios from 'axios';
import { baseURL } from '../../constant/Config';
import { UPDATE_TALENT_PROFILE } from '../../api/EndPoints';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetTalentRoleApiData } from '../../redux/slices/authSlice';
import { Validation } from '../../constant/validation';

const Width = Dimensions.get('window').width;
const EditDetailsScreen = ({ route }) => {
  const {
    getFirstName,
    getLastName,
    getDob,
    getGender,
    getPhoneNumber,
    getBio,
    getMaxRate,
    getMinRate,
    talentUserType,
    talentUserTypeName
  } = route.params;
  console.log('check talent role here-=-=-=-=-=-=-=-', talentUserTypeName);
  const initialDate = getDob ? new Date(getDob) : date;
  // console.log('check first and last name here -=-=--=', getFirstName, getLastName);
  const [date, setDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [genderModal, setGenderModal] = useState(false);
  const [genderValue, setGenderValue] = useState(getGender || null);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [firstName, setFirstName] = useState(getFirstName || '');
  const [lastName, setLastName] = useState(getLastName || '');
  // const [talentRole, setTalentRole] = useState(talentUserTypeName || '');
  const [talentRole, setTalentRole] = useState({});

  const [address, setAddress] = useState('');
  const [bio, setBio] = useState(getBio || '');
  const [homeLocation, setHomeLocation] = useState('');
  const [rate, setRate] = useState(getMaxRate || '');
  const [collegeName, setCollegeName] = useState(getMinRate || '');
  const [yearGard, setYearGrad] = useState('');
  const [awardName, setAwardName] = useState('');
  const [yearAward, setYearAward] = useState('');
  const [filmForAwarded, setFilmForAwarded] = useState('');
  const [loading, setLoading] = useState(false);

  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameErrorText, setFirstNameErrorText] = useState('');

  const [lastNameError, setlastNameError] = useState(false);
  const [lastNameErrorText, setlastNameErrorText] = useState('');

  const [dobError, setDobError] = useState(false);

  const [genderError, setGenderError] = useState(false);

  const [talentError, setTalentError] = useState(false);
  const [talentErrorText, setTalentErrorText] = useState('');

  const [bioError, setBioError] = useState(false);
  const [bioErrorText, setBioErrorText] = useState('');

  const [maxRateError, setMaxRateError] = useState(false);
  const [maxRateErrorText, setMaxRateErrorText] = useState('');

  const [minRateError, setMinRateError] = useState(false);
  const [minRateErrorText, setMinRateErrorText] = useState('');

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const talentRoleRef = useRef(null);
  const addressRef = useRef(null);
  const bioRef = useRef(null);
  const homeLocationRef = useRef(null);
  const rateShootRef = useRef(null);
  const collegeRef = useRef(null);
  const yearGraduationRef = useRef(null);
  const awardsRef = useRef(null);
  const yearAwardRef = useRef(null);
  const filmForAwardRef = useRef(null);

  const searchTextInputRef = useRef(null);

  const userRole = useSelector(state => state.user.role);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('Updated user role-------------------->>', userRole);
  }, [userRole]);

  useEffect(() => {
    getTalentRoleApi();
    console.log('Value Check for Talent&^&^&^&^^&^&^& DATA======', talentData);
  }, []);

  const talentData = useSelector(state => state.api.talentRoleData.data);

  //=====================GET-TALENT-ROLE-API====================//
  const getTalentRoleApi = async () => {
    setLoading(true);
    const data_type = 'profession';
    console.log('check talent ID here-==-=-=-=-=->>', data_type);
    dispatch(GetTalentRoleApiData(data_type))
      .then(action => {
        if (action.type === 'talentRoleApiGet/fulfilled') {
          console.log(
            'Get Talent Role API Success:----------->',
            action.payload,
          );
          setLoading(false);
        } else {
          console.error('Get Talent Role API Error:----------->', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  //=====================Update-Talent-Profile-API====================//

  const onEditProfile = () => {
    let formattedDate = '';
    if (selectedDate && selectedDate instanceof Date && !isNaN(selectedDate)) {
      formattedDate = formatDate(selectedDate);
    } else {
      const today = new Date();
      formattedDate = 'DD-MM-YYYY';
    }
    setLoading(true);
    const postData = {
      first_name: firstName,
      last_name: lastName,
      dob: formattedDate,
      gender: genderValue,
      profession_id: talentRole,
      bio: bio,
      max_rate: rate,
      min_rate: collegeName,
    };
    dispatch(editTalentProfileApi(postData))
      .then(action => {
        if (action.type === 'editProfile/fulfilled') {
          console.log('edit Profile API Success:----------->', action);
          setLoading(false);
          AsyncStorage.setItem('userFirstName', firstName)
          navigation.goBack();
        } else {
          Alert.alert('API failed please try again ');
          console.error('edit profile API Error:----------->', action);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  // const updatTalentProfileApi = () => {
  //   setLoading(true);
  //   const postData = {
  //     first_name: firstName,
  //     last_name: lastName,
  //     dob: selectedDate,
  //     gender: genderValue,
  //     profession_id: talentRole,
  //     bio: bio,
  //     max_rate: rate,
  //     min_rate: collegeName,
  //   };
  //   dispatch(updateTalentUserProfile(postData))
  //     .then(action => {
  //       if (action.type === 'updateProfile/fulfilled') {
  //         console.log(
  //           'Update Talent profile Post API Success:----------->',
  //           action.payload,
  //         );
  //         setLoading(false);
  //         navigation.goBack();
  //       } else {
  //         console.error(
  //           'Update Talent profile Post API Error:----------->',
  //           action.error,
  //         );
  //         setLoading(false);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Dispatch Error:', error);
  //       setLoading(false);
  //     });
  // };

  const onUpdateTalentProfile = () => {
    if (firstName === '') {
      setFirstNameError(true);
      setFirstNameErrorText(Validation.FirstNameError);
    } else if (lastName === '') {
      setlastNameError(true);
      setlastNameErrorText(Validation.LastNameError);
    } else if (selectedDate === '') {
      setDobError(true);
    } else if (genderValue === null) {
      setGenderError(true);
    } else if (talentRole === '') {
      setTalentError(true);
      setTalentErrorText(Validation.talentRoleError);
    } else if (bio === '') {
      setBioError(true);
      setBioErrorText(Validation.bioError);
    } else if (rate === '') {
      setMaxRateError(true);
      setMaxRateErrorText(Validation.maxRateError);
    } else if (collegeName === '') {
      setMinRateError(true);
      setMinRateErrorText(Validation.minRateError);
    } else {
      onEditProfile();
    }
  };

  const focusNextInput = nextInputRef => {
    nextInputRef && nextInputRef.current && nextInputRef.current.focus();
  };

  useEffect(() => {
    focusNextInput(firstNameRef);
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openGenderModal = () => {
    setGenderModal(true);
  };

  const closeGenderModal = () => {
    setGenderModal(false);
  };

  const handleGenderSelect = gender => {
    setGenderValue(gender);
    setGenderModal(false);
    setGenderError(false);
  };
  const onDateChange = selectedDate => {
    setSelectedDate(selectedDate);
    if (selectedDate !== '') {
      setDobError(false);
    }
  };

  const handleOK = () => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    closeModal();
  };

  const onchangeFirstName = text => {
    setFirstName(text);
    if (text !== '') {
      setFirstNameError(false);
    }
  };

  const onchangeLastName = text => {
    setLastName(text);
    if (text !== '') {
      setlastNameError(false);
    }
  };

  const onchangeTalentRole = text => {
    setTalentRole(text);
  };

  const onchangeAddress = text => {
    setAddress(text);
  };

  const onchangeBio = text => {
    setBio(text);
    if (text !== '') {
      setBioError(false);
    }
  };

  const onchangeHomeLocation = text => {
    setHomeLocation(text);
  };

  const onchangeRate = text => {
    setRate(text);
    if (text !== '') {
      setMaxRateError(false);
    }
  };

  const onchangeCollegeName = text => {
    setCollegeName(text);
    if (text !== '') {
      setMinRateError(false);
    }
  };

  const onchangeYearGraduation = text => {
    setYearGrad(text);
  };

  const onchangeAwards = text => {
    setAwardName(text);
  };

  const onchangeYearAward = text => {
    setYearAward(text);
  };

  const onchangeFilmForAward = text => {
    setFilmForAwarded(text);
  };

  const formatDate = date => {
    const d = new Date(date);
    const year = d.getFullYear();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [day, month, year].join('-');
  };

  // const updateFilterdTalents = newTalentData => {
  //   if (newTalentData !== null) {
  //     setFilteredTalent(talentData);
  //   }
  // };

  // useEffect(() => {
  //   console.log('Value Check for Talent&^&^&^&^^&^&^& DATA======', talentData);
  //   updateFilterdTalents(talentData);
  // }, [talentData]);

  useEffect(() => {
    getTalentRoleApi();
  }, []);

  useEffect(() => {
    if (talentData && talentData.length > 0) {
      setTalentRole(talentData[0]);
    }
  }, [talentData]);


  const [searchTalentInput, setSearchTalentInput] = useState('');
  const [filteredTalent, setFilteredTalent] = useState();
  const [isTalentModal, setIsTalentModal] = useState(false);

  const onSelectTalent = selectTalent => {
    setTalentRole(selectTalent);
    setIsTalentModal(false);
  };

  const onCloseLocation = () => {
    setIsTalentModal(false);
  };

  useEffect(() => {
    if (isTalentModal) {
      focusNextInput(searchTextInputRef);
    }
  }, [isTalentModal]);

  const TalentRoleModal = () => {
    const onChangeHandle = text => {
      setSearchTalentInput(text);
      let prevState = talentData;
      const filtered = text
        ? prevState.filter(state =>
          state.name.toLowerCase().includes(text.toLowerCase()),
        )
        : prevState;
      setFilteredTalent(filtered);
    };

    const LocationRenderItem = ({ item, index }) => {
      const handleTalentSelection = item => {
        onSelectTalent(item);
        setFilteredTalent(talentData);
        Keyboard.dismiss();
        setTalentError(false);
      };
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            height: 'auto',
            borderColor: '#545458A6',
            borderBottomWidth: 0.5,
            backgroundColor: '#FFFFFF',
            paddingVertical: 10,
          }}
          onPress={() => handleTalentSelection(item)}>
          <View>
            <Text
              style={{
                color: '#000000',
                fontSize: 17,
                fontFamily: FontFamily.regular,
                lineHeight: 28,
                textAlign: 'center',
              }}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <Modal animationType="slide" transparent={true} visible={isTalentModal}>
        <Pressable
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '90%',
              height: '60%',
              backgroundColor: '#ffffff',
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'gray',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
                borderRadius: 15,
                right: 10,
                top: 6,
              }}
              onPress={() => onCloseLocation()}>
              <Image
                source={require('../../assets/images/xmark.png')}
                style={{ tintColor: '#ffffff' }}
              />
            </TouchableOpacity>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : null}>
              <View
                style={{
                  flexDirection: 'row',
                  borderRadius: 40,
                  borderColor: 'white',
                  backgroundColor: '#76768026',
                  alignItems: 'center',
                  height: 44,
                  marginVertical: 12,
                  marginHorizontal: 10,
                }}>
                <Image
                  style={{
                    width: 18,
                    height: 18,
                    alignSelf: 'center',
                    tintColor: 'grey',
                    marginLeft: 15,
                  }}
                  source={require('../../assets/images/searchBar.png')}
                />
                <TextInput
                  ref={searchTextInputRef}
                  placeholder={'Search Talent...'}
                  value={searchTalentInput}
                  placeholderTextColor={'grey'}
                  style={{
                    color: '#000000',
                    fontSize: 16,
                    width: '90%',
                    justifyContent: 'center',
                    fontFamily: FontFamily.regular,
                    paddingHorizontal: 10,
                  }}
                  onChangeText={txt => onChangeHandle(txt)}
                />
              </View>
            </KeyboardAvoidingView>
            <View style={{ flex: 1 }}>
              <FlatList
                data={filteredTalent}
                keyExtractor={item => item.id}
                renderItem={LocationRenderItem}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </Pressable>
      </Modal>
    );
  };

  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          title={Strings.editDetails}
          type={'headerIcon'}
          navigation={navigation}
        />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.keyBoardAvoidCntainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                marginTop: Platform.OS === 'ios' ? 0 : 15,
              }}>
              <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={closeModal}>
                <TouchableWithoutFeedback onPress={closeModal}>
                  <View style={styles.modalContainer}>
                    <View style={styles.pickerContainer}>
                      <DatePicker
                        date={selectedDate || date}
                        mode={Strings.date}
                        onDateChange={onDateChange}
                        textColor='black'
                        maximumDate={new Date()}
                      />
                      <TouchableOpacity
                        style={styles.datePickerOkContainer}
                        onPress={handleOK}>
                        <Text style={styles.okText}>{Strings.okText}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
              <View style={styles.container}>
                <View style={{ marginVertical: 20 }}>
                  <FloatingLabelInput
                    ref={firstNameRef}
                    label={Strings.firstName}
                    value={firstName}
                    onChangeText={text => {
                      onchangeFirstName(text);
                    }}
                    onSubmitEditing={() => focusNextInput(lastNameRef)}
                    showError={firstNameError}
                    error={firstNameErrorText}
                  />
                </View>
                <View style={{ marginVertical: 20 }}>
                  <FloatingLabelInput
                    ref={lastNameRef}
                    label={Strings.lastName}
                    value={lastName}
                    onChangeText={text => {
                      onchangeLastName(text);
                    }}
                    onSubmitEditing={() => focusNextInput(talentRoleRef)}
                    showError={lastNameError}
                    error={lastNameErrorText}
                  />
                </View>
                <TouchableOpacity
                  style={styles.dateContainer}
                  onPress={() => openModal()}>
                  <View style={[styles.inputContainer]}>
                    <Text style={styles.label}>{Strings.dob}</Text>
                    <Text style={styles.inputStyle}>{selectedDate ? formatDate(selectedDate) : 'DD-MMM-YYYY'}</Text>

                    {/* <TextInput
                      style={styles.inputStyle}
                      value={
                        selectedDate ? formatDate(selectedDate) : 'DD-MMM-YYYY'
                      }
                      editable={false}
                    /> */}
                  </View>
                  {dobError && (
                    <Text style={styles.DobErrorText}>
                      {'Please select date of birth'}
                    </Text>
                  )}
                </TouchableOpacity>
                {genderModal && (
                  <GenderOptionModal
                    modalVisible={genderModal}
                    closeModal={closeGenderModal}
                    onGenderSelect={handleGenderSelect}
                  />
                )}

                <View style={styles.dateContainer}>
                  <TouchableOpacity
                    onPress={() => openGenderModal()}
                    style={[styles.inputContainer]}>
                    <Text style={styles.label}>{Strings.gender}</Text>
                    <Text style={styles.inputStyle}>{genderValue ? genderValue : Strings.select}</Text>
                    {/* <TextInput
                      style={styles.inputStyle}
                      value={genderValue ? genderValue : Strings.select}
                      editable={false}
                    /> */}
                  </TouchableOpacity>
                  {genderError && (
                    <Text style={styles.DobErrorText}>
                      {'Please select gender'}
                    </Text>
                  )}
                </View>

                {/* <View style={{ marginVertical: 20 }}>
                  <TouchableOpacity
                    onPress={() => setIsTalentModal(!isTalentModal)}>
                    <FloatingLabelInput
                      ref={talentRoleRef}
                      label={Strings.talentRole}
                      value={talentRole}
                      editable={false}
                      onChangeText={text => {
                        onchangeTalentRole(text);
                      }}
                      onSubmitEditing={() =>
                        focusNextInput(
                          userRole === 'Producer' ? addressRef : bioRef,
                        )
                      }
                      showError={talentError}
                      error={talentErrorText}
                    />
                  </TouchableOpacity>
                </View> */}
                <View style={styles.dateContainer}>
                  <TouchableOpacity
                    onPress={() => setIsTalentModal(!isTalentModal)}
                    style={[styles.inputContainer]}>
                    <Text style={styles.label}>{Strings.talentRole}</Text>
                    {/* <TouchableOpacity style={{
                      backgroundColor: "blue", fontSize: 14,
                      color: '#E6E0E9',
                      // width: 140,
                      // padding: 14,
                      fontFamily: FontFamily.regular,
                      backgroundColor: 'red',
                      left: 10
                    }}> */}
                    <Text style={styles.inputStyle}>{talentRole.name}</Text>
                    {/* <TextInput
                        style={styles.inputStyle}
                        value={talentRole.name}
                        editable={false}
                        onChangeText={text => {
                          onchangeTalentRole(text);
                        }}
                      /> */}
                    {/* </TouchableOpacity> */}
                  </TouchableOpacity>
                  {talentError && (
                    <Text style={styles.DobErrorText}>
                      {Validation.talentRoleError}
                    </Text>
                  )}
                </View>
                {isTalentModal && TalentRoleModal()}
                {userRole === 'Producer' && (
                  <>
                    <View style={{ marginVertical: 20 }}>
                      <FloatingLabelInput
                        ref={addressRef}
                        label={Strings.address}
                        value={address}
                        onChangeText={text => {
                          onchangeAddress(text);
                        }}
                      />
                    </View>
                    <View style={{ marginVertical: 20 }}>
                      <FloatingLabelInput
                        label={Strings.phoneNumber}
                        value={'9876543210'}
                        onChangeText={() => { }}
                        editable={false}
                      />
                    </View>
                  </>
                )}

                {userRole === 'Talent' && (
                  <>
                    <View style={{ marginVertical: 20 }}>
                      <FloatingLabelInput
                        ref={bioRef}
                        label={'Bio'}
                        value={bio}
                        onChangeText={text => {
                          onchangeBio(text);
                        }}
                        onSubmitEditing={() => focusNextInput(homeLocationRef)}
                        showError={bioError}
                        error={bioErrorText}
                      />
                    </View>
                    {/* <FloatingLabelInput
                  ref={homeLocationRef}
                  label={'Home Location'}
                  value={homeLocation}
                  onChangeText={text => {
                    onchangeHomeLocation(text);
                  }}
                  onSubmitEditing={() => focusNextInput(rateShootRef)}
                /> */}
                    <View style={{ marginVertical: 20 }}>
                      <FloatingLabelInput
                        ref={rateShootRef}
                        label={'Max Rate'}
                        value={rate}
                        onChangeText={text => {
                          onchangeRate(text);
                        }}
                        onSubmitEditing={() => focusNextInput(collegeRef)}
                        showError={maxRateError}
                        error={maxRateErrorText}
                      />
                    </View>
                    <View style={{ marginVertical: 20 }}>
                      <FloatingLabelInput
                        ref={collegeRef}
                        label={'Min Rate'}
                        value={collegeName}
                        onChangeText={text => {
                          onchangeCollegeName(text);
                        }}
                        onSubmitEditing={() =>
                          focusNextInput(yearGraduationRef)
                        }
                        showError={minRateError}
                        error={minRateErrorText}
                      />
                    </View>
                    {/* <FloatingLabelInput
                  ref={yearGraduationRef}
                  label={'Year of graduation'}
                  value={yearGard}
                  onChangeText={text => {
                    onchangeYearGraduation(text);
                  }}
                  onSubmitEditing={() => focusNextInput(awardsRef)}
                />
                <FloatingLabelInput
                  ref={awardsRef}
                  label={'Awards'}
                  value={awardName}
                  onChangeText={text => {
                    onchangeAwards(text);
                  }}
                  onSubmitEditing={() => focusNextInput(yearAwardRef)}
                />
                <FloatingLabelInput
                  ref={talentRoleRef}
                  label={'Year of award'}
                  value={yearAward}
                  onChangeText={text => {
                    onchangeYearAward(text);
                  }}
                  onSubmitEditing={() => focusNextInput(filmForAwardRef)}
                />
                <FloatingLabelInput
                  ref={filmForAwardRef}
                  label={'Film for which awarded'}
                  value={filmForAwarded}
                  onChangeText={text => {
                    onchangeFilmForAward(text);
                  }}
                /> */}
                  </>
                )}
                <View>
                  <Button
                    title={Strings.update}
                    onPress={() => onUpdateTalentProfile()}
                  />
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

export default EditDetailsScreen;
