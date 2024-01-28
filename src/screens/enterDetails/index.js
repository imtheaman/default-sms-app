import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Alert,
  Pressable,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import FloatingLabelInput from '../../components/floatLabelInput';
import GenderOptionModal from '../../components/genderModal';
import Header from '../../components/header';
import {FontFamily} from '../../constant/Fonts';
import Strings from '../../constant/Strings';
import {
  GetPinCodeApiData,
  GetStateApiData,
  GetTalentRoleApiData,
  GetdistrictApiData,
} from '../../redux/slices/authSlice';
import {styles} from './style';
import {Validation} from '../../constant/validation';
import Loading from '../../components/loadingIndicator';

const Width = Dimensions.get('window').width;
const EnterDetailsScreen = ({route}) => {
  const countryId = '1e0f1fa4-3b41-48fe-942f-a4142e92eb67';
  const dispatch = useDispatch();

  const stateData = useSelector(state => state.api.stateData.data);
  const districtData = useSelector(state => state.api.districtData.data);
  const pinCodeData = useSelector(state => state.api.pinCodeData.data);
  const talentData = useSelector(state => state.api.talentRoleData.data);

  const [date, setDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [genderModal, setGenderModal] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [talentRole, setTalentRole] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [selectlandmark, setSelectLandmark] = useState('');
  const [selectCity, setSelectCity] = useState('');
  const [selectPinCode, setSelectPinCode] = useState('');
  const [selectDistrict, setSelectDistrict] = useState('');
  const [selectState, setSelectState] = useState('');
  const [filteredStates, setFilteredStates] = useState();
  const [filteredTalent, setFilteredTalent] = useState();
  const [filteredDistricts, setFilterDistricts] = useState();
  const [filteredPinCode, setFilterPinCode] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [districtModalVisible, setDistrictModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchDistrictInput, setSearchDistrictInput] = useState('');
  const [searchPinInput, setSearchPinInput] = useState('');
  const [searchTalentInput, setSearchTalentInput] = useState('');
  const [isTalentModal, setIsTalentModal] = useState(false);
  const [isPinModal, setIsPinModal] = useState(false);

  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameErrorText, setFirstNameErrorText] = useState('');

  const [lastNameError, setlastNameError] = useState(false);
  const [lastNameErrorText, setlastNameErrorText] = useState('');

  const [dobError, setDobError] = useState(false);

  const [genderError, setGenderError] = useState(false);

  const [talentError, setTalentError] = useState(false);
  const [talentErrorText, setTalentErrorText] = useState('');

  const [address1Error, setAddress1Error] = useState(false);
  const [address1ErrorText, setAddress1ErrorText] = useState('');

  const [address2Error, setAddress2Error] = useState(false);
  const [address2ErrorText, setAddress2ErrorText] = useState('');

  const [landmarkError, setLandmarkError] = useState(false);
  const [landmarkErrorText, setLandmarkErrorText] = useState('');

  const [cityError, setCityError] = useState(false);
  const [cityErrorText, setCityErrorText] = useState('');

  const [stateError, setStateError] = useState(false);
  const [stateErrorText, setStateErrorText] = useState('');

  const [districtError, setDistrictError] = useState(false);
  const [districtErrorText, setDistrictErrorText] = useState('');

  const [pinCodeError, setPinCodeError] = useState(false);
  const [pinCodeErrorText, setPinCodeErrorText] = useState('');

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const talentRoleRef = useRef(null);
  const address1Ref = useRef(null);
  const address2Ref = useRef(null);
  const landmarkRef = useRef(null);
  const cityRef = useRef(null);
  const districtRef = useRef(null);
  const pinCodeRef = useRef(null);
  const stateRef = useRef(null);
  const stateSearchInputRef = useRef(null);
  const searchTextInputRef = useRef(null);
  const districtTextInputRef = useRef(null);
  const pinTextTnputRef = useRef(null);

  const focusNextInput = nextInputRef => {
    nextInputRef && nextInputRef.current && nextInputRef.current.focus();
  };

  const {userPhoneNumber} = route.params;

  useEffect(() => {
    focusNextInput(firstNameRef);
  }, []);

  useEffect(() => {
    getStateApi();
    console.log('chec here state data-=-=->>', stateData);
  }, []);

  useEffect(() => {
    getTalentRoleApi();
    console.log('Value Check for Talent&^&^&^&^^&^&^& DATA======', talentData);
  }, []);

  const updateFilteredStates = newStateData => {
    if (newStateData !== null) {
      setFilteredStates(newStateData);
    }
  };

  useEffect(() => {
    console.log('Value Check for sTATE++++++ DATA', stateData);
    updateFilteredStates(stateData);
  }, [stateData]);

  const updateFilterdTalents = newTalentData => {
    if (newTalentData !== null) {
      setFilteredTalent(talentData);
    }
  };

  useEffect(() => {
    console.log('Value Check for Talent&^&^&^&^^&^&^& DATA======', talentData);
    updateFilterdTalents(talentData);
  }, [talentData]);

  const updateFilteredDistrict = newDistrictData => {
    if (newDistrictData !== null) {
      setFilterDistricts(districtData);
    }
  };

  useEffect(() => {
    console.log('Value Check for District++++++', districtData);
    updateFilteredDistrict(districtData);
  }, [districtData]);

  const updateFilteredPinCode = newPinCodeData => {
    if (newPinCodeData !== null) {
      setFilterPinCode(pinCodeData);
    }
  };

  useEffect(() => {
    console.log('Value Check for District++++++', pinCodeData);
    updateFilteredPinCode(pinCodeData);
  }, [pinCodeData]);

  //=====================GET-PIN-CODE-API====================//
  const getPinCodeApi = async text => {
    setLoading(true);
    const queryParams = {
      q: text,
    };
    dispatch(GetPinCodeApiData(queryParams))
      .then(action => {
        if (action.type === 'pinCodeGet/fulfilled') {
          console.log(
            'Get Pincode API Success:==============>',
            action.payload,
          );
          setLoading(false);
        } else {
          Alert.alert(
            (action.payload.message ),
        );  
          console.error('Get Pincode API Error:==============>', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  //=====================GET-DISTRICT-API====================//
  const getDistrictApi = async text => {
    setLoading(true);
    const queryParams = {
      q: text,
    };
    dispatch(GetdistrictApiData(queryParams))
      .then(action => {
        if (action.type === 'districtGet/fulfilled') {
          console.log(
            'Get District API Success:==============>',
            action.payload,
          );
          setLoading(false);
        } else {
          Alert.alert(
            (action.payload.message ),
        );            console.error('Get District API Error:==============>', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  //=====================GET-STATE-API====================//
  const getStateApi = async () => {
    setLoading(true);
    const countryId = '1e0f1fa4-3b41-48fe-942f-a4142e92eb67';
    console.log('check user ID here-==-=-=-=-=->>', countryId);
    dispatch(GetStateApiData(countryId))
      .then(action => {
        if (action.type === 'stateApiGet/fulfilled') {
          console.log('Get State API Success:----------->', action.payload);
          setLoading(false);
        } else {
          Alert.alert(
            (action.payload.message ),
        );            console.error('Get State API Error:----------->', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

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
          Alert.alert(
            (action.payload.message ),
        );            console.error('Get Talent Role API Error:----------->', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

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
    if (text !== '') {
      setTalentError(false);
    }
  };

  const onchangeAddress = text => {
    setAddress1(text);
    if (text !== '') {
      setAddress1Error(false);
    }
  };

  const onchangeAddressTwo = text => {
    setAddress2(text);
    if (text !== '') {
      setAddress2Error(false);
    }
  };

  const onChangeLandmark = text => {
    setSelectLandmark(text);
    if (text !== '') {
      setLandmarkError(false);
    }
  };

  const onChangeCity = text => {
    setSelectCity(text);
    if (text !== '') {
      setCityError(false);
    }
  };

  const onChangePinCode = text => {
    setSelectPinCode(text);
    if (text !== '') {
      setPinCodeError(false);
    }
  };

  const onChangeDistrict = text => {
    setSelectDistrict(text);
    if (text !== '') {
      setDistrictError(false);
    }
  };

  const onChangeState = text => {
    setSelectState(text);
    if (text !== '') {
      setStateError(false);
    }
  };

  const onSelectState = selectedState => {
    setSelectState(selectedState);
    setIsModalVisible(false);
  };

  const onSelectTalent = selectTalent => {
    setTalentRole(selectTalent);
    setIsTalentModal(false);
  };

  const onSelectDistrct = selectedDistrict => {
    setSelectDistrict(selectedDistrict);
    setDistrictModalVisible(false);
  };

  const onSelectPinCode = selectedPinCode => {
    setSelectPinCode(selectedPinCode);
    setIsPinModal(false);
  };

  const onCloseLocation = () => {
    setIsModalVisible(false);
    setDistrictModalVisible(false);
    setSearchInput('');
    setFilteredStates(stateData);
    setSearchDistrictInput('');
    setIsPinModal(false);
    setIsTalentModal(false);
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

  const onSignUp = () => {
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
    } else if (address1 === '') {
      setAddress1Error(true);
      setAddress1ErrorText(Validation.address1Error);
    } else if (address2 === '') {
      setAddress2Error(true);
      setAddress2ErrorText(Validation.address2Error);
    } else if (selectlandmark === '') {
      setLandmarkError(true);
      setLandmarkErrorText(Validation.landmarkError);
    } else if (selectCity === '') {
      setCityError(true);
      setCityErrorText(Validation.cityError);
    } else if (selectPinCode === '') {
      setPinCodeError(true);
      setPinCodeErrorText(Validation.pinCodeError);
    } else if (selectState === '') {
      setStateError(true);
      setStateErrorText(Validation.stateError);
    } else if (selectDistrict === '') {
      setDistrictError(true);
      setDistrictErrorText(Validation.districtError);
    } else {
      setFirstNameErrorText('');
      setlastNameErrorText('');
      setDobError(false);
      setGenderError(false);
      setTalentErrorText('');
      setAddress1ErrorText('');
      setAddress2ErrorText('');
      setLandmarkErrorText('');
      setCityErrorText('');
      setPinCodeErrorText('');
      setStateErrorText('');
      setDistrictErrorText('');
      let formattedDate = '';
      if (
        selectedDate &&
        selectedDate instanceof Date &&
        !isNaN(selectedDate)
      ) {
        formattedDate = formatDate(selectedDate);
      } else {
        const today = new Date();
        formattedDate = 'DD-MM-YYYY';
      }
      navigation.navigate('ConfirmDetail', {
        userNumber: userPhoneNumber,
        userFirstName: firstName,
        userLastName: lastName,
        userDob: formattedDate,
        userGender: genderValue,
        userTalent: talentRole,
        userAddress1: address1,
        userAddress2: address2,
        userLandMark: selectlandmark,
        userCity: selectCity,
        userDistrict: selectDistrict,
        userState: selectState,
        userPincode: selectPinCode,
        userCountry: countryId,
      });
    }
  };

  useEffect(() => {
    if (isModalVisible || isTalentModal || districtModalVisible || isPinModal) {
      focusNextInput(stateSearchInputRef);
      focusNextInput(searchTextInputRef);
      focusNextInput(districtTextInputRef);
      focusNextInput(pinTextTnputRef);
    }
  }, [isModalVisible, isTalentModal, districtModalVisible, isPinModal]);

  const LocationModal = () => {
    const onChangeHandle = text => {
      setSearchInput(text);
      let prevState = stateData;
      const filtered = text
        ? prevState.filter(state =>
            state.name.toLowerCase().includes(text.toLowerCase()),
          )
        : prevState;
      setFilteredStates(filtered);
    };

    const LocationRenderItem = ({item, index}) => {
      const handleStateSelection = item => {
        onSelectState(item);
        setSearchInput('');
        setFilteredStates(stateData);
        Keyboard.dismiss();
        setStateError(false);
      };
      return (
        <TouchableOpacity
          style={styles.renderContainer}
          onPress={() => handleStateSelection(item)}>
          <View>
            <Text style={styles.renderText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <Pressable style={styles.locationModalContainer}>
          <View style={styles.modalListContainer}>
            <TouchableOpacity
              style={styles.closeImageContainer}
              hitSlop={{left: 10, bottom: 10, right: 10, top: 10}}
              onPress={() => onCloseLocation()}>
              <Image
                source={require('../../assets/images/xmark.png')}
                style={styles.closeImgStyle}
              />
            </TouchableOpacity>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : null}>
              <View style={styles.searchContainer}>
                <Image
                  style={styles.searchBarImgStyle}
                  source={require('../../assets/images/searchBar.png')}
                />
                <TextInput
                  ref={stateSearchInputRef}
                  placeholder={'Search State...'}
                  value={searchInput}
                  placeholderTextColor={'grey'}
                  style={styles.searchInputStyle}
                  onChangeText={txt => onChangeHandle(txt)}
                />
              </View>
            </KeyboardAvoidingView>
            <View style={{flex: 1}}>
              <FlatList
                data={filteredStates}
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

    const LocationRenderItem = ({item, index}) => {
      const handleTalentSelection = item => {
        onSelectTalent(item);
        setSearchInput('');
        setFilteredTalent(talentData);
        Keyboard.dismiss();
        setTalentError(false);
      };
      return (
        <TouchableOpacity
          style={styles.renderContainer}
          onPress={() => handleTalentSelection(item)}>
          <View>
            <Text style={styles.renderText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <Modal animationType="slide" transparent={true} visible={isTalentModal}>
        <Pressable style={styles.locationModalContainer}>
          <View style={styles.modalListContainer}>
            <TouchableOpacity
              style={styles.closeImageContainer}
              hitSlop={{left: 10, bottom: 10, right: 10, top: 10}}
              onPress={() => onCloseLocation()}>
              <Image
                source={require('../../assets/images/xmark.png')}
                style={styles.closeImgStyle}
              />
            </TouchableOpacity>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : null}>
              <View style={styles.searchContainer}>
                <Image
                  style={styles.searchBarImgStyle}
                  source={require('../../assets/images/searchBar.png')}
                />
                <TextInput
                  ref={searchTextInputRef}
                  placeholder={'Search Talent...'}
                  value={searchTalentInput}
                  placeholderTextColor={'grey'}
                  style={styles.searchInputStyle}
                  onChangeText={txt => onChangeHandle(txt)}
                />
              </View>
            </KeyboardAvoidingView>
            <View style={{flex: 1}}>
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

  const LocationDistrictModal = () => {
    const onChangeHandle = text => {
      setSearchDistrictInput(text);
      getDistrictApi(text);
    };
    const LocationRenderItem = ({item, index}) => {
      const handleDistrictSelection = item => {
        onSelectDistrct(item);
        setSearchDistrictInput('');
        Keyboard.dismiss();
        setDistrictError(false);
        setFilterDistricts();
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
          onPress={() => handleDistrictSelection(item)}>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={districtModalVisible}>
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
              hitSlop={{left: 10, bottom: 10, right: 10, top: 10}}
              onPress={() => onCloseLocation()}>
              <Image
                source={require('../../assets/images/xmark.png')}
                style={{tintColor: '#ffffff'}}
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
                  ref={districtTextInputRef}
                  placeholder={'Search District...'}
                  value={searchDistrictInput}
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
            <View style={{flex: 1}}>
              <FlatList
                data={filteredDistricts}
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

  const LocationPinCodeModal = () => {
    const onChangeHandle = text => {
      setSearchPinInput(text);
      getPinCodeApi(text);
    };
    const LocationRenderItem = ({item, index}) => {
      const handlePinCodeSelection = item => {
        onSelectPinCode(item);
        setSearchPinInput('');
        Keyboard.dismiss();
        setPinCodeError(false);
        setFilterPinCode();
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
          onPress={() => handlePinCodeSelection(item)}>
          <View>
            <Text
              style={{
                color: '#000000',
                fontSize: 17,
                fontFamily: FontFamily.regular,
                lineHeight: 28,
                textAlign: 'center',
              }}>
              {item.pincode}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal animationType="slide" transparent={true} visible={isPinModal}>
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
                hitSlop={{left: 10, bottom: 10, right: 10, top: 10}}
                onPress={() => onCloseLocation()}>
                <Image
                  source={require('../../assets/images/xmark.png')}
                  style={{tintColor: '#ffffff'}}
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
                    ref={pinTextTnputRef}
                    placeholder={'Search Pincode...'}
                    value={searchPinInput}
                    placeholderTextColor={'grey'}
                    keyboardType="numeric"
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
              <View style={{flex: 1}}>
                <FlatList
                  data={filteredPinCode}
                  keyExtractor={item => item.id}
                  renderItem={LocationRenderItem}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </View>
          </Pressable>
        </Modal>
      </TouchableWithoutFeedback>
    );
  };

  const measureText = event => {
    const {width} = event.nativeEvent.layout;
    setGenderValue(width);
  };

  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{flex: 1}}>
        <Header title={Strings.enterDetails} />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.keyBoardAvoidCntainer}>
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
                        textColor="black"
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
                <View style={{marginVertical: 20}}>
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
                <View style={{marginVertical: 20}}>
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
                <View style={styles.dateContainer}>
                  <TouchableOpacity
                    onPress={() => openModal()}
                    style={[styles.inputContainer]}>
                    <Text style={styles.label}>{Strings.dob}</Text>
                    <View style={{width: 140}}>
                    <Text style={styles.inputStyle}>{ selectedDate ? formatDate(selectedDate) : 'DD-MM-YYYY'}</Text>
                      {/* <TextInput
                        style={styles.inputStyle}
                        value={
                          selectedDate ? formatDate(selectedDate) : 'DD-MM-YYYY'
                        }
                        editable={false}
                      /> */}
                    </View>
                  </TouchableOpacity>
                  {dobError && (
                    <Text style={styles.DobErrorText}>
                      {'Please select date of birth'}
                    </Text>
                  )}
                </View>

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
                    <View style={{width: 140}}>
                    <Text style={styles.inputStyle}>{ genderValue ? genderValue : Strings.select}</Text>

                      {/* <TextInput
                        style={styles.inputStyle}
                        value={genderValue ? genderValue : Strings.select}
                        editable={false}
                      /> */}
                    </View>
                  </TouchableOpacity>
                  {genderError && (
                    <Text style={styles.DobErrorText}>
                      {'Please select gender'}
                    </Text>
                  )}
                </View>
                <View style={styles.dateContainer}>
                  <TouchableOpacity
                    onPress={() => setIsTalentModal(!isTalentModal)}
                    style={[styles.inputContainer]}>
                    <Text style={styles.label}>{Strings.talentRole}</Text>
                    <View style={{width: 140}}>
                    <Text style={styles.inputStyle}>{talentRole.name}</Text>

                      {/* <TextInput
                        style={styles.inputStyle}
                        value={talentRole.name}
                        editable={false}
                        onChangeText={text => {
                          onchangeTalentRole(text);
                        }}
                      /> */}
                    </View>
                  </TouchableOpacity>
                  {talentError && (
                    <Text style={styles.DobErrorText}>
                      {Validation.talentRoleError}
                    </Text>
                  )}
                </View>
                {isTalentModal && TalentRoleModal()}
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    ref={address1Ref}
                    label={'Address Line 1'}
                    value={address1}
                    onChangeText={text => {
                      onchangeAddress(text);
                    }}
                    onSubmitEditing={() => focusNextInput(address2Ref)}
                    showError={address1Error}
                    error={address1ErrorText}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    ref={address2Ref}
                    label={'Address Line 2'}
                    value={address2}
                    onChangeText={text => {
                      onchangeAddressTwo(text);
                    }}
                    onSubmitEditing={() => focusNextInput(landmarkRef)}
                    showError={address2Error}
                    error={address2ErrorText}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    ref={landmarkRef}
                    label={'Landmark'}
                    value={selectlandmark}
                    onChangeText={text => {
                      onChangeLandmark(text);
                    }}
                    onSubmitEditing={() => focusNextInput(cityRef)}
                    showError={landmarkError}
                    error={landmarkErrorText}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    ref={cityRef}
                    label={'City'}
                    value={selectCity}
                    onChangeText={text => {
                      onChangeCity(text);
                    }}
                    onSubmitEditing={() => focusNextInput(pinCodeRef)}
                    showError={cityError}
                    error={cityErrorText}
                  />
                </View>
                <View style={styles.dateContainer}>
                  <TouchableOpacity
                    onPress={() => setIsPinModal(!isPinModal)}
                    style={[styles.inputContainer]}>
                    <Text style={styles.label}>{'Pin code'}</Text>
                    <View style={{width: 140}}>
                    <Text style={styles.inputStyle}>{selectPinCode.pincode}</Text>

                      {/* <TextInput
                        style={styles.inputStyle}
                        value={selectPinCode.pincode}
                        editable={false}
                        onChangeText={text => {
                          onChangePinCode(text);
                        }}
                      /> */}
                    </View>
                  </TouchableOpacity>
                  {pinCodeError && (
                    <Text style={styles.DobErrorText}>
                      {Validation.pinCodeError}
                    </Text>
                  )}
                </View>
                {isPinModal && LocationPinCodeModal()}
                <View style={styles.dateContainer}>
                  <TouchableOpacity
                    onPress={() => setIsModalVisible(!isModalVisible)}
                    style={[styles.inputContainer]}>
                    <Text style={styles.label}>{'State'}</Text>
                    <View>
                    <Text style={styles.inputStyle}>{selectState.name}</Text>

                      {/* <TextInput
                        style={styles.inputStyle}
                        value={selectState.name}
                        editable={false}
                        onChangeText={text => {
                          onChangeState(text);
                        }}
                      /> */}
                    </View>
                  </TouchableOpacity>
                  {stateError && (
                    <Text style={styles.DobErrorText}>
                      {Validation.stateError}
                    </Text>
                  )}
                </View>
                {isModalVisible && LocationModal()}
                <View style={styles.dateContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      setDistrictModalVisible(!districtModalVisible)
                    }
                    style={[styles.inputContainer]}>
                    <Text style={styles.label}>{'District'}</Text>
                    <View style={{width: 140}}>
                    <Text style={styles.inputStyle}>{selectDistrict.name}</Text>

                      {/* <TextInput
                        style={styles.inputStyle}
                        value={selectDistrict.name}
                        editable={false}
                        onChangeText={text => {
                          onChangeDistrict(text);
                        }}
                      /> */}
                    </View>
                  </TouchableOpacity>
                  {districtError && (
                    <Text style={styles.DobErrorText}>
                      {Validation.districtError}
                    </Text>
                  )}
                </View>
                {districtModalVisible && LocationDistrictModal()}
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    label={Strings.phoneNumber}
                    value={userPhoneNumber}
                    onChangeText={() => {}}
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

export default EnterDetailsScreen;
