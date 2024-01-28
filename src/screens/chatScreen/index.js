import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/loadingIndicator';
import { FontFamily } from '../../constant/Fonts';
import {
  FetchConversations,
  MarkReadMessageApi,
  SendMessageApi,
} from '../../redux/slices/messageSlice';
import { styles } from './style';

const ChatScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const dispatch = useDispatch();

  const conversationsId = item.id;

  console.log('check convoD =-=-=-=-', conversationsId);

  const fetchData = useSelector(state => state.messageApi.fetchMessage.data);
  const markData = useSelector(state => state.messageApi.markMessageData.data);
  const userChatHistory = fetchData;
  const messageReadData = userChatHistory?.data?.map(item => item.message_id);
  console.log('check user chat history', userChatHistory?.data);
  console.log(
    'Check User Message Id =-=-=--==>',
    userChatHistory?.data?.map(item => item.message_id),
  );
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [listMessages, setListMessages] = useState();
  const [selfId, setSelfId] = useState('');
  const [messageId, setMesaageId] = useState();
  const [page, setPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  console.log('check item@@@@@@', item);

  useEffect(() => {
    console.log('fetchData:', fetchData);
    console.log('userChatHistory?.data:', userChatHistory?.data);
    console.log('messageId:', messageId);
    console.log('check messge id hree==-=-=-=-=-=->>', messageReadData);
    markMessageReadApi(messageId)
    if (fetchData !== null) {
      setListMessages(userChatHistory?.data);
      const updatedMessageIds = userChatHistory?.data?.map(
        item => item.message_id,
      );
      setMesaageId(updatedMessageIds);
    }
  }, [fetchData, userChatHistory?.data]);

  console.log('checkdatahere-=-=-=-=-=-=-==>>>>', messageId);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        setSelfId(userId || '');
        console.log('Retrieved userId:', userId);
      } catch (error) {
        console.error('Error fetching userId:', error);
      }
    };
    fetchUserId();
    getFetchConversation();
  }, []);
  //=====================GET-FETCH-CONVERSATION-API====================//
  const getFetchConversation = async pageNumber => {
    setLoading(true);
    try {
      const userId = await AsyncStorage.getItem('userId');
      console.log('check set userid-=-=-', userId);
      const conversationId = await conversationsId;
      console.log(
        'check user ID here for showreel api-==-=-=-=-=->>',
        userId,
        conversationId,
      );
      console.log('&&&&&&&&&&&&&&&&&&&&&^^^^^^^', pageNumber)
      dispatch(FetchConversations({ userId, conversationId, page: pageNumber }))
        .then(action => {
          // console.log('Page Number Check', page);
          if (action.type === 'fetchConverstions/fulfilled') {
            console.log(
              'Get Fetch converstion API Success:----------->',
              JSON.stringify(action.payload),
            );
            console.log('check payload here -=-=-=-', action?.payload?.data);
            const message = action.payload?.data?.map(
              message => message.message_id,
            );
            setMesaageId(message);
            console.log('check message id here-=-=-=->>', message);

            // const updatedUsers = [...listMessages, ...action.payload?.data];
            // setListMessages(updatedUsers);

            // const hasMore = action.payload?.data.length > 0;
            // setHasMoreItems(hasMore);

            setLoading(false);
          } else {
            Alert.alert(
              (action.payload.message ),
          );              console.error(
              'Get Fetch converstion API Error:----------->',
              action.error,
            );
            setLoading(false);
          }
        })
        .catch(error => {
          console.error('Dispatch Error Check:', error);
          setLoading(false);
        });
    } catch (error) {
      console.error('AsyncStorage Error:', error);
      setLoading(false);
    }
  };

  // const loadMoreUsers = () => {
  //   if (!loading && hasMoreItems) {
  //     const updatedPage = page + 1;
  //     setPage(updatedPage);
  //     getFetchConversation(updatedPage || 1);
  //   }
  // };

  const onchangeMessage = txt => {
    if (txt.length === 1 && txt.trim() === '') {
      setText('');
    } else {
      setText(txt);
    }
  };

  const onSendMessage = async () => {
    if (text === '') {
    } else {
      const userId = await AsyncStorage.getItem('userId');
      console.log('check conversation id==-=-=-=-=-=-', item.id);
      const messageData = {
        conversation_id: conversationsId,
        owner_id: userId,
        content: text,
      };
      dispatch(SendMessageApi(messageData))
        .then(action => {
          if (action.type === 'sendMessage/fulfilled') {
            console.log(
              'Send Message API Success:----------->',
              action.payload,
            );
            setText('');
            Keyboard.dismiss();
            getFetchConversation();
            // console.log('Console data check', action.payload);
          } else {
            Alert.alert(
              (action.payload.message ),
          );              console.error('Send Message API Error:----------->', action.error);
          }
        })
        .catch(error => {
          console.error('Dispatch Error:', error);
        });
    }
  };

  //=====================MARK-MESSAGE-READ-API====================//
  const markMessageReadApi = async messageId => {
    const userId = await AsyncStorage.getItem('userId');
    const secondPartyId = item?.party2_id;
    console.log('check item here-=-=-=--=>>>', secondPartyId);
    console.log('check state here marks one -=-=-=-=', messageId);
    const postData = {
      owner_id: secondPartyId,
      message_ids: messageId,
    };
    dispatch(MarkReadMessageApi(postData))
      .then(action => {
        if (action.type === 'markMessage/fulfilled') {
          console.log(
            'Mark Message read API Success:----------->',
            JSON.stringify(action.payload),
          );
        } else {
          Alert.alert(
            (action.payload.message ),
        );            console.error(
            'Mark Message read API Error:----------->',
            action.error,
          );
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
      });
  };

  const chatHeader = () => {
    return (
      <View style={styles.mainHeaderContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
            onPress={() => navigation.goBack()}>
            <Image
              style={styles.backImageContainer}
              source={require('../../assets/images/dropRightWhite.png')}
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: item.reciever_profile_picture,
            }}
            style={styles.profileImgStyle}
          />
          <View style={{ marginLeft: 10, paddingHorizontal: 8 }}>
            <Text style={styles.profileNameText}>{item.reciever_name}</Text>
            <Text style={styles.lastSeenText}>{'Last active: 10 sec ago'}</Text>
          </View>
        </View>
      </View>
    );
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

    const formattedDate = `${date.getDate()}/${date.getMonth() + 1
      }/${date.getFullYear()}`;
    return formattedDate;
  };

  const renderTalentChat = item => {
    // console.log('chat item-=-=-=-=-=-=-=-=->>', item);
    let message = item?.content;
    let account_id = item?.sender_id;
    let read_Time = item?.message_reads?.map(read => read.created_at);
    console.log('check read time here-=-=-=-=-=>>', formatDate(read_Time));
    return (
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        {account_id == selfId ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  padding: 8,
                  borderRadius: 18,
                  borderBottomRightRadius: 0,
                  right: 0,
                  backgroundColor: '#007AFF',
                  maxWidth: '100%',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontFamily: FontFamily.regular,
                  }}>
                  {message}
                </Text>
              </TouchableOpacity>
            </View>
            {read_Time.length >= 1 && (
              <Text
                style={{
                  color: '#FFFFFF99',
                  textAlign: 'right',
                  fontFamily: FontFamily.regular,
                  fontSize: 11,
                }}>{`Read ${formatDate(read_Time)}`}</Text>
            )}
          </>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
              justifyContent: 'flex-start',
            }}>
            <View
              style={{
                alignItems: 'center',
                padding: 8,
                borderRadius: 18,
                borderBottomLeftRadius: 0,
                backgroundColor: 'white',
                maxWidth: '100%',
                left: 0,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 17,
                  fontFamily: FontFamily.regular,
                }}>
                {message}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      {chatHeader()}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        style={styles.keyBoardAvoidCntainer}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <FlatList
                // data={userChatHistory?.data}
                data={listMessages}
                renderItem={({ item }) => renderTalentChat(item)}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                inverted
                bounces
              // onEndReached={loadMoreUsers}
              // onEndReachedThreshold={0.5}
              />
            </View>
            <View style={styles.bottomContainer}>
              <View style={{ width: '90%' }}>
                <TextInput
                  value={text}
                  placeholder="Type a message"
                  placeholderTextColor={'#00000099'}
                  style={styles.messageInput}
                  // multiline={true}
                  maxLength={1000}
                  numberOfLines={3}
                  onChangeText={txt => onchangeMessage(txt)}
                />
              </View>
              <TouchableOpacity
                onPress={() => onSendMessage()}
                hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
                style={{ paddingHorizontal: 8 }}>
                <Image source={require('../../assets/images/sendIcon.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <Loading isLoading={loading} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ChatScreen;
