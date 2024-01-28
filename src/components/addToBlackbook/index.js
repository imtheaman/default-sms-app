import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import Strings from '../../constant/Strings';
import {styles} from './style';
import {FontFamily} from '../../constant/Fonts';
import {useNavigation} from '@react-navigation/native';
import {GetShowreelData} from '../../redux/slices/profileScreenSlice';
import {useSelector, useDispatch} from 'react-redux';
import {AddBlackBookApi} from '../../redux/slices/blackbookSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddToBlackbook = props => {
  const Width = Dimensions.get('window').width;
  const Height = Dimensions.get('window').height;

  const remark = [
    {id: 1, label: 'Good'},
    {id: 2, label: 'Watch out'},
    {id: 3, label: 'Work soon'},
    {id: 4, label: 'Spotlight'},
  ];

  const [selectedButton, setSelectedButton] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const [note, setNote] = useState('');
  const [tagFilm, setTagFilm] = useState(false);
  // const [tagStates, setTagStates] = useState(movies.map(() => false));
  const [showreelsData, setShowreelsData] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedRating, setSelectedRating] = useState();
  const [selectedFilmIds, setSelectedFilmIds] = useState([]);

  const maxCharacters = 500;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const showreelData = useSelector(
    state => state.profileApi.getShowReelData.data,
  );

  const fullShowreelData = showreelData?.data;

  useEffect(() => {
    console.log('BlackBook Check', props.selectTalenttoAdd);
    console.log('Active Tab Changed:--------------------=======>', activeTab);
    // getShowreelTalentuserApi();
  }, [activeTab]);

  useEffect(() => {
    getShowreelTalentuserApi();
  }, []);

  useEffect(() => {
    if (showreelData !== null) {
      console.log('Talent data is available:', showreelData);
      setShowreelsData(fullShowreelData);
    }
  }, [showreelData]);

  const onChangeNoteInput = text => {
    if (text.length <= maxCharacters) {
      setNote(text);
    }
  };

  const handleButtonPress = buttonIndex => {
    setSelectedButton(buttonIndex);
    setSelectedRating(remark[buttonIndex]?.label);
    console.log(
      'Check value of Rating',
      buttonIndex,
      remark[buttonIndex]?.label,
    );
  };

  const handleTabPress = () => {
    const newActiveTab = activeTab + 1;
    setActiveTab(newActiveTab);
    console.log('New Active Tab:--------------==============>', newActiveTab);
  };

  //=====================GET-TALENT-SHOWREEL-USER-API====================//
  const getShowreelTalentuserApi = async () => {
    setLoading(true);
    try {
      const userId = props.selectTalenttoAdd.id;
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
            Alert.alert(action.payload.message);
            console.error(
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

  //=====================ON-ADD-BLACKBOOK-API====================//

  const onAddBlackBookPostApi = async selectedId => {
    setLoading(true);
    const userId = await AsyncStorage.getItem('userId');
    const postData = {
      owner_id: userId,
      bookmark_id: props.selectTalenttoAdd.id,
      rating: selectedRating,
      notes: note,
      film_ids: [],
    };
    console.log('Data Check', postData);
    dispatch(AddBlackBookApi(postData))
      .then(action => {
        if (action.type === 'AddBlackBook/fulfilled') {
          console.log('Add BlackBook API Success:----------->', action.payload);
          setLoading(false);
          props.closeModal();
        } else {
          console.error('Add BlackBook API Error:----------->', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  const handleBackTabPress = () => {
    const newActiveTab = activeTab - 1;
    if (newActiveTab >= 0) {
      setActiveTab(newActiveTab);
    } else {
      props.closeModal();
    }
    console.log('New Active Tab:', newActiveTab);
  };

  const toggleTag = index => {
    setTagStates(prevStates => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  const renderProducerItem = ({item, index}) => (
    <View style={styles.listContainer}>
      <View style={styles.listImageContainer}>
        <ImageBackground
          style={styles.renderImgStyle}
          source={{uri: item.image}}>
          <Image source={require('../../assets/images/play.png')} />
        </ImageBackground>
      </View>
      <View style={styles.renderTitleContainer}>
        <Text style={styles.renderNameText}>{item.brand}</Text>
        <Text
          style={
            styles.renderPlaceText
          }>{`${item.house} | ${item.director}`}</Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 10,
            fontFamily: FontFamily.regular,
          }}>
          {item.duration}
        </Text>
        <TouchableOpacity
          onPress={() => toggleTag(index)}
          style={
            tagStates[index]
              ? styles.tagViewCrewContainer
              : styles.viewCrewContainer
          }>
          <Text style={styles.viewcrewText}>
            {tagStates[index] ? 'UnTag film' : 'Tag film'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderRemarkItem = ({item, index}) => {
    return (
      <View>
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
            {`${item.id}. ${item.label}`}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}>
      <ScrollView style={styles.scrollContainer} bounces={false}>
        <View style={styles.mainContainer}>
          <ImageBackground
            style={styles.scrollContainer}
            source={require('../../assets/images/background.png')}>
            <View style={styles.imgContainer}>
              <ImageBackground
                source={{
                  uri:
                    'https://dev.touch.black' +
                    props.selectTalenttoAdd.profile_picture_url,
                }}
                style={styles.imgStyle}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    top: 10,
                    paddingHorizontal: 10,
                    // backgroundColor: 'red'
                  }}>
                  <TouchableOpacity
                    hitSlop={{bottom: 10, left: 10, right: 10, top: 10}}
                    style={styles.backButtonTouchStyle}
                    onPress={() => handleBackTabPress()}>
                    <Image
                      source={require('../../assets/images/leftArrow.png')}
                      style={styles.closeImgStyle}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.closeImgContainer}
                    onPress={() => props.closeModal()}>
                    <Image
                      source={require('../../assets/images/xmark.png')}
                      style={styles.closeImgStyle}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
            <View
              style={{
                flex: 1,
                marginVertical: 16,
                paddingHorizontal: 20,
              }}>
              {activeTab === 0 ? (
                <View style={{}}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.halfDividerSelect} />
                    <View style={styles.halfDivider} />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Text style={styles.addBlackBookText}>
                      Add to Black Book
                    </Text>
                    <TouchableOpacity
                      style={styles.nextButtonContainer}
                      onPress={() => handleTabPress()}>
                      <Text style={styles.nextText}>{Strings.next}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginBottom: 30}}>
                    <Text style={styles.tagFilmText}>Tag flims</Text>
                  </View>
                  <View style={{marginVertical: 10}}>
                    <View style={styles.filterContainer}>
                      <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : null}
                        style={{flex: 1}}>
                        <View style={[styles.searchContainer]}>
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
                      </KeyboardAvoidingView>
                    </View>
                  </View>
                  <View style={styles.categoryFilterContainer}>
                    <FlatList
                      data={showreelsData}
                      renderItem={({item, index}) =>
                        renderProducerItem({item, index})
                      }
                      keyExtractor={item => item.id}
                      showsVerticalScrollIndicator={false}
                    />
                  </View>
                </View>
              ) : null}

              {activeTab === 1 ? (
                <View style={{}}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.SelectFirsthalfDividerSelect} />
                    <View style={styles.SelectFirsthalfDivider} />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Text style={styles.addBlackBookText}>
                      Add to Black Book
                    </Text>
                    <TouchableOpacity
                      style={styles.nextButtonContainer}
                      onPress={() => handleTabPress()}>
                      <Text style={styles.nextText}>{Strings.next}</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View style={{marginBottom: 30}}>
                      <Text style={styles.tagFilmText}>Mark this talent</Text>
                    </View>
                    <View style={styles.categoryFilterContainer}>
                      <FlatList
                        data={remark}
                        renderItem={renderRemarkItem}
                        keyExtractor={item => item.id}
                        numColumns={3}
                      />
                    </View>
                  </View>
                </View>
              ) : null}

              {activeTab === 2 ? (
                <View style={{height: Height}}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.completeDividerSelect} />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Text style={styles.addBlackBookText}>
                      Add to Black Book
                    </Text>
                    <TouchableOpacity
                      style={styles.nextButtonContainer}
                      onPress={() => onAddBlackBookPostApi()}
                      // onPress={() => navigation.navigate('Black Book')}
                    >
                      <Text style={styles.nextText}>{'Submit'}</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View style={{marginBottom: 24}}>
                      <Text style={styles.tagFilmText}>Write a note</Text>
                    </View>
                    <View style={styles.finalSubmitContainer}>
                      <TextInput
                        value={note}
                        style={styles.noteTextInput}
                        multiline={true}
                        maxLength={maxCharacters}
                        textAlignVertical="top"
                        onChangeText={text => onChangeNoteInput(text)}
                        placeholderTextColor="#A9A9A9"
                        placeholder={`What did you like?\nFor example, I love the lightning in the kitchen shot`}
                      />
                    </View>
                    <View
                      style={{
                        alignItems: 'flex-end',
                        paddingVertical: 8,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 14,
                          fontFamily: FontFamily.regular,
                        }}>
                        {`${note.length} / ${maxCharacters}`}{' '}
                      </Text>
                    </View>
                  </View>
                </View>
              ) : null}
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default AddToBlackbook;
