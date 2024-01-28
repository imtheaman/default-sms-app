import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import TalentDetailModal from '../../components/modalDetailActor';
import { FontFamily } from '../../constant/Fonts';
import Strings from '../../constant/Strings';
import { setRole } from '../../redux/slices/accountSwitchSlice';
import { styles } from './style';
import Swipeable from 'react-native-swipeable';
import Loading from '../../components/loadingIndicator';
import {
  GetProducerShowreelData,
  GetSearchFilmsApiData,
  GetShowreelData,
  PinToTopFilmApi,
  PinToTopShowreelApi,
  aboutProducerUserProfile,
  aboutTalentUserProfile,
  deleteTalentShowreels,
  uploadProducerProfilePic,
  uploadTalentProfilePic,
} from '../../redux/slices/profileScreenSlice';

const Width = Dimensions.get('window').width;

const ProfileScreen = () => {
  const swipeableRef = useRef(null);
  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Name',
      place: 'Mumbai',
      image:
        'https://cdn.pixabay.com/photo/2013/07/18/20/24/brad-pitt-164880_1280.jpg',
      brand: 'Brand name',
      house: 'Production house',
      director: 'Director',
      dop: 'Director of Photography(DOP)',
      duration: '2:36',
      swiped: false,
    },
    {
      id: 2,
      name: 'Name',
      place: 'Mumbai',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/05/32/actor-1867561_1280.jpg',
      brand: 'Brand name',
      house: 'Production house',
      director: 'Director',
      dop: 'Director of Photography(DOP)',
      duration: '2:36',
      swiped: false,
    },
    {
      id: 3,
      name: 'Name',
      place: 'Mumbai',
      image:
        'https://cdn.pixabay.com/photo/2016/03/31/20/27/actor-1295772_1280.png',
      brand: 'Brand name',
      house: 'Production house',
      director: 'Director',
      dop: 'Director of Photography(DOP)',
      duration: '2:36',
      swiped: false,
    },
    {
      id: 4,
      name: 'Name',
      place: 'Mumbai',
      image:
        'https://cdn.pixabay.com/photo/2016/03/28/09/48/people-1285245_1280.jpg',
      brand: 'Brand name',
      house: 'Production house',
      director: 'Director',
      dop: 'Director of Photography(DOP)',
      duration: '2:36',
      swiped: false,
    },
  ]);
  const [activeTab, setActiveTab] = useState(Strings.showReel);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectTalent, setSelectTalent] = useState(null);
  const [profileImage, setProfileImage] = useState('');
  const [producerProfileImage, setProducerProfileImage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const [isSecondDropDown, setIsSecondDropDown] = useState(false);
  const [accountSwitchModal, setAccountSwitchModal] = useState(false);
  const [selectPin, setSelectPin] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [bioInput, setBioInput] = useState('');
  const [talentModalVisible, setTalentModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fromEditFirstName, setFromEditFirstName] = useState('');
  const [fromEditLirstName, setFromEditLirstName] = useState('');
  const [videoId, setVideoId] = useState('');
  const [searchFilmInput, setSearchFilmInput] = useState('');
  const [showreelsData, setShowreelsData] = useState();
  const [filteredFilms, setFilteredFilms] = useState(showreelsData);
  const [producerShowreel, setProducerShowreel] = useState();
  const [videoData, setVideoData] = useState([]);

  const [isTop, setIsTop] = useState({});
  const [isFilmTop, setIsFilmTop] = useState({});

  const userRole = useSelector(state => state.user.role);
  const fetchData = useSelector(state => state.profileApi.fetchData.data);
  const showreelData = useSelector(
    state => state.profileApi.getShowReelData.data,
  );
  const searchFilmData = useSelector(
    state => state.profileApi.searchFilmData.data,
  );
  const producerData = useSelector(
    state => state.profileApi.aboutProducerData.data,
  );
  const producerShowreelData = useSelector(
    state => state.profileApi.getProducerShowreelData.data,
  );
  const maxCharacters = 500;

  useEffect(() => {
    // console.log('Fetch Data:', fetchData);
    // swipeableRef.current.close();
    console.log('Updated user role-------------------->>', userRole);
    if (userRole === Strings.talent) {
      getAboutTalentuserApi();
      getShowreelTalentuserApi();
    } else {
      getAboutProduceruserApi();
      getProducerShowreeluserApi();
    }
  }, [userRole]);

  useEffect(() => {
    const takentUserProfile = navigation.addListener('focus', () => {
      if (userRole === Strings.talent) {
        getAboutTalentuserApi();
        getShowreelTalentuserApi();
      } else {
        getAboutProduceruserApi();
        getProducerShowreeluserApi();
      }
    });
    return takentUserProfile;
  }, [navigation, userRole]);

  console.log('Fetch Data Outside Effect:', fetchData);
  console.log(
    'producer Fetch Data Outside Effect:-=-=-=-=-=-=-=-=-=->>',
    producerData,
  );
  console.log(
    'producer showreel Data Outside Effect:-=-=-=-=-=-=-=-=-=->>',
    producerShowreelData,
  );

  const fullName =
    userRole == Strings.talent
      ? `${fetchData?.data?.first_name} ${fetchData?.data?.last_name}`
      : producerData?.data?.name;

  const getFirstName =
    fetchData && fetchData?.data ? `${fetchData?.data?.first_name}` : '';

  const getLastName =
    fetchData && fetchData?.data ? `${fetchData?.data?.last_name}` : '';

  const getDob = fetchData && fetchData?.data ? `${fetchData?.data?.dob}` : '';

  const getGender =
    fetchData && fetchData?.data ? `${fetchData?.data?.gender}` : '';

  const getPhoneNumber =
    fetchData && fetchData?.data ? `${fetchData?.data?.mobile_number}` : '';

  const getBio =
    fetchData && fetchData?.data?.user_meta
      ? `${fetchData?.data?.user_meta?.bio}`
      : '';

  const getMaxRate =
    fetchData && fetchData?.data?.user_meta
      ? `${fetchData?.data?.user_meta?.max_rate}`
      : '';

  const getMinRate =
    fetchData && fetchData?.data?.user_meta
      ? `${fetchData?.data?.user_meta?.min_rate}`
      : '';

  const talentUserProfilePic =
    userRole == Strings.talent
      ? fetchData?.data?.profile_pic_url
      : producerData?.data?.profile_pic_url;

  const talentUserType =
    fetchData && fetchData?.data ? `${fetchData?.data?.profession?.id}` : '';

  const talentUserTypeName =
    fetchData && fetchData?.data ? `${fetchData?.data?.profession?.name}` : '';

  const userCity =
    userRole == Strings.talent
      ? `${fetchData?.data?.address?.city}`
      : producerData?.data?.locations;

  console.log('check user city -=-=-=-=-=>>', userCity);

  const dob = getDob;
  const birthDate = new Date(dob);
  const currentDate = new Date();
  const timeDiff = currentDate - birthDate;
  const ageDate = new Date(timeDiff);
  const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  const userAge = calculatedAge;
  console.log(
    'Age:------------------------',
    fromEditFirstName,
    fromEditLirstName,
  );

  const userTalentFirstandLast = fromEditFirstName + ' ' + fromEditLirstName;
  const userOneLast = userTalentFirstandLast
    ? userTalentFirstandLast
    : fullName;
  console.log(
    'final check here -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=',
    userTalentFirstandLast,
  );

  console.log('Showreel API Data......', showreelData);
  const fullShowreelData = showreelData?.data;
  const fullProducerShowreelData = producerShowreelData?.data;
  const dispatch = useDispatch();

  const switchToTalent = () => {
    if (userRole === Strings.talent) {
      Alert.alert('Already you are on Personal Account');
    } else {
      dispatch(setRole(Strings.talent));
      setAccountSwitchModal(false);
      navigation.navigate('Discover');
      console.log('update on Talent =-=->>', userRole);
    }
  };

  const switchToProducer = () => {
    if (userRole !== Strings.talent) {
      Alert.alert('Already you are on Business Account');
    } else {
      navigation.navigate('Discover');
      dispatch(setRole(Strings.producer));
      setAccountSwitchModal(false);
      console.log('update on Producer =-=->>', userRole);
    }
  };

  const onSignOut = async () => {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userFirstName');
    navigation.replace('Login');
  };

  const showAlert = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'OK',
          onPress: () => onSignOut(),
        },
      ],
      { cancelable: false },
    );
  };

  //=====================Update-Talent-Profile-PIC-API====================//
  const updatTalentProfilePicApi = imagePath => {
    setLoading(true);
    console.log('check profile pic here -=-=-=--=-', imagePath);
    const formData = new FormData();
    formData.append('profile_picture', {
      uri: imagePath,
      type: 'image/jpeg',
      name: 'profile_picture.jpg',
    });
    dispatch(uploadTalentProfilePic(formData))
      .then(action => {
        if (action.type === 'uploadTalentPic/fulfilled') {
          console.log(
            'Upload Talent profile Pic Post API Success:----------->',
            action.payload,
          );
          getAboutTalentuserApi();
          setLoading(false);
        } else {
          Alert.alert(
            (action.payload.message),
          ); console.error(
            'Upload Talent profile Pic Post API Error:----------->',
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

  //=====================Update-Talent-Profile-PIC-API====================//
  const updatProducerProfilePicApi = imagePath => {
    setLoading(true);
    const producerImage = imagePath;
    console.log('check profile pic here -=-=-=--=-', producerImage);
    const formData = new FormData();
    formData.append('profile_picture', {
      uri: producerImage,
      type: 'image/jpeg',
      name: 'profile_picture.jpg',
    });
    dispatch(uploadProducerProfilePic(formData))
      .then(action => {
        if (action.type === 'uploadProducerPic/fulfilled') {
          console.log(
            'Upload Producer profile Pic Post API Success:----------->',
            action.payload,
          );
          getAboutProduceruserApi();
          setLoading(false);
        } else {
          Alert.alert(
            (action.payload.message),
          ); console.error(
            'Upload Producer profile Pic Post API Error:----------->',
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

  //=====================GET-TALENT-USER-API====================//
  const getAboutTalentuserApi = async () => {
    setLoading(true);
    try {
      const userId = await AsyncStorage.getItem('userId');
      console.log('check user ID here-==-=-=-=-=->>', userId);
      dispatch(aboutTalentUserProfile(userId))
        .then(action => {
          if (action.type === 'getTalentUserData/fulfilled') {
            console.log(
              'Get Talent User Profile API Success:----------->',
              action.payload,
            );
            setLoading(false);
          } else {
            Alert.alert(
              (action.payload.message),
            ); console.error(
              'Get Talent User Profile API Error:----------->',
              action.error,
            );
            setLoading(false);
          }
        })
        .catch(error => {
          console.error('Dispatch Error:', error);
          setLoading(false);
        });
    } catch (error) {
      console.error('AsyncStorage Error:', error);
      setLoading(false);
    }
  };

  //=====================GET-PRODUCER-USER-API====================//

  // Waiting for producer id
  const getAboutProduceruserApi = async () => {
    setLoading(true);
    try {
      // const userId = await AsyncStorage.getItem('userId');
      // console.log('check user ID here-==-=-=-=-=->>', userId);
      const aboutProducerParam = '38d0d6bb-8cab-4b28-b6f4-f2385e7a31ab';
      dispatch(aboutProducerUserProfile(aboutProducerParam))
        .then(action => {
          if (action.type === 'getProducerUserData/fulfilled') {
            console.log(
              'Get Producer User Profile API Success:----------->',
              action.payload,
            );
            setLoading(false);
          } else {
            Alert.alert(
              (action.payload.message),
            ); console.error(
              'Get Producer User Profile API Error:----------->',
              action.error,
            );
            setLoading(false);
          }
        })
        .catch(error => {
          console.error('Dispatch Error:', error);
          setLoading(false);
        });
    } catch (error) {
      console.error('AsyncStorage Error:', error);
      setLoading(false);
    }
  };
  //=====================GET-TALENT-SHOWREEL-USER-API====================//
  const getShowreelTalentuserApi = async () => {
    setLoading(true);
    try {
      const userId = await AsyncStorage.getItem('userId');
      console.log('check user ID here for showreel api-==-=-=-=-=->>', userId);
      dispatch(GetShowreelData(userId))
        .then(action => {
          if (action.type === 'showreelApiGet/fulfilled') {
            console.log(
              'Get Talent Showreel API Success:----------->',
              action.payload,
            );
            setLoading(false);
          } else {
            Alert.alert(
              (action.payload.message),
            ); console.error(
              'Get Talent Showreel API Error:----------->',
              action.error,
            );
            setLoading(false);
          }
        })
        .catch(error => {
          console.error('Dispatch Error:', error);
          setLoading(false);
        });
    } catch (error) {
      console.error('AsyncStorage Error:', error);
      setLoading(false);
    }
  };

  //=====================GET-PRODUCER-SHOWREEL-USER-API====================//
  const getProducerShowreeluserApi = async () => {
    setLoading(true);
    try {
      // const userId = await AsyncStorage.getItem('userId');
      const producerId = '38d0d6bb-8cab-4b28-b6f4-f2385e7a31ab';
      // console.log('check user ID here for showreel api-==-=-=-=-=->>', userId);
      dispatch(GetProducerShowreelData(producerId))
        .then(action => {
          if (action.type === 'producerShowreelApiGet/fulfilled') {
            console.log(
              'Get Producer Showreel API Success:----------->',
              action.payload,
            );
            setLoading(false);
          } else {
            Alert.alert(
              (action.payload.message),
            ); console.error(
              'Get Producer Showreel API Error:----------->',
              action.error,
            );
            setLoading(false);
          }
        })
        .catch(error => {
          console.error('Dispatch Error:', error);
          setLoading(false);
        });
    } catch (error) {
      console.error('AsyncStorage Error:', error);
      setLoading(false);
    }
  };

  //=====================PIN-TO-TOP-SHOWREELS-API====================//
  const pinToTopShowreelsApi = async (itemId, newSwitchState) => {
    setLoading(true);
    const postData = {
      film_id: itemId,
      pinned: newSwitchState ? 'true' : 'false',
    };
    dispatch(PinToTopShowreelApi(postData))
      .then(action => {
        console.log('PIN TO TOP DATA=====', postData);
        if (action.type === 'pinToTop/fulfilled') {
          console.log(
            'Showreels Pin To Top API Success:----------->',
            action.payload,
          );
          getShowreelTalentuserApi();
          setLoading(false);
        } else {
          Alert.alert(action.payload.message);
          console.error('Showreels Pin To Top API Error:----------->', action);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  //=====================PRODUCER-PIN-TO-TOP-FILMS-API====================//
  const producerPinToTopFilmsApi = async (itemId, newSwitchState) => {
    setLoading(true);
    const postData = {
      film_id: itemId,
      pinned: newSwitchState ? 'true' : 'false',
    };
    dispatch(PinToTopFilmApi(postData))
      .then(action => {
        console.log('PRODUCER PIN TO TOP DATA=====', postData);
        if (action.type === 'producerPinToTop/fulfilled') {
          console.log(
            'Films Pin To Top API Success:----------->',
            action.payload,
          );
          getProducerShowreeluserApi();
          setLoading(false);
        } else {
          Alert.alert(action.payload.message);
          console.error('Films Pin To Top API Error:----------->', action);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  //=====================GET-SEARCH-FILM-API====================//
  const getSearchFilm = async text => {
    setLoading(true);
    const userId = await AsyncStorage.getItem('userId');
    console.log('check user ID here for showreel api-==-=-=-=-=->>', userId);
    const queryParams = {
      q: text,
      owner_id: userId,
    };
    dispatch(GetSearchFilmsApiData(queryParams))
      .then(action => {
        if (action.type === 'searchFilmGet/fulfilled') {
          console.log(
            'Get Search Film API Success:==============>',
            action.payload,
          );
          setLoading(false);
        } else {
          Alert.alert(
            (action.payload.message),
          ); console.error('Get Search Film Error:==============>', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  const openAccountModal = () => {
    setAccountSwitchModal(true);
  };

  const closeAccountModal = () => {
    setAccountSwitchModal(false);
  };

  const onChangeBioInput = text => {
    if (text.length <= maxCharacters) {
      setBioInput(text);
    }
  };

  const accountSwitch = () => {
    return (
      <Modal
        visible={accountSwitchModal}
        transparent={true}
        animationType="slide"
        onRequestClose={closeAccountModal}>
        <TouchableWithoutFeedback onPress={closeAccountModal}>
          <View style={styles.modalContainer}>
            <View style={styles.pickerContainer}>
              <View style={styles.modalHeadContainer}>
                <Text style={styles.modalHeaderText}>
                  {Strings.changeProfile}
                </Text>
                <Text style={styles.modalHeaderSubText}>
                  {Strings.switchProfileText}
                </Text>
              </View>
              <View style={styles.modalDivider}></View>
              <TouchableOpacity
                style={styles.profileDividerProfile}
                onPress={switchToTalent}>
                <Text style={styles.profileDividerText}>
                  {Strings.personal}
                </Text>
              </TouchableOpacity>
              <View style={styles.modalDivider}></View>
              <TouchableOpacity
                style={styles.profileDividerProfile}
                onPress={switchToProducer}>
                <Text style={styles.profileDividerText}>
                  {Strings.business}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalCloseContainer}>
              <TouchableOpacity
                style={styles.profileDividerProfile}
                onPress={closeAccountModal}>
                <Text style={styles.midalCloseText}>{Strings.close}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  const DropDownHandler = () => {
    setIsDropDown(!isDropDown);
  };

  const SecondDropDownHandler = () => {
    setIsSecondDropDown(!isSecondDropDown);
  };

  const modalHandler = talentDetails => {
    setSelectTalent(talentDetails);
    setTalentModalVisible(!talentModalVisible);
  };

  const closeModal = () => {
    setTalentModalVisible(false);
  };

  const handleAddButton = () => {
    setIsModalVisible(true);
  };

  const openCamera = async () => {
    try {
      const image = await ImageCropPicker.openCamera({
        width: 100,
        height: 100,
        cropping: true,
        includeBase64: true,
      });
      console.log('check here -=-=-=-=-==>>', image);
      const imagePath = image.path;
      setProfileImage(imagePath);
      console.log('check image here-=-=--=-=-=--=-=-=->>', imagePath);
      if (userRole === Strings.talent) {
        updatTalentProfilePicApi(imagePath);
      } else {
        updatProducerProfilePicApi(imagePath);
      }
      setIsModalVisible(false);
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const openImageLibrary = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        width: 100,
        height: 100,
        cropping: true,
        includeBase64: true,
      });
      console.log('Selected image:', image);
      const imagePath = image.path;
      setProfileImage(imagePath);
      console.log('check image here-=-=--=-=-=--=-=-=->>', profileImage);
      userRole === Strings.talent
        ? updatTalentProfilePicApi(imagePath)
        : updatProducerProfilePicApi(imagePath);
      setIsModalVisible(false);
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  // const PinIconHandler = itemId => {
  //   setSelectPin(prevSelectedPins => {
  //     const updatedSelectedPins = {...prevSelectedPins};
  //     updatedSelectedPins[itemId] = !updatedSelectedPins[itemId];
  //     return updatedSelectedPins;
  //   });
  // };

  const PinIconHandler = itemId => {
    const newSwitchState = !isTop[itemId];

    setIsTop(prevState => ({
      ...prevState,
      [itemId]: newSwitchState,
    }));
    console.log('Check params in method', itemId, newSwitchState);
    pinToTopShowreelsApi(itemId, newSwitchState);
  };

  const FilmPinIconHandler = itemId => {
    const newSwitchState = !isFilmTop[itemId];

    setIsFilmTop(prevState => ({
      ...prevState,
      [itemId]: newSwitchState,
    }));
    console.log('Check params in method', itemId, newSwitchState);
    producerPinToTopFilmsApi(itemId, newSwitchState);
  };

  useEffect(() => {
    if (showreelData !== null) {
      setShowreelsData(fullShowreelData);
      console.log('Talent data is available:', showreelsData);
      const initialEnabledState = {};
      showreelData.data.forEach(member => {
        initialEnabledState[member.film_id] = member.is_pinned;
      });
      console.log('Object Check', initialEnabledState);
      setIsTop(initialEnabledState);
    }
    if (producerShowreelData !== null) {
      setProducerShowreel(fullProducerShowreelData);
      console.log('Producer data is available:', producerShowreel);
      const initialEnabledState = {};
      producerShowreelData.data.forEach(member => {
        initialEnabledState[member.film_id] = member.is_pinned;
      });
      console.log('Object Check', initialEnabledState);
      setIsFilmTop(initialEnabledState);
    }
  }, [showreelData, producerShowreelData]);

  // const updateFilteredFilm = newFilmData => {
  //   if (newFilmData !== null && searchFilmInput.trim() !== '') {
  //     setFilteredFilms(searchFilmData);
  //   } else {
  //     setFilteredFilms(fullShowreelData);
  //   }
  // };

  const updateFilteredFilm = newFilmData => {
    if (searchFilmInput.trim() === '') {
      setFilteredFilms(showreelsData);
    } else if (newFilmData !== null) {
      setFilteredFilms(newFilmData);
    }
  };

  useEffect(() => {
    console.log('Value Check for Film++++++', searchFilmData);
    updateFilteredFilm(searchFilmData);
  }, [searchFilmData, searchFilmInput]);

  const onChangeHandle = text => {
    setSearchFilmInput(text);
    getSearchFilm(text);
  };

  const AboutEditHandler = () => {
    setIsEdit(!isEdit);
  };

  const OnCloseEditHandler = () => {
    setIsEdit(!isEdit);
  };

  const cameraModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}>
      <Pressable
        style={styles.modalContainer}
        onPress={() => setIsModalVisible(false)}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => openCamera()}>
            <Text style={styles.modalOption}>{Strings.openCamera}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openImageLibrary()}>
            <Text style={styles.modalOption}>{Strings.chooseLibrary}</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => RemoveProfileImage()}>
            <Text style={styles.modalOption}>{Strings.removeProfile}</Text>
          </TouchableOpacity> */}
        </View>
      </Pressable>
    </Modal>

    // <Modal
    //   animationType="slide"
    //   transparent={true}
    //   visible={isModalVisible}
    //   onRequestClose={() => setIsModalVisible(false)}>
    //   <Pressable
    //     style={styles.modalContainer}
    //     onPress={() => setIsModalVisible(false)}>
    //     <View style={styles.modalContent}>
    //       <TouchableOpacity onPress={() => openCamera()} style={styles.option}>
    //         <Text style={styles.modalOption}>{Strings.openCamera}</Text>
    //       </TouchableOpacity>
    //       <View style={styles.separator} />
    //       <TouchableOpacity
    //         onPress={() => openImageLibrary()}
    //         style={styles.option}>
    //         <Text style={styles.modalOption}>{Strings.chooseLibrary}</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </Pressable>
    // </Modal>
  );

  const renderTalentItem = ({ item }) => {
    const getVideoIdFromLink = link => {
      const youtubePatterns = [
        /(?:v=)([^&]+)/, // Matches URLs like https://www.youtube.com/watch?v=videoId
        /(?:youtu.be\/)([^?]+)/, // Matches URLs like https://youtu.be/videoId
        /(?:t=)([^&]+)/, // Matches time parameters like https://www.youtube.com/watch?v=videoId&t=1m30s
        /(?:list=)([^&]+)/, // Matches playlist URLs like https://www.youtube.com/playlist?list=playlistId
      ];

      const vimeoPattern = [
        /vimeo\.com\/(?:video\/|channels\/[\w-]+\/)?(\d+)/,
        /vimeo\.com\/(?:video\/|channels\/[\w-]+\/|album\/[\w-]+\/|groups\/[\w-]+\/videos\/)?(\d+)/,
      ];
      const facebookPattern = [
        /(?:https?:\/\/(?:www\.)?facebook\.com\/(?:.+\/)?videos\/(\d+))/, // Matches URLs like https://www.facebook.com/user/videos/videoId
        /(?:https?:\/\/(?:www\.)?facebook\.com\/watch\/\?v=(\d+))/, // Matches URLs like https://www.facebook.com/watch/?v=videoId
        /(?:https?:\/\/(?:www\.)?facebook\.com\/(?:video.php\?v=|watch\/|[^\/]+\/videos\/))(?:(?:t\.\d+\/)|(?:v\.|videos\/|embed\/)?)(\d+)/, // Additional pattern
      ];

      let videoId = null;
      let isYouTube = false;
      let isVimeo = false;
      let facebookUrl = null;

      youtubePatterns.some(pattern => {
        const match = link.match(pattern);
        if (match && match[1]) {
          videoId = match[1];
          isYouTube = true;
          isVimeo = false;
          return true;
        }
        return false;
      });

      if (!videoId) {
        for (const pattern of vimeoPattern) {
          const match = link.match(pattern);
          if (match && match[1]) {
            videoId = match[1];
            isYouTube = false;
            isVimeo = true;
            break;
          }
        }
      }

      if (link.includes('facebook.com')) {
        const videosIndex = link.indexOf('videos/');
        const watchIndex = link.indexOf('watch/?v=');
        if (videosIndex !== -1) {
          videoId = link.substring(videosIndex + 'videos/'.length);
        } else if (watchIndex !== -1) {
          videoId = link.substring(watchIndex + 'watch/?v='.length);
        }
        isYouTube = false;
        isVimeo = false;
      }

      return { videoId, isYouTube, isVimeo, facebookUrl };
    };
    const handlePlay = async link => {
      const { videoId, isYouTube, isVimeo, facebookUrl } =
        getVideoIdFromLink(link);
      if (videoId) {
        console.log(
          'check video ID here -=-=-=-=-=-=->>',
          videoId,
          isYouTube,
          isVimeo,
        );
        navigation.navigate('videoPlay', { videoId, isYouTube, isVimeo });
      } else if (facebookUrl) {
        console.log('check Facebook URL here -=-=-=-=-=-=->>', facebookUrl);
        navigation.navigate('videoPlay', {
          videoId: facebookUrl,
          isYouTube,
          isVimeo,
        });
      } else {
        Alert.alert('Invalid video link');
        console.error('Invalid video link:', link);
      }
    };

    const link = item.film_link;
    const { videoId, isYouTube, isVimeo, facebookUrl } = getVideoIdFromLink(link);

    console.log('console check for item-=-=-=-=', item);

    const rightButtons = [
      <TouchableOpacity
        key="delete"
        style={[styles.deleteButton, { backgroundColor: '#FD4340' }]}
        onPress={() => handleDelete(item.film_id)}>
        <Image source={require('../../assets/images/deleteIcon.png')} />
      </TouchableOpacity>,
    ];

    const leftButtons = [
      <TouchableOpacity
        key="edit"
        style={[styles.editButton, { backgroundColor: '#007AFF' }]}
        onPress={() => handleEdit(item)}>
        <Image source={require('../../assets/images/editIcon.png')} />
      </TouchableOpacity>,
    ];
    return (
      <Swipeable
        leftButtons={leftButtons}
        rightButtons={rightButtons}
        onSwipeStart={() => handleSwipeStart()}
        onSwipeRelease={() => handleSwipeRelease()}
      // disabled={item.swiped}
      >
        <View style={styles.listContainer}>
          <TouchableOpacity
            onPress={() => handlePlay(item.film_link)}
            style={styles.listImageContainer}>
            <ImageBackground
              style={styles.renderImgStyle}
              // source={{ uri: item.image }}
              source={
                isYouTube
                  ? require('../../assets/images/youtubeImage.png')
                  : isVimeo
                    ? require('../../assets/images/vimeoImage.png')
                    : // facebookUrl
                    require('../../assets/images/facebookImage.png')
                // :null
              }>
              <View>
                <Image source={require('../../assets/images/play.png')} />
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.renderTitleContainer}>
            <View style={styles.pinContainer}>
              <Text style={styles.renderTalentNameText}>{item.brand}</Text>
              <TouchableOpacity
                onPress={() => PinIconHandler(item.film_id)}
                hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                <Image
                  style={{ tintColor: isTop[item.film_id] ? '#F8B903' : null }}
                  source={require('../../assets/images/pinIcon.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.renderTalentDurationText}>{item.duration}</Text>
          </View>
        </View>
      </Swipeable>
    );
  };

  const renderProducerItem = ({ item }) => {
    const getVideoIdFromLink = link => {
      const youtubePatterns = [
        /(?:v=)([^&]+)/, // Matches URLs like https://www.youtube.com/watch?v=videoId
        /(?:youtu.be\/)([^?]+)/, // Matches URLs like https://youtu.be/videoId
        /(?:t=)([^&]+)/, // Matches time parameters like https://www.youtube.com/watch?v=videoId&t=1m30s
        /(?:list=)([^&]+)/, // Matches playlist URLs like https://www.youtube.com/playlist?list=playlistId
      ];

      const vimeoPattern = [
        /vimeo\.com\/(?:video\/|channels\/[\w-]+\/)?(\d+)/,
        /vimeo\.com\/(?:video\/|channels\/[\w-]+\/|album\/[\w-]+\/|groups\/[\w-]+\/videos\/)?(\d+)/,
      ];
      const facebookPattern = [
        /(?:https?:\/\/(?:www\.)?facebook\.com\/(?:.+\/)?videos\/(\d+))/, // Matches URLs like https://www.facebook.com/user/videos/videoId
        /(?:https?:\/\/(?:www\.)?facebook\.com\/watch\/\?v=(\d+))/, // Matches URLs like https://www.facebook.com/watch/?v=videoId
        /(?:https?:\/\/(?:www\.)?facebook\.com\/(?:video.php\?v=|watch\/|[^\/]+\/videos\/))(?:(?:t\.\d+\/)|(?:v\.|videos\/|embed\/)?)(\d+)/, // Additional pattern
      ];

      let videoId = null;
      let isYouTube = false;
      let isVimeo = false;
      let facebookUrl = null;

      youtubePatterns.some(pattern => {
        const match = link.match(pattern);
        if (match && match[1]) {
          videoId = match[1];
          isYouTube = true;
          isVimeo = false;
          return true;
        }
        return false;
      });

      if (!videoId) {
        for (const pattern of vimeoPattern) {
          const match = link.match(pattern);
          if (match && match[1]) {
            videoId = match[1];
            isYouTube = false;
            isVimeo = true;
            break;
          }
        }
      }

      if (link.includes('facebook.com')) {
        const videosIndex = link.indexOf('videos/');
        const watchIndex = link.indexOf('watch/?v=');
        if (videosIndex !== -1) {
          videoId = link.substring(videosIndex + 'videos/'.length);
        } else if (watchIndex !== -1) {
          videoId = link.substring(watchIndex + 'watch/?v='.length);
        }
        isYouTube = false;
        isVimeo = false;
      }

      return { videoId, isYouTube, isVimeo, facebookUrl };
    };
    const handlePlay = async link => {
      const { videoId, isYouTube, isVimeo, facebookUrl } =
        getVideoIdFromLink(link);
      if (videoId) {
        console.log(
          'check video ID here -=-=-=-=-=-=->>',
          videoId,
          isYouTube,
          isVimeo,
        );
        navigation.navigate('videoPlay', { videoId, isYouTube, isVimeo });
      } else if (facebookUrl) {
        console.log('check Facebook URL here -=-=-=-=-=-=->>', facebookUrl);
        navigation.navigate('videoPlay', {
          videoId: facebookUrl,
          isYouTube,
          isVimeo,
        });
      } else {
        Alert.alert('Invalid video link');
        console.error('Invalid video link:', link);
      }
    };
    console.log('render producer log items here-=-=-=-=->>>', item.film_link);
    const link = item.film_link;
    const { videoId, isYouTube, isVimeo, facebookUrl } = getVideoIdFromLink(link);
    const rightButtons = [
      <TouchableOpacity
        key="delete"
        style={[styles.deleteButton, { backgroundColor: '#FD4340' }]}
        onPress={() => producerHandleDelete(item.id)}>
        <Image source={require('../../assets/images/deleteIcon.png')} />
      </TouchableOpacity>,
    ];

    const leftButtons = [
      <TouchableOpacity
        key="edit"
        style={[styles.editButton, { backgroundColor: '#007AFF' }]}
        onPress={() => producerHandleEdit(item.id)}>
        <Image source={require('../../assets/images/editIcon.png')} />
      </TouchableOpacity>,
    ];
    return (
      <Swipeable
        leftButtons={leftButtons}
        rightButtons={rightButtons}
        onSwipeStart={() => handleSwipeStart(item.id)}
        onSwipeRelease={() => handleSwipeRelease(item.id)}
        // disabled={item.swiped}
        ref={swipeableRef}>
        <View style={styles.listContainer}>
          <TouchableOpacity
            onPress={() => handlePlay(item.film_link)}
            style={styles.listImageContainer}>
            <ImageBackground
              style={styles.renderImgStyle}
              source={
                isYouTube
                  ? require('../../assets/images/youtubeImage.png')
                  : isVimeo
                    ? require('../../assets/images/vimeoImage.png')
                    : // facebookUrl
                    require('../../assets/images/facebookImage.png')
                // :null
              }>
              <TouchableOpacity>
                <Image source={require('../../assets/images/play.png')} />
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.renderTitleContainer}>
            <View style={styles.pinContainer}>
              <Text style={styles.renderNameText}>{item.film_name}</Text>
              <TouchableOpacity
                onPress={() => FilmPinIconHandler(item.film_id)}
                hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                <Image
                  style={{ tintColor: isFilmTop[item.film_id] ? '#F8B903' : null }}
                  source={require('../../assets/images/pinIcon.png')}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={
                styles.renderPlaceText
              }>{`${item.house} | ${item.director}`}</Text>
            <Text style={styles.renderPlaceText}>{item.duration}</Text>
            <TouchableOpacity
              style={styles.viewCrewContainer}
            // onPress={() => modalHandler(item)}
            >
              <Text style={styles.viewcrewText}>{Strings.viewCrew}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swipeable>
    );
  };

  const onDeleteMyTalentShowreels = itemId => {
    setLoading(true);
    const deleteData = {
      film_id: itemId,
    };
    console.log('showreels Add data-=-=-=-', deleteData);
    dispatch(deleteTalentShowreels(deleteData))
      .then(action => {
        if (action.type === 'deleteTalentShowreel/fulfilled') {
          console.log(
            'Delete Showreel Talent Post API Success:----------->',
            action.payload,
          );
          getShowreelTalentuserApi();
          // swipeableRef.current.close();
          setLoading(false);
          // navigation.goBack();
        } else {
          console.error(
            'Delete Showreel Talent Post API Error:----------->',
            action.error,
          );
          Alert.alert(
            (action.payload.message),
          ); setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  const handleEdit = item => {
    console.log('check items here coming or not >>>>>>>>>>>>>>', item);
    navigation.navigate('UpdateFilm', {
      items: item,
    });
  };

  const handleDelete = itemId => {
    console.log('delete API ID here -=-=-=-=-=->>', itemId);
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this film?',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'OK',
          onPress: () => onDeleteMyTalentShowreels(itemId),
        },
      ],
      // {cancelable: false},
    );
  };

  const producerHandleEdit = item => {
    console.log('check items here coming or not >>>>>>>>>>>>>>', item);
    // navigation.navigate('UpdateFilm',
    //   {
    //     items: item,
    //   });
  };

  const producerHandleDelete = itemId => {
    console.log('delete API ID here -=-=-=-=-=->>', itemId);
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this film?',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'OK',
          // onPress: () => onDeleteMyTalentShowreels(itemId),
        },
      ],
      // {cancelable: false},
    );
  };

  const handleSwipeStart = itemId => { };

  const handleSwipeRelease = itemId => { };

  const profileHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerDropContainer}>
          <TouchableOpacity
            onPress={openAccountModal}
            style={styles.dropImgContainer}>
            <Text style={styles.headerText}>
              {userRole === Strings.talent
                ? Strings.personalProfile
                : Strings.businessProfile}
            </Text>
            <Image
              style={{ left: 10 }}
              source={require('../../assets/images/drop.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image source={require('../../assets/images/menu.png')} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{ flex: 1 }}>
        {profileHeader()}
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            marginTop: Platform.OS === 'ios' ? 0 : 15,
          }}>
          {accountSwitch()}
          <View style={styles.profileDetailContainer}>
            {talentUserProfilePic ? (
              <View style={styles.profileImgContainer}>
                <Image
                  source={{ uri: talentUserProfilePic }}
                  style={styles.imgResponseStyle}
                />
              </View>
            ) : (
              <View style={styles.profileImgContainer}>
                <Image
                  source={require('../../assets/images/profileCamera.png')}
                />
              </View>
            )}
            {isModalVisible && cameraModal()}
            <TouchableOpacity
              style={styles.addImgContainer}
              onPress={() => handleAddButton()}>
              <Image
                style={styles.addImgText}
                source={require('../../assets/images/add.png')}
              />
            </TouchableOpacity>
            <View style={styles.headerDetailContainer}>
              <Text style={styles.nameText}>{fullName}</Text>
              <Text style={styles.dopText}>
                {userRole === Strings.talent
                  ? talentUserTypeName
                  : 'Director of Photography(DOP)'}
              </Text>
              <Text style={styles.placeText}>
                {userCity === 'null'&& 'undefined' ? '' : userCity}
              </Text>
              {userRole === Strings.talent ? (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('EditDetailsScreen', {
                      getFirstName,
                      getLastName,
                      getDob,
                      getGender,
                      getPhoneNumber,
                      getBio,
                      getMaxRate,
                      getMinRate,
                      talentUserType,
                      talentUserTypeName,
                    })
                  }>
                  <Image
                    style={styles.editImgStyle}
                    source={require('../../assets/images/edit.png')}
                  />
                </TouchableOpacity>
              ) : (
                ''
              )}
            </View>
          </View>
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === Strings.showReel && styles.activeTab,
              ]}
              onPress={() => setActiveTab(Strings.showReel)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === Strings.showReel && styles.activeTabText,
                ]}>
                {Strings.showReel}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === Strings.about && styles.activeTab,
              ]}
              onPress={() => setActiveTab(Strings.about)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === Strings.about && styles.activeTabText,
                ]}>
                {Strings.about}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === Strings.settings && styles.activeTab,
              ]}
              onPress={() => setActiveTab(Strings.settings)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === Strings.settings && styles.activeTabText,
                ]}>
                {Strings.settings}
              </Text>
            </TouchableOpacity>
          </View>
          {activeTab === Strings.showReel ? (
            <View style={styles.fiterTitleContainer}>
              <Text style={styles.fiterTitleText}>{Strings.showReel}</Text>
            </View>
          ) : activeTab === Strings.about ? (
            <View style={styles.fiterTitleContainer}>
              <Text style={styles.fiterTitleText}>{Strings.about}</Text>
              {isEdit ? (
                <TouchableOpacity
                  hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
                  onPress={() => AboutEditHandler()}>
                  <Image source={require('../../assets/images/edit.png')} />
                </TouchableOpacity>
              ) : (
                <View style={styles.onEditMainContainer}>
                  <TouchableOpacity
                    hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
                    style={styles.editButtonContainer}>
                    <Text style={styles.editButtonText}>{'Edit'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
                    style={styles.onEditContainer}
                    onPress={() => OnCloseEditHandler()}>
                    <Image
                      source={require('../../assets/images/closeIcon.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ) : (
            <View style={styles.fiterTitleContainer}>
              <Text style={styles.fiterTitleText}>{Strings.settings}</Text>
            </View>
          )}
          <View style={styles.secDivider} />
          {activeTab === Strings.showReel ? (
            <>
              {talentModalVisible && (
                <TalentDetailModal
                  modalVisible={talentModalVisible}
                  closeModal={closeModal}
                  selectTalent={selectTalent}
                />
              )}
              <View
                style={[
                  styles.flatListContainer,
                  { marginBottom: userRole === Strings.talent ? 45 : 0 },
                ]}>
                {/* {userRole === Strings.producer && ( */}
                <View style={styles.filterContainer}>
                  <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : null}
                    style={{ flex: 1 }}>
                    <View
                      style={[
                        styles.searchContainer,
                        { padding: Platform.OS === 'ios' ? 13 : 0 },
                      ]}>
                      <Image
                        style={styles.searchImage}
                        source={require('../../assets/images/searchBar.png')}
                      />
                      <TextInput
                        placeholder={Strings.search}
                        placeholderTextColor={'#E0E0E0'}
                        value={searchFilmInput}
                        style={styles.searchInput}
                        onChangeText={txt => onChangeHandle(txt)}
                      />
                    </View>
                  </KeyboardAvoidingView>
                </View>
                <View
                  style={{
                    height: userRole === Strings.talent ? '100%' : '85%',
                  }}>
                  <FlatList
                    data={
                      userRole === Strings.talent
                        ? showreelsData
                        : producerShowreel
                    }
                    renderItem={
                      userRole === Strings.talent
                        ? renderTalentItem
                        : renderProducerItem
                    }
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </View>
              <View style={styles.addFilmButtonContainer}>
                <Button
                  title={Strings.addFilms}
                  buttonStyle={styles.addFilmButton}
                  onPress={() => {
                    navigation.navigate('AddFilm');
                  }}
                />
              </View>
            </>
          ) : activeTab === Strings.about ? (
            isEdit ? (
              <View style={styles.aboutMainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <TouchableOpacity
                    onPress={() => DropDownHandler()}
                    style={styles.aboutHeaderContainer}>
                    <View style={styles.bioSecContainer}>
                      <Image
                        source={require('../../assets/images/bioIcon.png')}
                        style={styles.bioImgStyle}
                      />
                      <Text style={styles.bioText}>{Strings.bio}</Text>
                    </View>
                    <View
                      style={styles.dropImgPosContainer}
                      hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
                      {!isDropDown ? (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                          style={styles.dropUpImgStyle}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                          style={styles.dropImgStyle}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                  {isDropDown ? (
                    <View style={styles.bioContainer}>
                      <Text style={styles.bioContentText}>
                        {getBio ? getBio : ''}
                      </Text>
                      {userRole == Strings.talent ? (
                        <View style={{ marginTop: 5 }}>
                          <Text style={styles.keyText}>{Strings.age}</Text>
                          <Text style={styles.valueText}>
                            {userRole == Strings.talent ? userAge : ''}
                          </Text>
                          <Text style={styles.keyText}>
                            {Strings.experience}
                          </Text>
                          <Text style={styles.valueText}>
                            No Experience static key
                          </Text>
                        </View>
                      ) : null}
                      <View
                        style={{
                          paddingVertical: userRole == Strings.talent ? 0 : 5,
                        }}>
                        <Text style={styles.keyText}>{Strings.location}</Text>
                        <Text style={styles.valueText}>
                          {userCity === 'undefined' ? '' : userCity}
                        </Text>
                      </View>
                      <View style={styles.divider} />
                    </View>
                  ) : (
                    ''
                  )}
                  <TouchableOpacity
                    onPress={() => SecondDropDownHandler()}
                    style={styles.aboutHeaderContainer}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../../assets/images/awardIcon.png')}
                        style={styles.awardImgStyle}
                      />
                      <Text style={styles.bioText}>{Strings.awards}</Text>
                    </View>
                    <View
                      style={styles.dropImgPosContainer}
                      hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
                      {isSecondDropDown ? (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                          style={styles.dropImgStyle}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                          style={styles.dropUpImgStyle}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                  {isSecondDropDown && (
                    <View style={styles.bioContainer}>
                      <View>
                        <Text style={styles.keyText}>{Strings.awrardName}</Text>
                      </View>
                      <Text style={styles.yearText}>2023</Text>
                      <Text style={styles.valueText}>
                        Film for which the person was awarded
                      </Text>
                    </View>
                  )}
                </ScrollView>
              </View>
            ) : (
              <View style={styles.aboutMainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.aboutHeaderContainer}>
                    <View style={styles.bioSecContainer}>
                      <Image
                        source={require('../../assets/images/bioIcon.png')}
                        style={styles.bioImgStyle}
                      />
                      <Text style={styles.bioText}>{Strings.bio}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.dropImgPosContainer}
                      onPress={() => DropDownHandler()}
                      hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
                      {!isDropDown ? (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                          style={styles.dropUpImgStyle}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                          style={styles.dropImgStyle}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  {/* {isDropDown && ( */}
                  <View style={styles.bioContainer}>
                    {/* <Text style={styles.bioContentText}>
                    {
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nibh at ligula aliquet dapibus. Etiam tellus lectus, iaculis tempor ligula ipsum dolor sit amet, consectetur adipiscing elit'
                    }
                  </Text> */}
                    <View style={[styles.bioTextContainer]}>
                      <TextInput
                        value={bioInput}
                        style={styles.bioTextInput}
                        multiline={true}
                        maxLength={maxCharacters}
                        textAlignVertical="top"
                        onChangeText={text => onChangeBioInput(text)}
                      />
                    </View>
                    <View
                      style={{
                        width: Width * 0.9,
                        alignItems: 'flex-end',
                        paddingTop: 5,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 14,
                          fontFamily: FontFamily.bold,
                        }}>
                        {`${bioInput.length}/${maxCharacters}`}{' '}
                      </Text>
                    </View>
                    {
                      userRole === Strings.talent ?
                        <>
                          <View style={styles.ageContainer} onPress={() => { }}>
                            <View style={styles.inputContainer}>
                              <Text style={styles.label}>{Strings.age}</Text>
                              <TextInput
                                style={styles.inputStyle}
                                value={''}
                                editable={true} />
                              <TouchableOpacity
                                style={[styles.iconViewStyle]}
                                onPress={() => { }}>
                                <Image
                                  source={require('../../assets/images/dropRightWhite.png')}
                                  resizeMode="contain" />
                              </TouchableOpacity>
                            </View>
                          </View><View style={styles.ageContainer} onPress={() => { }}>
                            <View
                              style={[
                                styles.inputContainer,
                                // {padding: Platform.OS === 'ios' ? 13 : 0},
                              ]}>
                              <Text style={styles.label}>{Strings.experience}</Text>
                              <TextInput
                                style={styles.inputStyle}
                                value={''}
                                editable={true} />
                              <TouchableOpacity
                                style={[styles.iconViewStyle]}
                                onPress={() => { }}>
                                <Image
                                  source={require('../../assets/images/dropRightWhite.png')}
                                  resizeMode="contain" />
                              </TouchableOpacity>
                            </View>
                          </View><View
                            style={[
                              styles.ageContainer,
                              {

                              },
                            ]}
                            onPress={() => { }}>
                            <View style={[styles.inputContainer]}>
                              <Text style={styles.label}>{Strings.location}</Text>
                              <TextInput
                                style={styles.inputStyle}
                                value={''}
                                editable={true} />
                              <TouchableOpacity
                                style={[styles.iconViewStyle]}
                                onPress={() => { }}>
                                <Image
                                  source={require('../../assets/images/dropRightWhite.png')}
                                  resizeMode="contain" />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </>
                        : null

                    }

                    <View style={{ paddingVertical: 10 }}>
                      <View style={styles.divider} />
                    </View>
                  </View>
                  {/* )} */}
                  <View style={styles.aboutHeaderContainer}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../../assets/images/awardIcon.png')}
                        style={styles.awardImgStyle}
                      />
                      <Text style={styles.bioText}>{Strings.awards}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.dropImgPosContainer}
                      onPress={() => SecondDropDownHandler()}
                      hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}>
                      {isSecondDropDown ? (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                          style={styles.dropImgStyle}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                          style={styles.dropUpImgStyle}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  {/* {isSecondDropDown && ( */}
                  <View style={styles.editAwardContainer}>
                    <View
                      style={[styles.filterContainer, { alignItems: 'center' }]}>
                      <Text style={styles.editKeyText}>
                        {Strings.awrardName}
                      </Text>
                      <View
                        style={[
                          styles.onEditMainContainer,
                          { justifyContent: 'space-evenly' },
                        ]}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('EditAwardScreen')}
                          hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
                          style={styles.editButtonContainer}>
                          <Image
                            source={require('../../assets/images/edit.png')}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
                          style={styles.onEditContainer}
                          onPress={() => { }}>
                          <Image
                            source={require('../../assets/images/closeIcon.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text style={styles.editYearText}>2023</Text>
                    <Text style={styles.editValueText}>
                      Film for which the person was awarded
                    </Text>
                  </View>
                  <View style={styles.addFilmButtonContainer}>
                    <Button
                      title={'Add another'}
                      buttonStyle={styles.addFilmButton}
                      onPress={() => navigation.navigate('AddAwardScreen')}
                    />
                  </View>
                </ScrollView>
              </View>
            )
          ) : (
            <View>
              {userRole === Strings.producer && (
                <TouchableOpacity
                  style={styles.settingLabelContainer}
                  onPress={() => navigation.navigate('AddTeam')}>
                  <Text style={styles.settingLabelText}>
                    {Strings.manageTeam}
                  </Text>
                  <Image
                    style={styles.arrowImgStyle}
                    source={require('../../assets/images/dropRight.png')}
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity style={styles.settingLabelContainer}>
                <Text style={styles.settingLabelText}>
                  {Strings.moreOptions}
                </Text>
                <Image
                  style={styles.arrowImgStyle}
                  source={require('../../assets/images/dropRight.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.settingLabelContainer}
                onPress={showAlert}>
                <Text style={styles.settingLabelText}>{Strings.signOut}</Text>
                <Image
                  style={styles.arrowImgStyle}
                  source={require('../../assets/images/dropRight.png')}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <Loading isLoading={loading} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ProfileScreen;
