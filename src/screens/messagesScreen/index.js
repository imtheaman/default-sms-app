import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/header';
import {styles} from './style';
import {
  CreateConversationApi,
  GetListOfConversations,
} from '../../redux/slices/messageSlice';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/loadingIndicator';

const MessageScreen = () => {
  const buttons = [
    {label: '1ST'},
    {label: '2ND'},
    {label: '3RD'},
    {label: 'Unread'},
  ];

  const listData = useSelector(state => state.messageApi.listData.data);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedButton, setSelectedButton] = useState(0);
  const [loading, setLoading] = useState(false);
  const [listConversation, setListConversation] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  console.log('list of conversation API Data......', JSON.stringify(listData));
  const fullData = listData?.data?.conversations;

  useEffect(() => {
    getListOfConversation();
    const takentUserProfile = navigation.addListener('focus', () => {
      getListOfConversation();
    });
    return takentUserProfile;
  }, [navigation]);

  useEffect(() => {
    if (listData !== null) {
      setListConversation(fullData);
    }
  }, [listData]);

  //=====================GET-LIST-OF-CONVERSATION-API====================//
  const getListOfConversation = async () => {
    setLoading(true);
    try {
      const userId = await AsyncStorage.getItem('userId');
      console.log('check user ID here for showreel api-==-=-=-=-=->>', userId);
      dispatch(GetListOfConversations({talentId: userId}))
        .then(action => {
          if (action.type === 'listOfConverstion/fulfilled') {
            console.log(
              'Get List of converstion API Success:----------->',
              JSON.stringify(action.payload),
            );
            setLoading(false);
            // const updatedUsers = [
            //   ...listConversation,
            //   ...action.payload?.data?.conversations
            // ];
            // console.log('Cheack UPdated Array',updatedUsers);
            // setListConversation(updatedUsers);
            // const hasMore = action.payload?.data?.conversations?.length > 0;
            // setHasMoreItems(hasMore);
          } else {
            Alert.alert(
              (action.payload.message ),
          );              console.error(
              'Get List of converstion API Error:----------->',
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

  //=====================CREATE-CONVERSATION-API====================//
  const onCreateConverstion = async item => {
    console.log('check item here-=-=-=--=>>>');
    const userId = await AsyncStorage.getItem('userId');
    const secondPartyId = item.party1_id;
    console.log('Check Party 2 id_____$$$$$$$$', secondPartyId);
    const postData = {
      owner_id: userId,
      party1_id: secondPartyId,
      party2_id: userId,
    };
    console.log(
      'second part and first party id -=-=-=-=-=>>',
      userId,
      secondPartyId,
    );
    dispatch(CreateConversationApi(postData))
      .then(action => {
        if (action.type === 'createConversation/fulfilled') {
          console.log(
            'Create Conversation API Success:----------->',
            JSON.stringify(action.payload),
          );
          navigation.navigate('ChatScreen', {item});
        } else {
          Alert.alert(
            (action.payload.message ),
        );            console.error(
            'Create Conversation API Error:----------->',
            action.error,
          );
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
      });
  };

  // const loadMoreUsers = () => {
  //   if (!loading && hasMoreItems) {
  //     const updatedPage = currentPage + 1;
  //     setCurrentPage(updatedPage);
  //     getListOfConversation(updatedPage);
  //   }
  // };

  const handleButtonPress = buttonIndex => {
    setSelectedButton(buttonIndex);
  };

  const formatDate = inputDate => {
    const currentDate = new Date();
    const date = new Date(inputDate);

    if (
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    ) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);
    if (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    ) {
      return 'Yesterday';
    }

    if (date >= yesterday) {
      const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      return daysOfWeek[date.getDay()];
    }

    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    return formattedDate;
  };

  const renderItem = ({item}) => (
    <>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          paddingVertical: 12,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => onCreateConverstion(item)}>
        <View style={{marginRight: 15}}>
          {item.reciever_profile_picture ? (
            <Image
              source={{
                uri: item.reciever_profile_picture,
              }}
              style={styles.profileImgStyle}
            />
          ) : (
            <Image
              source={require('../../assets/images/user.png')}
              style={[styles.profileImgStyle, {tintColor: '#FFFFFF'}]}
            />
          )}
        </View>
        <View style={{bottom: 3}}>
          <Text style={styles.profileNameText}>{item.reciever_name}</Text>
          <Text style={styles.messageText}>
            {item.last_message?.content
              ? `${item.last_message.content.slice(0, 15)}...`
              : 'Message Preview'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            bottom: 9,
          }}>
          <Text style={styles.messageText}>{formatDate(item.updated_at)}</Text>
          <Image
            source={require('../../assets/images/dropRight.png')}
            style={styles.arrowImgStyle}
          />
        </View>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: '#EBEBF54D',
          width: '84%',
          height: 0.5,
          alignSelf: 'flex-end',
        }}
      />
    </>
  );

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{flex: 1}}>
        <Header title={'Messages'} />
        <KeyboardAvoidingView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
            }}>
            <View style={styles.filterContainer}>
              <View style={[styles.searchContainer]}>
                <Image
                  style={styles.searchImage}
                  source={require('../../assets/images/searchBar.png')}
                />
                <TextInput
                  placeholder="Search"
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
            <View style={styles.categoryContainer}>
              {buttons.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.categoryStyle,
                    selectedButton === index ? styles.selectButton : {},
                  ]}
                  onPress={() => handleButtonPress(index)}>
                  <Text
                    style={[
                      styles.categoryText,
                      selectedButton === index ? styles.selectButtonText : {},
                    ]}>
                    {button.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <FlatList
              data={listConversation}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              // onEndReached={loadMoreUsers}
              // onEndReachedThreshold={0.1}
              // ListFooterComponent={loading && <Loading isLoading={loading} />}
            />
          </View>
        </KeyboardAvoidingView>
        <Loading isLoading={loading} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MessageScreen;
