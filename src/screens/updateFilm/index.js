import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
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
} from 'react-native';
import FloatingLabelInput from '../../components/floatLabelInput';
import { styles } from './style';
import Button from '../../components/Button';
import DocumentPicker from 'react-native-document-picker';
import Strings from '../../constant/Strings';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/header';
import { AddTalentShowReel, updateTalentShowreels } from '../../redux/slices/profileScreenSlice';
import { Validation } from '../../constant/validation';
import Loading from '../../components/loadingIndicator';
import DatePicker from 'react-native-date-picker';

const Width = Dimensions.get('window').width;
const UpdateFilm = ({ route }) => {
  const { items } = route.params;
  console.log('check params item here on updatefilm =-=-=-=-=-=-=-', items);

  const filmIdParams = items?.film_id;
  const filmNameparams = items?.film_name;
  const brandNameParams = items?.brand;
  const pintoTopParams = items?.is_pinned;
  const privateParams = items?.is_private;
  const dateParams = items?.date_of_release;
  const filmLinkParams = items?.film_link;


  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [uri, setUri] = useState('');
  const [filmName, setFilmName] = useState(filmNameparams || '');
  const [filmId, setFilmId] = useState(filmIdParams || '');
  const [yearRelease, setYearRelease] = useState('');
  const [brandName, setBrandName] = useState(brandNameParams || '');
  const [filmLink, setFilmLink] = useState(filmLinkParams ||'');
  // const [pinToTop, setPinToTop] = useState(pintoTopParams || '');
  // const [hideReel, setHideReel] = useState(privateParams || '');

  const [pinToTop, setPinToTop] = useState({
    value: pintoTopParams || false,
    showValue: pintoTopParams ? 'Yes' : 'No',
  });
  
  const [hideReel, setHideReel] = useState({
    value: privateParams || false,
    showValue: privateParams ? 'Yes' : 'No',
  });

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
  const [selectedDate, setSelectedDate] = useState(dateParams ? new Date(dateParams) : new Date());
  const [dobError, setDobError] = useState(false);
  const [date, setDate] = useState(new Date());

  console.log('check date=-=- =-=-=-=-=-=-=-', selectedDate);

  const filmNameRef = useRef(null);
  const filmLinkRef = useRef(null);
  const yearReleaseRef = useRef(null);
  const brandNameRef = useRef(null);

  const userRole = useSelector(state => state.user.role);

  const focusNextInput = nextInputRef => {
    nextInputRef && nextInputRef.current && nextInputRef.current.focus();
  };

  useEffect(() => {
    focusNextInput(filmLinkRef);
  }, []);

  const selectFile = async () => {
    try {
      const [pickedFile] = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      console.log('Picked File:', pickedFile);

      if (pickedFile && pickedFile.name) {
        setSelectedFileName(pickedFile.name);
        setUri(pickedFile.uri);
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
    }
    else if (filmId === '') {
      setFilmLinkError(true);
      setFilmLinkErrorText(Validation.filmLinkError);
    }
    else if (pinToTop === '') {
      setPinToTopError(true);
      setPinToTopErrorText(Validation.pinToTopError);
    } else if (hideReel === '') {
      setHideReelError(true);
      setHideReelErrorText(Validation.hideReelError);
    } else if (selectedDate === '') {
      // setYearReleaseeError(true);
      // setYearReleaseErrorText(Validation.yearReleaseError);
      setDobError(true)
    } else {
      updateTalentreels()
    }
  };

  const updateTalentreels = () => {
    setLoading(true);
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
    const addData = {
      film_id: filmId,
      film_name: filmName,
      is_pinned: pinToTop.value,
      is_private: hideReel.value,
      brand: brandName,
      date_of_release: formattedDate,
    };
    console.log('showreels Add data-=-=-=-', addData);
    dispatch(updateTalentShowreels(addData))
      .then(action => {
        if (action.type === 'updateTalentShowreels/fulfilled') {
          console.log(
            'Update Showreel Talent Post API Success:----------->',
            action.payload,
          );
          setLoading(false);
          navigation.goBack();
        } else {
          console.error(
            'Update Showreel Talent Post API Error:----------->',
            action.error,
          );
          Alert.alert('API failed please try again ');
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  }


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

  const onChangeFilmId = text => {
    setFilmId(text);
    if (text !== '') {
      setFilmLinkError(false);
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

  // const onDateChange = selectedDate => {
  //   if (selectedDate instanceof Date && !isNaN(selectedDate)) {
  //     setSelectedDate(selectedDate);
  //     if (selectedDate !== '') {
  //       setDobError(false);
  //     }
  //   }
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
      { id: 1, value: true, showValue: 'Yes' },
      { id: 2, value: false, showValue: 'No' },
    ];

    const handleValuePress = val => {
      // handleValueSelect(val);
      setPinToTop({
        value: val.value,
        showValue: val.showValue,
      });
      setModalVisible(false);
      setPinToTopError(false);
    };
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Pressable
          style={{ flex: 1, justifyContent: 'center' }}
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
      { id: 1, value: true, showValue: 'Yes' },
      { id: 2, value: false, showValue: 'No' },
    ];

    const handleValuePress = val => {
      // handleValueHideReelSelect(val);
      setHideReel({
        value: val.value,
        showValue: val.showValue,
      });
      setIsModalVisible(false);
      setHideReelError(false);
    };
    return (
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <Pressable
          style={{ flex: 1, justifyContent: 'center' }}
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

  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          title={Strings.updateFilm}
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
                <View style={{ marginVertical: 20 }}>
                  <FloatingLabelInput
                    ref={filmLinkRef}
                    label={Strings.filmId}
                    value={filmId}
                    onChangeText={text => {
                      onChangeFilmId(text);
                    }}
                    onSubmitEditing={() => focusNextInput(filmNameRef)}
                    showError={filmLinkError}
                    error={filmLinkErrorText}
                    editable={false}
                  />
                </View>
                <View style={{ marginVertical: 20 }}>
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
                    <View style={{ marginVertical: 20 }}>
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
                        style={styles.crewListContainer}
                        onPress={() => selectFile()}>
                        <View style={[styles.crewListTextContainer]}>
                          <Text style={styles.label}>{Strings.crewLink}</Text>
                          <TextInput
                            style={styles.crewListInputStyle}
                            editable={false}
                            value={selectedFileName}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
                {userRole === Strings.talent && (
                  <>
                    <View style={{ marginVertical: 20 }}>
                      <FloatingLabelInput
                        ref={brandNameRef}
                        label={Strings.brandName}
                        value={brandName}
                        onChangeText={text => {
                          onChangeBrandName(text);
                        }}
                        // onSubmitEditing={() => focusNextInput(filmLinkRef)}
                        showError={brandNameError}
                        error={brandNameErrorText}
                      />
                    </View>
                    {/* <View style={{marginVertical: 20}}>
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
                    </View> */}
                    {/* <View style={{marginVertical: 20}}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}>
                        <FloatingLabelInput
                          label={Strings.pinToTop}
                          value={pinToTop.showValue}
                          editable={false}
                          showError={pinToTopError}
                          error={pinToTopErrorText}
                        />
                      </TouchableOpacity>
                    </View> */}
                    <View style={styles.dateContainer}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={[styles.inputContainer]}>
                        <Text style={styles.label}>{Strings.pinToTop}</Text>
                        <Text style={styles.inputStyle}>{pinToTop.showValue}</Text>

                        {/* <TextInput
                          style={styles.inputStyle}
                          value={pinToTop.showValue}
                          editable={false}
                        /> */}
                      </TouchableOpacity>
                      {pinToTopError && (
                        <Text style={styles.DobErrorText}>
                          {Validation.pinToTopError}
                        </Text>
                      )}
                    </View>
                    {modalVisible && BooleanModal()}
                    {/* <View style={{marginVertical: 20}}>
                      <TouchableOpacity
                        onPress={() => setIsModalVisible(!isModalVisible)}>
                        <FloatingLabelInput
                          label={Strings.hideFromReel}
                          value={hideReel.showValue}
                          editable={false}
                          showError={hideReelError}
                          error={hideReelErrorText}
                        />
                      </TouchableOpacity>
                    </View> */}
                    <View style={styles.dateContainer}>
                      <TouchableOpacity
                        onPress={() => setIsModalVisible(!isModalVisible)}
                        style={[styles.inputContainer]}>
                        <Text style={styles.label}>{Strings.hideFromReel}</Text>
                        <Text style={styles.inputStyle}>{hideReel.showValue}</Text>

                        {/* <TextInput
                          style={styles.inputStyle}
                          value={hideReel.showValue}
                          editable={false}
                        /> */}
                      </TouchableOpacity>
                      {hideReelError && (
                        <Text style={styles.DobErrorText}>
                          {Validation.hideReelError}
                        </Text>
                      )}
                    </View>
                    {isModalVisible && BooleanHideReelModal()}
                    {/* <View style={{marginVertical: 20}}>
                      <FloatingLabelInput
                        ref={yearReleaseRef}
                        label={Strings.yearOfRelease}
                        value={yearRelease}
                        keyboardType={'numeric'}
                        onChangeText={text => {
                          onChangeYearRelease(text);
                        }}
                        showError={yearReleaseError}
                        error={yearReleaseErrorText}
                      />
                    </View> */}
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
                        <Text style={styles.label}>{Strings.yearOfRelease}</Text>
                        <View style={{ width: 140 }}>
                          <Text style={styles.inputStyle}>{
                            selectedDate
                              ? formatDate(selectedDate)
                              : formatDate(new Date())
                          }</Text>

                          {/* <TextInput
                            style={styles.inputStyle}
                            value={
                              selectedDate
                                ? formatDate(selectedDate)
                                : formatDate(new Date())
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
                  </>
                )}
                <View>
                  <Button
                    title={Strings.updateFilm}
                    buttonStyle={styles.addButtonStyle}
                    onPress={
                      userRole === Strings.talent ? () => onAddFilm() : () => { }
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

export default UpdateFilm;
