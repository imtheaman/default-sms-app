import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import {styles} from './style';
import Header from '../../components/header';
import Strings from '../../constant/Strings';
import {FontFamily} from '../../constant/Fonts';
import TalentDetailModal from '../../components/modalDetailActor';
import AddToBlackbook from '../../components/addToBlackbook';
import { GetArchiveBlackBookData, UnArchiveBlackBook } from '../../redux/slices/blackbookSlice';
import { useDispatch, useSelector } from 'react-redux';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ArchiveBlackBookScreen = () => {

  const userRole = useSelector(state => state.user.role);
  const dispatch = useDispatch();

  const BlackBookData = [
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

  const RealtedMovies = [
    {
      id: 1,
      brand: 'Brand Name',
      image:
        'https://cdn.pixabay.com/photo/2022/04/17/20/44/film-noir-7138980_1280.jpg',
    },
    {
      id: 2,
      brand: 'Brand Name',
      image:
        'https://cdn.pixabay.com/photo/2022/01/20/16/31/desert-6952778_1280.jpg',
    },
    {
      id: 3,
      brand: 'Brand Name',
      image:
        'https://cdn.pixabay.com/photo/2013/01/29/20/45/poster-76647_1280.jpg',
    },
    {
      id: 4,
      brand: 'Brand Name',
      image:
        'https://cdn.pixabay.com/photo/2022/03/18/11/57/carnage-7076506_1280.jpg',
    },
  ];
  const navigation = useNavigation();
  const [talentModalVisible, setTalentModalVisible] = useState(false);
  const [selectTalent, setSelectTalent] = useState(null);

  const [addToBlackbookModalVisible, setAddToBlackbookModalVisible] =
    useState(false);
  const [selectTalenttoAdd, setSelectTalentToAdd] = useState(null);
  const [archiveBlackBookData, setArchiveBlackBookData] = useState();
  const [loading, setLoading] = useState(false);

  const archiveData = useSelector(state => state.blackBookApi.getArchiveBlackBookData.data);
  const archiveBlackBook = archiveData?.data

  useEffect(() => {
    getArchiveBlackBookApi();
    const takentUserProfile = navigation.addListener('focus', () => {
      getArchiveBlackBookApi();
    });
    return takentUserProfile;
  }, []);

  useEffect(() => {
    if (archiveBlackBook !== '') {
      setArchiveBlackBookData(archiveBlackBook)
    }
  }, [archiveBlackBook])

  const getArchiveBlackBookApi = async () => {
    setLoading(true);
    dispatch(GetArchiveBlackBookData())
      .then(action => {
        if (action.type === 'getArchiveBlackBookApi/fulfilled') {
          console.log(
            'Get Archive BlackBook Showreel API Success:----------->',
            action.payload,
          );
          setLoading(false);
        } else {
            Alert.alert(
              (action.payload.message ),
          );       
          console.error(
            'Get Archive BlackBook Showreel API Error:----------->',
            action.error,
          ); setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  const unArchiveBlackBookApi = async (itemId) => {
    setLoading(true);
    const postData = {
      blackbook_id: itemId
      // pinned: newSwitchState ? 'true' : 'false',
    };
    dispatch(UnArchiveBlackBook(postData))
      .then(action => {
        console.log('PRODUCER PIN TO TOP DATA=====', postData);
        if (action.type === 'unArchiveBlackBookFilm/fulfilled') {
          console.log(
            'UNArchive API Success:----------->',
            action.payload,
          );
          getArchiveBlackBookApi();
          setLoading(false);
        } else {
          Alert.alert(action.payload.message);
          console.error('UNArchive API Error:----------->', action);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  const modalHandler = talentDetails => {
    setSelectTalent(talentDetails);
    setTalentModalVisible(!talentModalVisible);
  };

  const handleAddToBlackbookModal = talentDetails => {
    setSelectTalentToAdd(talentDetails);
    setAddToBlackbookModalVisible(!addToBlackbookModalVisible);
  };

  const closeModal = () => {
    setTalentModalVisible(false);
    setAddToBlackbookModalVisible(false);
  };

  const unArchiveBlackBookFilm= (id) =>{
    unArchiveBlackBookApi(id)
  }

  const RelatedMoviesRenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#232326',
          borderRadius: 20,
          width: Width * 0.5,
          height: Height * 0.2,
          marginRight: 14,
          overflow: 'hidden',
        }}>
        <ImageBackground
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          source={{uri: item.image}}>
          <Image source={require('../../assets/images/play.png')} />
        </ImageBackground>
        <View>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontFamily: FontFamily.bold,
              paddingVertical: 10,
              paddingHorizontal: 24,
            }}>
            {item.brand}
          </Text>
        </View>
      </View>
    );
  };

  const blackBookRenderItem = ({item, index}) => {
    return (
      <View style={styles.renderMainContainer}>
        <View style={styles.listImageContainer}>
          {/* <ImageBackground
            style={styles.renderImgStyle}
            source={{uri: item.image}}>
            <TouchableOpacity style={styles.renderBookmarkImageContainer}>
              <Image
                style={styles.renderBookmarkImage}
                source={require('../../assets/images/bookmark.png')}
              />
            </TouchableOpacity>
          </ImageBackground> */}
           <Image
            style={{ flex: 1, borderTopLeftRadius: 34, borderTopRightRadius: 34 }}
            source={{ uri:  'https://dev.touch.black' + item.profile_picture_url }}
          />
          <TouchableOpacity onPress={()=>{unArchiveBlackBookFilm(item.id)}} style={styles.renderBookmarkImageContainer}>
            <Image
              // style={styles.renderBookmarkImage}
              source={require('../../assets/images/bookmark.png')}
            />
          </TouchableOpacity>
          <View style={styles.mainContainer}>
            <View style={styles.renderTitleContainer}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.renderNameText}>{item.bookmark_name?item.bookmark_name:'your Name'}</Text>
                  <Image
                    source={require('../../assets/images/connectFirst.png')}
                  />
                </View>
                <Text style={styles.renderPlaceText}>{item.profession_type?item.profession_type:'your Profession'}</Text>
                <Text style={styles.renderDopText}>{item.location?item.location:'your Location'}</Text>
                <Text style={styles.contentText}>
                {item.notes}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleAddToBlackbookModal(item)}
                style={{alignItems: 'center', top: 4}}
                hitSlop={{bottom: 10, left: 10, right: 10, top: 10}}>
                <Image source={require('../../assets/images/edit.png')} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 24,
                paddingTop: 2,
              }}>
              <TouchableOpacity style={styles.categoryFilterStyle}>
                <Text style={styles.remarkText}>{item.rating ? item.rating : 'No Rating'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.viewCrewContainer}
                onPress={() => modalHandler(item)}>
                <Text style={styles.viewcrewText}>{Strings.viewDetails}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingLeft: 24}}>
            <View style={styles.recentTitleContainer}>
              <Text style={[styles.recentTitleText, {bottom: 10}]}>
                {Strings.films}
              </Text>
              <View style={{marginBottom: 15}}>
                <FlatList
                  data={RealtedMovies}
                  keyExtractor={item => item.id}
                  renderItem={RelatedMoviesRenderItem}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          type={'headerIcon'}
          title={'Archive Black Book'}
          navigation={navigation}
        />
        <KeyboardAvoidingView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
            }}>
            <View style={styles.filterContainer}>
              <View style={styles.searchContainer}>
                <Image
                  style={styles.searchImage}
                  source={require('../../assets/images/searchBar.png')}
                />
                <TextInput
                  placeholder={Strings.search}
                  placeholderTextColor={'#E0E0E0'}
                  style={styles.searchInput}
                />
              </View>
              <TouchableOpacity
                style={styles.filterImgStyle}
                onPress={() => {}}>
                <Image
                  style={styles.filterImage}
                  source={require('../../assets/images/filter.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.recentTitleContainer}>
              <Text style={styles.recentTitleText}>{Strings.recent}</Text>
            </View>
            <View style={{flex: 1}}>
              <FlatList
                data={archiveBlackBookData}
                keyExtractor={item => item.id}
                renderItem={blackBookRenderItem}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
          {talentModalVisible && (
            <TalentDetailModal
              modalVisible={talentModalVisible}
              closeModal={closeModal}
              selectTalent={selectTalent}
            />
          )}
          {addToBlackbookModalVisible && (
            <AddToBlackbook
              modalVisible={addToBlackbookModalVisible}
              closeModal={closeModal}
              selectTalenttoAdd={selectTalenttoAdd}
            />
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ArchiveBlackBookScreen;
