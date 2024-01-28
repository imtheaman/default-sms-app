import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  SafeAreaView,
  Alert,
} from 'react-native';
import FilmDetailModal from '../../components/modalView';
import {styles} from './style';
import Strings from '../../constant/Strings';
import {useDispatch, useSelector} from 'react-redux';
import AddToBlackbook from '../../components/addToBlackbook';
import TalentDetailModal from '../../components/modalDetailActor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GetFilmsApiData,
  GetProducerApiData,
  GetTalentApiData,
} from '../../redux/slices/discoverySlice';
import Loading from '../../components/loadingIndicator';
import {beginAsyncEvent} from 'react-native/Libraries/Performance/Systrace';
// import {GetTalentApiData} from '../../redux/slices/manageTeam';

const screenWidth = Dimensions.get('window').width;

const DiscoverScreen = () => {
  const userRole = useSelector(state => state.user.role);
  const dispatch = useDispatch();

  const movies = [
    {
      id: 1,
      name: 'Name',
      place: 'Mumbai | Delhi',
      image:
        'https://cdn.pixabay.com/photo/2017/07/26/06/31/road-2540632_1280.jpg',
      brand: 'Brand name',
      house: 'Production house',
      director: 'Director Name',
      duration: '2:36',
      dop: 'Director of Photography(DOP)',
    },
    {
      id: 2,
      name: 'Name',
      place: 'Mumbai|Delhi',
      image:
        'https://cdn.pixabay.com/photo/2014/08/22/09/36/auto-424119_1280.jpg',
      brand: 'Brand name',
      house: 'Production house',
      director: 'Director Name',
      duration: '2:36',
      dop: 'Director of Photography(DOP)',
    },
    {
      id: 3,
      name: 'Name',
      place: 'Mumbai|Delhi',
      image:
        'https://cdn.pixabay.com/photo/2020/12/18/15/08/clown-5842288_1280.jpg',
      brand: 'Brand name',
      house: 'Production house',
      director: 'Director Name',
      duration: '2:36',
      dop: 'Director of Photography(DOP)',
    },
    {
      id: 4,
      name: 'Name',
      place: 'Mumbai|Delhi',
      image:
        'https://cdn.pixabay.com/photo/2022/01/20/16/31/desert-6952778_1280.jpg',
      brand: 'Brand name',
      house: 'Production house',
      director: 'Director Name',
      duration: '2:36',
      dop: 'Director of Photography(DOP)',
    },
    {
      id: 5,
      name: 'Name',
      place: 'Mumbai|Delhi',
      image:
        'https://cdn.pixabay.com/photo/2023/08/06/06/08/ai-generated-8172236_1280.png',
      brand: 'Brand name',
      house: 'Production house',
      director: 'Director Name',
      duration: '2:36',
      dop: 'Director of Photography(DOP)',
    },
    {
      id: 6,
      name: 'Name',
      place: 'Mumbai|Delhi',
      image:
        'https://cdn.pixabay.com/photo/2012/10/25/23/24/film-poster-62856_1280.jpg',
      brand: 'Brand name',
      house: 'Production house',
      director: 'Director Name',
      duration: '2:36',
      dop: 'Director of Photography(DOP)',
    },
    {
      id: 7,
      name: 'Name',
      place: 'Mumbai|Delhi',
      image:
        'https://cdn.pixabay.com/photo/2021/02/24/15/35/background-screen-6046754_1280.jpg',
      brand: 'Brand name',
      house: 'Production house',
      director: 'Director Name',
      duration: '2:36',
      dop: 'Director of Photography(DOP)',
    },
  ];

  const image = [
    {
      id: 1,
      imgPath: require('../../assets/images/camera.png'),
      label: Strings.director,
    },
    {
      id: 2,
      imgPath: require('../../assets/images/directorIcon.png'),
      label: Strings.dop,
    },
    {
      id: 3,
      imgPath: require('../../assets/images/cameraOperator.png'),
      label: Strings.castingDirector,
    },
    {
      id: 4,
      imgPath: require('../../assets/images/lensIcon.png'),
      label: Strings.productionDesigner,
    },
    {
      id: 5,
      imgPath: require('../../assets/images/camera.png'),
      label: Strings.musicDirector,
    },
    {
      id: 6,
      imgPath: require('../../assets/images/directorIcon.png'),
      label: Strings.colourist,
    },
    {
      id: 7,
      imgPath: require('../../assets/images/cameraOperator.png'),
      label: Strings.costumeStylist,
    },
    {
      id: 8,
      imgPath: require('../../assets/images/lensIcon.png'),
      label: Strings.hairAndMakeUp,
    },
    {
      id: 9,
      imgPath: require('../../assets/images/directorIcon.png'),
      label: Strings.storyBoardArtist,
    },
    {
      id: 10,
      imgPath: require('../../assets/images/lensIcon.png'),
      label: Strings.offlineEditor,
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovieImage, setSelectedMovieImage] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [selectedButton, setSelectedButton] = useState(
    userRole === Strings.producer ? 0 : 2,
  );
  const [selectedButtnButtonn, setSelectedButtnButtonn] = useState(null);

  const [addToBlackbookModalVisible, setAddToBlackbookModalVisible] =
    useState(false);
  const [selectTalenttoAdd, setSelectTalentToAdd] = useState(null);
  const [talentModalVisible, setTalentModalVisible] = useState(false);
  const [selectTalent, setSelectTalent] = useState(null);
  const [userFirstNam, setUserFirstNam] = useState('');
  const [greetings, setGreetings] = useState('');
  const [loading, setLoading] = useState(false);
  const [filteredTalents, setFilterTalents] = useState();
  const [filmsData, setFilmsData] = useState();
  const [producersData, setProducerData] = useState();

  const navigation = useNavigation();

  const talentData = useSelector(state => state.discoveryApi.fetchData.data);
  const filmData = useSelector(state => state.discoveryApi.filmsData.data);
  const producerData = useSelector(
    state => state.discoveryApi.producerData.data,
  );

  const handleAddToBlackbookModal = talentDetails => {
    console.log('check console here -=-=-=-=-=-=--=-==-=-=->>');
    setSelectTalentToAdd(talentDetails);
    setAddToBlackbookModalVisible(!addToBlackbookModalVisible);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userFirstName');
        if (userData !== null) {
          setUserFirstNam(userData);
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };
    fetchUserData();
    setSelectedButton(userRole === Strings.producer ? 0 : 2);
    console.log('Talent Data', talentData);
    GreetingComponent();
    const takentUserProfile = navigation.addListener('focus', () => {
      fetchUserData();
      getTalentApi();
      getFilmApi();
      getProducerApi();
    });
    return () => {
      takentUserProfile();
    };
  }, [userRole]);

  useEffect(() => {
    console.log('Check Values', selectedMovieImage);

    const onFocus = () => {
      setSearchText('');
      setIsSearch(false);
      console.log(
        'check state-====================================>>',
        userRole,
      );
    };

    const focusListener = navigation.addListener('focus', onFocus);
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (Platform.OS === 'android') {
          BackHandler.exitApp();
          return true;
        } else {
          return false;
        }
      },
    );

    return () => {
      focusListener && focusListener();
      backHandler.remove();
    };
  }, [navigation, userRole, selectedMovieImage, setSearchText, setIsSearch]);

  // useEffect(() => {
  //   getTalentApi();
  //   getFilmApi();
  //   getProducerApi();
  // }, []);

  // useEffect(() => {
  //   console.log('Talent Data', talentData);
  //   if (talentData !== null) {
  //     userRole === Strings.talent
  //       ? setFilterTalents(producerData)
  //       : setFilterTalents(talentData);
  //   }
  // }, [talentData, producerData, userRole]);

  useEffect(() => {
    console.log('Film Data', talentData);
    if (talentData !== null) {
      setFilterTalents(talentData);
    }
  }, [talentData]);

  useEffect(() => {
    console.log('Film Data', filmData);
    if (filmData !== null) {
      setFilmsData(filmData);
    }
  }, [filmData]);

  useEffect(() => {
    console.log('Producer Data', producerData);
    if (producerData !== null) {
      setProducerData(producerData);
    }
  }, [producerData]);

  // const handleButtnButtonnPress = buttnButtonnIndex => {
  //   setSelectedButtnButtonn(buttnButtonnIndex);
  // };

  const TalentModalHandler = talentDetails => {
    setSelectTalent(talentDetails);
    setTalentModalVisible(!talentModalVisible);
  };

  const modalHandler = movieDetails => {
    setSelectedMovieImage(movieDetails);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setAddToBlackbookModalVisible(false);
    setTalentModalVisible(false);
  };

  const openFullScreen = () => {
    console.log('worked-=-=-=-==-=->>');
    Alert.alert('coming soon');
  };

  const handleButtonPress = buttonIndex => {
    setSearchText('');
    setSelectedButton(buttonIndex);
    switch (buttonIndex) { 
      case 0:
        setFilterTalents(talentData);
        break;
      case 1:
        setFilmsData(filmData);
        break;
      case 2:
        setProducerData(producerData);
        break;
      default:
        setFilterTalents([]);
        setFilmsData([]);
        setProducerData([]);

    }
  };

  const GreetingComponent = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 4 && currentHour < 12) {
      setGreetings('Good Morning');
    } else if (currentHour >= 12 && currentHour < 16) {
      setGreetings('Good Afternoon');
    } else {
      setGreetings('Good Evening');
    }
  };

  const handleSearchTalentSubmit = text => {
    // if (text === '') {
    //   setSearchText('');
    //   setIsSearch(false);
    // } else {
    setSearchText(text);
    getTalentApi(text);
    // getFilmApi(text);
    // getProducerApi(text);
    // setIsSearch(true);
    // }
  };

  const handleSearchFilmsSubmit = text => {
    setSearchText(text);
    getFilmApi(text);
  };

  const handleSearchProducerSubmit = text => {
    setSearchText(text);
    getProducerApi(text);
  };

  //=====================GET-TALENT-API====================//
  const getTalentApi = async text => {
    setLoading(true);
    const queryParams = {
      q: searchText,
    };
    dispatch(GetTalentApiData(queryParams))
      .then(action => {
        if (action.type === 'talentGet/fulfilled') {
          console.log('Get Talent API Success:==============>', action.payload);
          setLoading(false);
        } else {
          Alert.alert(action.payload.message);
          console.error('Get Talent API Error:==============>', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  //=====================GET-FILMS-API====================//
  const getFilmApi = async text => {
    setLoading(true);
    const queryParams = {
      q: searchText,
    };
    dispatch(GetFilmsApiData(queryParams))
      .then(action => {
        if (action.type === 'filmsGet/fulfilled') {
          console.log('Get Film API Success:==============>', action.payload);
          setLoading(false);
        } else {
          Alert.alert(action.payload.message);
          console.error('Get Film API Error:==============>', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  //=====================GET-PRODUCERS-API====================//
  const getProducerApi = async text => {
    setLoading(true);
    const queryParams = {
      q: searchText,
    };
    dispatch(GetProducerApiData(queryParams))
      .then(action => {
        if (action.type === 'producerGet/fulfilled') {
          console.log(
            'Get Producer API Success:==============>',
            action.payload,
          );
          setLoading(false);
        } else {
          Alert.alert(action.payload.message);
          console.error('Get Producer API Error:==============>', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  const renderProducerItem = ({item}) => (
    <View style={styles.listContainer}>
      <View style={styles.listImageContainer}>
        <TouchableOpacity onPress={() => openFullScreen()} style={{flex: 1}}>
          <ImageBackground
            style={styles.renderImgStyle}
            source={{uri: item.image}}>
            <Image source={require('../../assets/images/play.png')} />
            <View style={styles.verifiedIconContainer}>
              <Image source={require('../../assets/images/verifyIcon.png')} />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          paddingVertical: 20,
        }}>
        <View style={styles.titleContainer}>
          <Text style={styles.nameText}>{item.brand}</Text>
          <Text style={styles.placeText}>{item.name}</Text>
          <Text style={styles.placeText}>{item.director}</Text>
          <Text style={styles.placeText}>{item.duration}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.viewProducerCrewContainer}
            onPress={() => modalHandler(item)}>
            <Text style={styles.viewProducercrewText}>{Strings.viewCrew}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderTalentItem = ({item}) => {
    console.log('render Talent Data -=-=-=-=-=-=-=-=-=-=-=', item);
    return (
      <View style={styles.listTalentContainer}>
        <View style={styles.listImageContainer}>
          {item.profile_picture_url ? (
            <Image
              style={[
                styles.renderImgStyle,
                {borderTopLeftRadius: 30, borderBottomLeftRadius: 30},
              ]}
              source={{
                uri: 'https://dev.touch.black' + item.profile_picture_url,
              }}
            />
          ) : (
            <Image
              source={require('../../assets/images/user.png')}
              style={[
                styles.profileImgStyle,
                {tintColor: '#FFFFFF', alignSelf: 'center'},
              ]}
            />
          )}
        </View>
        <View style={styles.renderTitleContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.renderNameText}>{`${item.first_name}`}</Text>
            <Image source={require('../../assets/images/connectFirst.png')} />
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style={styles.renderDopText}>{item.profession_type}</Text>
            <Text style={styles.renderPlaceText}>{item.city}</Text>
          </View>

          <TouchableOpacity
            style={styles.viewCrewContainer}
            onPress={() => TalentModalHandler(item)}>
            <Text style={styles.viewcrewText}>{Strings.viewDetails}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          hitSlop={{bottom: 10, left: 10, right: 10, top: 10}}
          onPress={() => handleAddToBlackbookModal(item)}
          style={{bottom: 11}}>
          <Image
            source={require('../../assets/images/bookmark.png')}
            style={styles.bookmarkImgStyle}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFilmsItem = ({item}) => {
    console.log('render Films Data -=-=-=-=-=-=-=-=-=-=-=', item);
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

      return {videoId, isYouTube, isVimeo, facebookUrl};
    };
    const handlePlay = async link => {
      const {videoId, isYouTube, isVimeo, facebookUrl} =
        getVideoIdFromLink(link);
      if (videoId) {
        console.log(
          'check video ID here -=-=-=-=-=-=->>',
          videoId,
          isYouTube,
          isVimeo,
        );
        navigation.navigate('videoPlay', {videoId, isYouTube, isVimeo});
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
    const {videoId, isYouTube, isVimeo, facebookUrl} = getVideoIdFromLink(link);

    const formatDuration = seconds => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;

      const formattedDuration = `${String(minutes).padStart(2, '0')}:${String(
        remainingSeconds,
      ).padStart(2, '0')}`;

      return formattedDuration;
    };

    const formattedDuration = formatDuration(item.duration);
    return (
      <View style={[styles.listTalentContainer, {overflow: 'hidden'}]}>
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
          <Text style={styles.renderNameText}>{`${item.brand.slice(
            0,
            10,
          )}...`}</Text>
          <View style={{paddingVertical: 5}}>
            <Text style={styles.renderDopText}>{item.production_house}</Text>
            <Text style={styles.renderPlaceText}>{item.director_name}</Text>
            <Text style={styles.renderPlaceText}>{formattedDuration}</Text>
          </View>

          <TouchableOpacity
            style={styles.viewCrewContainer}
            // onPress={() => modalHandler(item)}
          >
            <Text style={styles.viewcrewText}>{Strings.viewCrew}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderSearchProducerItem = ({item}) => {
    console.log('render Producer Data -=-=-=-=-=-=-=-=-=-=-=', item);
    return (
      <View style={[styles.listTalentContainer, {overflow: 'hidden'}]}>
        <View style={styles.listImageContainer}>
          <ImageBackground
            style={styles.renderImgStyle}
            source={{
              uri: 'https://dev.touch.black' + item.profile_picture_url,
            }}></ImageBackground>
        </View>
        <View style={styles.renderTitleContainer}>
          <Text style={styles.renderNameText}>{item.name}</Text>
          <Text
            style={[
              styles.renderPlaceText,
              {
                paddingVertical: 10,
              },
            ]}>
            {item.location_name}
          </Text>
          <TouchableOpacity
            style={[styles.viewCrewContainer, { marginTop: 25 }]}
          // onPress={() => modalHandler(item)}
          >
            <Text style={styles.viewcrewText}>{Strings.viewCrew}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const buttons = [
    {label: 'Talent', renderItem: renderTalentItem},
    {label: 'Films', renderItem: renderFilmsItem},
    {label: 'Producer', renderItem: renderSearchProducerItem},
  ];

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: Platform.OS === 'ios' ? 10 : 40,
          }}>
          <Text style={styles.headingText}>
            {`${greetings || ''}${greetings && userFirstNam ? ', ' : ''}${
              userFirstNam || ''
            }`}
          </Text>
          <Text style={styles.headerText}>{Strings.discover}</Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            marginTop: Platform.OS === 'ios' ? 0 : 15,
          }}>
          <View style={styles.filterContainer}>
            {selectedButton === 0 ? (
              <View
                style={[
                  styles.searchContainer,
                  {padding: Platform.OS === 'ios' ? 13 : 0},
                ]}>
                <Image
                  style={styles.searchImage}
                  source={require('../../assets/images/searchBar.png')}
                />
                <TextInput
                  placeholder={Strings.search}
                  value={searchText}
                  placeholderTextColor={'#E0E0E0'}
                  style={styles.searchInput}
                  onChangeText={text => handleSearchTalentSubmit(text)}
                />
              </View>
            ) : selectedButton === 1 ? (
              <View
                style={[
                  styles.searchContainer,
                  {padding: Platform.OS === 'ios' ? 13 : 0},
                ]}>
                <Image
                  style={styles.searchImage}
                  source={require('../../assets/images/searchBar.png')}
                />
                <TextInput
                  placeholder={Strings.search}
                  value={searchText}
                  placeholderTextColor={'#E0E0E0'}
                  style={styles.searchInput}
                  onChangeText={text => handleSearchFilmsSubmit(text)}
                />
              </View>
            ) : (
              <View
                style={[
                  styles.searchContainer,
                  {padding: Platform.OS === 'ios' ? 13 : 0},
                ]}>
                <Image
                  style={styles.searchImage}
                  source={require('../../assets/images/searchBar.png')}
                />
                <TextInput
                  placeholder={Strings.search}
                  value={searchText}
                  placeholderTextColor={'#E0E0E0'}
                  style={styles.searchInput}
                  onChangeText={text => handleSearchProducerSubmit(text)}
                />
              </View>
            )}
            <TouchableOpacity
              style={styles.filterImgStyle}
              onPress={() => navigation.navigate('DiscoverFilter')}>
              <Image
                style={styles.filterImage}
                source={require('../../assets/images/filter.png')}
              />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* {!isSearch ? (
              <>
                <View style={styles.fiterTitleContainer}>
                  <Text style={styles.fiterTitleText}>{Strings.talent}</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {image.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[styles.categoryStyle]}
                      onPress={() => handleButtnButtonnPress(index)}>
                      <Image
                        source={image[index].imgPath}
                        style={styles.menuImgStyle}
                      />
                      <Text style={[styles.categoryText]}>{item.label}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <View style={styles.fiterTitleContainer}>
                  <Text style={styles.fiterTitleText}>{Strings.films}</Text>
                </View>
                <View>
                  <FlatList
                    data={movies}
                    renderItem={renderProducerItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </>
            ) : (
              <>
                <View style={styles.categoryFilterContainer}>
                  {buttons.map((button, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.categoryFilterStyle,
                        selectedButton === index ? styles.selectButton : {},
                      ]}
                      onPress={() => handleButtonPress(index)}>
                      <Text
                        style={[
                          styles.categoryFilterText,
                          selectedButton === index
                            ? styles.selectButtonText
                            : {},
                        ]}>
                        {button.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.fiterTitleBox}>
                    <Text style={styles.fiterTitleText}>
                      {selectedButton !== null
                        ? buttons[selectedButton].label
                        : 'Select a Category'}
                    </Text>
                  </View>
                  <FlatList
                    data={movies}
                    renderItem={buttons[selectedButton].renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                  />
                </ScrollView>
              </>
            )} */}
            <View style={styles.categoryFilterContainer}>
              {buttons.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.categoryFilterStyle,
                    selectedButton === index ? styles.selectButton : {},
                  ]}
                  onPress={() => handleButtonPress(index)}>
                  <Text
                    style={[
                      styles.categoryFilterText,
                      selectedButton === index ? styles.selectButtonText : {},
                    ]}>
                    {button.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.fiterTitleBox}>
                <Text style={styles.fiterTitleText}>
                  {selectedButton !== null
                    ? buttons[selectedButton].label
                    : 'Select a Category'}
                </Text>
              </View>
              {selectedButton === 0 ? (
                <FlatList
                  data={filteredTalents}
                  renderItem={renderTalentItem}
                  keyExtractor={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              ) : selectedButton === 1 ? (
                <FlatList
                  data={filmsData}
                  renderItem={renderFilmsItem}
                  keyExtractor={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              ) : (
                <FlatList
                  data={producersData}
                  renderItem={renderSearchProducerItem}
                  keyExtractor={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              )}
            </ScrollView>
            {talentModalVisible && (
              <TalentDetailModal
                modalVisible={talentModalVisible}
                closeModal={closeModal}
                selectTalent={selectTalent}
              />
            )}
            {modalVisible && (
              <FilmDetailModal
                modalVisible={modalVisible}
                closeModal={closeModal}
                selectedMovieImage={selectedMovieImage}
              />
            )}
          </ScrollView>
        </View>
        <Loading isLoading={loading} />
      </SafeAreaView>
      {addToBlackbookModalVisible && (
        <AddToBlackbook
          modalVisible={addToBlackbookModalVisible}
          closeModal={closeModal}
          selectTalenttoAdd={selectTalenttoAdd}
        />
      )}
    </ImageBackground>
    // </View>
  );
};

export default DiscoverScreen;
