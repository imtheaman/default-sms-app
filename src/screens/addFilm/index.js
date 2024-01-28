import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput,
  SafeAreaView,
  Modal,
  Alert,
  Pressable,
  TouchableWithoutFeedback,
  FlatList,
  Keyboard,
} from 'react-native';
import FloatingLabelInput from '../../components/floatLabelInput';
import {styles} from './style';
import Button from '../../components/Button';
import DocumentPicker from 'react-native-document-picker';
import Strings from '../../constant/Strings';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../../components/header';
import {
  AddProducerShowReel,
  AddTalentShowReel,
} from '../../redux/slices/profileScreenSlice';
import {Validation} from '../../constant/validation';
import Loading from '../../components/loadingIndicator';
import DatePicker from 'react-native-date-picker';
import {GetIndustryTypeApiData} from '../../redux/slices/authSlice';
import {FontFamily} from '../../constant/Fonts';

const Width = Dimensions.get('window').width;
const AddFilmScreen = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [uri, setUri] = useState('');
  const [docType, setDocType] = useState('');
  const [docName, setDocName] = useState('');
  const [filmName, setFilmName] = useState('');
  const [filmLink, setFilmLink] = useState('');
  const [yearRelease, setYearRelease] = useState('');
  const [brandName, setBrandName] = useState('');
  const [pinToTop, setPinToTop] = useState('');
  const [hideReel, setHideReel] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filmNameError, setFilmNameError] = useState(false);
  const [filmNameErrorText, setFilmNameErrorText] = useState('');
  const [brandNameError, setBrandNameError] = useState(false);
  const [brandNameErrorText, setBrandNameErrorText] = useState('');
  const [filmLinkError, setFilmLinkError] = useState(false);
  const [filmLinkErrorText, setFilmLinkErrorText] = useState('');
  const [pinToTopError, setPinToTopError] = useState(false);
  const [pinToTopErrorText, setPinToTopErrorText] = useState('');
  const [hideReelError, setHideReelError] = useState(false);
  const [hideReelErrorText, setHideReelErrorText] = useState('');
  const [yearReleaseError, setYearReleaseeError] = useState(false);
  const [yearReleaseErrorText, setYearReleaseErrorText] = useState('');
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dobError, setDobError] = useState(false);
  const [date, setDate] = useState(new Date());

  const [indusryType, setIndustryType] = useState({});

  const filmNameRef = useRef(null);
  const filmLinkRef = useRef(null);
  const yearReleaseRef = useRef(null);
  const brandNameRef = useRef(null);
  const searchTextInputRef = useRef(null);

  const userRole = useSelector(state => state.user.role);
  const industryData = useSelector(state => state.api.industryType.data);

  const focusNextInput = nextInputRef => {
    nextInputRef && nextInputRef.current && nextInputRef.current.focus();
  };

  useEffect(() => {
    focusNextInput(filmNameRef);
  }, []);

  useEffect(() => {
    getIndustryTypeApi();
    console.log(
      'Value Check for Industry&^&^&^&^^&^&^& DATA======',
      industryData,
    );
  }, []);

  //=====================GET-INDUSTRY-TYPE-API====================//
  const getIndustryTypeApi = async () => {
    setLoading(true);
    const data_type = 'industry';
    console.log('check talent ID here-==-=-=-=-=->>', data_type);
    dispatch(GetIndustryTypeApiData(data_type))
      .then(action => {
        if (action.type === 'industryTypeApiGet/fulfilled') {
          console.log(
            'Get Industry Type API Success:----------->',
            action.payload,
          );
          setLoading(false);
        } else {
          console.error(
            'Get Industry Type API Error:----------->',
            action.error,
          );
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  const selectFile = async () => {
    try {
      const [pickedFile] = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log('Picked File:', pickedFile);

      if (pickedFile && pickedFile.name) {
        setSelectedFileName(pickedFile.name);
        setUri(pickedFile.uri);
        setDocType(pickedFile.type);
        setDocName(pickedFile.name);
        console.log(
          'check document picker here-=-=-=->>',
          uri,
          docType,
          docName,
        );
        // producerAddFilm(uri)
      } else {
        console.warn('File name not found.');
      }
    } catch (error) {
      console.error('Error selecting file:', error.message);
    }
  };

  //=====================ADD-FILM-API====================//
  const onAddFilm = () => {
    if (filmName === '') {
      setFilmNameError(true);
      setFilmNameErrorText(Validation.filmeNameError);
    } else if (brandName === '') {
      setBrandNameError(true);
      setBrandNameErrorText(Validation.brandNameError);
    } else if (filmLink === '') {
      setFilmLinkError(true);
      setFilmLinkErrorText(Validation.filmLinkError);
    } else if (pinToTop === '') {
      setPinToTopError(true);
      setPinToTopErrorText(Validation.pinToTopError);
    } else if (hideReel === '') {
      setHideReelError(true);
      setHideReelErrorText(Validation.hideReelError);
    } else if (selectedDate === '') {
      // setYearReleaseeError(true);
      // setYearReleaseErrorText(Validation.yearReleaseError);
      setDobError(true);
    } else {
      talentAddFilm();
    }
  };

  const onAddProducerFilm = () => {
    if (filmName === '') {
      setFilmNameError(true);
      setFilmNameErrorText(Validation.filmeNameError);
    }
    //  else if (brandName === '') {
    //   setBrandNameError(true);
    //   setBrandNameErrorText(Validation.brandNameError);
    // }
    else if (filmLink === '') {
      setFilmLinkError(true);
      setFilmLinkErrorText(Validation.filmLinkError);
    } 
    // else if (pinToTop === '') {
    //   setPinToTopError(true);
    //   setPinToTopErrorText(Validation.pinToTopError);
    // } else if (hideReel === '') {
    //   setHideReelError(true);
    //   setHideReelErrorText(Validation.hideReelError);
    // }
    // else if (selectedDate === '') {
    //   // setYearReleaseeError(true);
    //   // setYearReleaseErrorText(Validation.yearReleaseError);
    //   setDobError(true)
    // }
    else {
      producerAddFilm();
    }
  };

  const talentAddFilm = () => {
    setLoading(true);
    let formattedDate = '';
    if (selectedDate && selectedDate instanceof Date && !isNaN(selectedDate)) {
      formattedDate = formatDate(selectedDate);
    } else {
      const today = new Date();
      formattedDate = 'DD-MM-YYYY';
    }
    const addData = {
      film_name: filmName,
      film_link: filmLink,
      is_pinned: pinToTop.value,
      is_private: hideReel.value,
      brand: brandName,
      date_of_release: formattedDate,
    };
    console.log('showreels Add data-=-=-=-', addData);
    dispatch(AddTalentShowReel(addData))
      .then(action => {
        if (action.type === 'addTalentShowreel/fulfilled') {
          console.log(
            'Add Showreel Talent Post API Success:----------->',
            action.payload,
          );
          setLoading(false);
          navigation.goBack();
        } else {
          console.error(
            'Add Showreel Talent Post API Error:----------->',
            action.error,
          );
          Alert.alert(action.payload.message);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  const producerAddFilm = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('film_name', filmName);
    formData.append('film_link', filmLink);
    formData.append('is_pinned', pinToTop.value);
    formData.append('is_private', hideReel.value);
    formData.append('industry_id', indusryType.id);
    formData.append('crew_list_link', {
      uri: uri,
      type: docType,
      name: docName,
    });
    console.log('producer showreels Add data-=-=-=-', uri);

    dispatch(AddProducerShowReel(formData))
      .then(action => {
        if (action.type === 'addProducerShowreel/fulfilled') {
          console.log(
            'Add Showreel Producer Post API Success:----------->',
            action.payload,
          );
          setLoading(false);
          navigation.goBack();
        } else {
          console.error(
            'Add Showreel Producer Post API Error:----------->',
            action.error,
          );
          Alert.alert(
            (action.payload.message ),
        );            setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  const onChangeFilmName = text => {
    setFilmName(text);
    if (text !== '') {
      setFilmNameError(false);
    }
  };

  const onChangeBrandName = text => {
    setBrandName(text);
    if (text !== '') {
      setBrandNameError(false);
    }
  };

  const onChangeFilmLink = text => {
    setFilmLink(text);
    if (text !== '') {
      setFilmLinkError(false);
    }
  };

  const onChangeYearRelease = text => {
    setYearRelease(text);
    if (text !== '') {
      setYearReleaseeError(false);
    }
  };

  const handleValueSelect = value => {
    setPinToTop(value);
    setModalVisible(false);
  };

  const handleValueHideReelSelect = value => {
    setHideReel(value);
    setIsModalVisible(false);
    console.log('hidereeel value check', value);
  };

  const closeModal = () => {
    setModalVisible(false);
    setIsModalVisible(false);
    setDateModalVisible(false);
  };

  const openModal = () => {
    setDateModalVisible(true);
  };

  const onDateChange = selectedDate => {
    setSelectedDate(selectedDate);
    if (selectedDate !== '') {
      setDobError(false);
    }
  };

  // const onDateChange = (newDate) => {
  //   setSelectedDate(newDate);
  // };

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

  const handleOK = () => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    closeModal();
  };

  const BooleanModal = () => {
    const boolValue = [
      {id: 1, value: true, showValue: 'Yes'},
      {id: 2, value: false, showValue: 'No'},
    ];

    const handleValuePress = val => {
      handleValueSelect(val);
      setModalVisible(false);
      setPinToTopError(false);
    };
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Pressable
          style={{flex: 1, justifyContent: 'center'}}
          onPress={() => closeModal()}>
          <View>
            <View style={styles.flatListContainer}>
              {boolValue.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.listContainer}
                  onPress={() => handleValuePress(item)}>
                  <View style={styles.renderTitleContainer}>
                    <Text style={styles.renderNameText}>{item.showValue}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Pressable>
      </Modal>
    );
  };

  const BooleanHideReelModal = () => {
    const boolValue = [
      {id: 1, value: true, showValue: 'Yes'},
      {id: 2, value: false, showValue: 'No'},
    ];

    const handleValuePress = val => {
      handleValueHideReelSelect(val);
      setIsModalVisible(false);
      setHideReelError(false);
    };
    return (
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <Pressable
          style={{flex: 1, justifyContent: 'center'}}
          onPress={() => closeModal()}>
          <View>
            <View style={styles.flatListContainer}>
              {boolValue.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.listContainer}
                  onPress={() => handleValuePress(item)}>
                  <View style={styles.renderTitleContainer}>
                    <Text style={styles.renderNameText}>{item.showValue}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Pressable>
      </Modal>
    );
  };

  const [searchIndustryTypeInput, setSearchIndustryTypeInput] = useState('');
  const [filteredIndustry, setFilteredIndustry] = useState();
  const [isIndustryModal, setIsIndustryModal] = useState(false);

  const updateFilterdIndustry = newTalentData => {
    if (newTalentData !== null) {
      setFilteredIndustry(industryData);
    }
  };

  useEffect(() => {
    updateFilterdIndustry(industryData);
  }, [industryData]);

  const onSelectTalent = selectTalent => {
    setIndustryType(selectTalent);
    setIsIndustryModal(false);
  };

  useEffect(() => {
    if (isIndustryModal) {
      focusNextInput(searchTextInputRef);
    }
  }, [isIndustryModal]);

  const IndustryTypeModal = () => {
    const onChangeHandle = text => {
      setSearchIndustryTypeInput(text);
      let prevState = industryData;
      const filtered = text
        ? prevState.filter(state =>
            state.name.toLowerCase().includes(text.toLowerCase()),
          )
        : prevState;
      setFilteredIndustry(filtered);
    };

    const onCloseLocation = () => {
      setIsIndustryModal(false);
    };

    const LocationRenderItem = ({item, index}) => {
      const handleIndustrySelection = item => {
        onSelectTalent(item);
        setFilteredIndustry(industryData);
        Keyboard.dismiss();
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
          onPress={() => handleIndustrySelection(item)}>
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
      <Modal animationType="slide" transparent={true} visible={isIndustryModal}>
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
                  ref={searchTextInputRef}
                  placeholder={'Search Talent...'}
                  value={searchIndustryTypeInput}
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
                data={filteredIndustry}
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
      <SafeAreaView style={{flex: 1}}>
        <Header
          title={Strings.addFilms}
          type={'headerIcon'}
          navigation={navigation}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={styles.keyBoardContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                marginTop: Platform.OS === 'ios' ? 0 : 15,
              }}>
              <View style={styles.container}>
                <View style={{marginVertical: 20}}>
                  <FloatingLabelInput
                    ref={filmNameRef}
                    label={Strings.filmName}
                    value={filmName}
                    onChangeText={text => {
                      onChangeFilmName(text);
                    }}
                    onSubmitEditing={() =>
                      focusNextInput(
                        userRole === Strings.producer
                          ? filmLinkRef
                          : brandNameRef,
                      )
                    }
                    showError={filmNameError}
                    error={filmNameErrorText}
                  />
                </View>
                {userRole === Strings.producer && (
                  <>
                    <View style={{marginVertical: 20}}>
                      <FloatingLabelInput
                        ref={filmLinkRef}
                        label={Strings.filmLink}
                        value={filmLink}
                        onChangeText={text => {
                          onChangeFilmLink(text);
                        }}
                        onSubmitEditing={() => focusNextInput(yearReleaseRef)}
                      />
                    </View>
                    <View style={styles.dateContainer}>
                      <TouchableOpacity
                        style={styles.inputContainer}
                        onPress={() => selectFile()}>
                        <Text style={styles.label}>{Strings.crewLink}</Text>
                        <Text style={styles.inputStyle}>
                          {selectedFileName}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* <View style={styles.dateContainer}>
                      <TouchableOpacity
                        onPress={() => setIsIndustryModal(!isIndustryModal)}
                        style={[styles.inputContainer]}>
                        <Text style={styles.label}>{Strings.industry}</Text>
                        <Text style={styles.inputStyle}>
                          {indusryType.name}
                        </Text>
                      </TouchableOpacity>
                      {hideReelError && (
                        <Text style={styles.DobErrorText}>
                          {Validation.hideReelError}
                        </Text>
                      )}
                    </View> */}
                    {/* {isIndustryModal && IndustryTypeModal()} */}
                  </>
                )}
                {userRole === Strings.talent && (
                  <>
                    <View style={{marginVertical: 20}}>
                      <FloatingLabelInput
                        ref={brandNameRef}
                        label={Strings.brandName}
                        value={brandName}
                        onChangeText={text => {
                          onChangeBrandName(text);
                        }}
                        onSubmitEditing={() => focusNextInput(filmLinkRef)}
                        showError={brandNameError}
                        error={brandNameErrorText}
                      />
                    </View>
                    <View style={{marginVertical: 20}}>
                      <FloatingLabelInput
                        ref={filmLinkRef}
                        label={Strings.filmLink}
                        value={filmLink}
                        onChangeText={text => {
                          onChangeFilmLink(text);
                        }}
                        onSubmitEditing={() => focusNextInput(yearReleaseRef)}
                        showError={filmLinkError}
                        error={filmLinkErrorText}
                      />
                    </View>

                    <View style={styles.dateContainer}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={[styles.inputContainer]}>
                        <Text style={styles.label}>{Strings.pinToTop}</Text>
                        <Text style={styles.inputStyle}>
                          {pinToTop.showValue}
                        </Text>
                      </TouchableOpacity>
                      {pinToTopError && (
                        <Text style={styles.DobErrorText}>
                          {Validation.pinToTopError}
                        </Text>
                      )}
                    </View>
                    {modalVisible && BooleanModal()}
                    <View style={styles.dateContainer}>
                      <TouchableOpacity
                        onPress={() => setIsModalVisible(!isModalVisible)}
                        style={[styles.inputContainer]}>
                        <Text style={styles.label}>{Strings.hideFromReel}</Text>
                        <Text style={styles.inputStyle}>
                          {hideReel.showValue}
                        </Text>
                      </TouchableOpacity>
                      {hideReelError && (
                        <Text style={styles.DobErrorText}>
                          {Validation.hideReelError}
                        </Text>
                      )}
                    </View>
                    {isModalVisible && BooleanHideReelModal()}
                    <Modal
                      visible={dateModalVisible}
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
                              <Text style={styles.okText}>
                                {Strings.okText}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </TouchableWithoutFeedback>
                    </Modal>
                    <View style={styles.dateContainer}>
                      <TouchableOpacity
                        onPress={() => openModal()}
                        style={[styles.inputContainer]}>
                        <Text style={styles.label}>
                          {Strings.yearOfRelease}
                        </Text>
                        <View style={{width: 140}}>
                          <TextInput
                            style={styles.inputStyle}
                            value={
                              selectedDate
                                ? formatDate(selectedDate)
                                : formatDate(new Date())
                            }
                            editable={false}
                          />
                        </View>
                      </TouchableOpacity>
                      {dobError && (
                        <Text style={styles.DobErrorText}>
                          {'Please select date of birth'}
                        </Text>
                      )}
                    </View>
                  </>
                )}

                <View>
                  <Button
                    title={Strings.add}
                    buttonStyle={styles.addButtonStyle}
                    onPress={
                      userRole === Strings.talent
                        ? () => onAddFilm()
                        : () => onAddProducerFilm()
                    }
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

export default AddFilmScreen;
