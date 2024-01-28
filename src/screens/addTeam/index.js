import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Header from '../../components/header';
import Strings from '../../constant/Strings';
import {
  GetFetchMemberApiData,
  ManageMemberChatApi,
  deleteTeamMemberApi,
} from '../../redux/slices/manageTeam';
import { styles } from './style';
import Loading from '../../components/loadingIndicator';

const AddTeamScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const teamMemberData = useSelector(
    state => state.manageTeamApi.fetchMember.data,
  );

  const [isEnabled, setIsEnabled] = useState({});
  const [loading, setLoading] = useState(false);
  const [teamList, setTeamList] = useState();

  useEffect(() => {
    getTeamMemberApi();
    const takentTeamMember = navigation.addListener('focus', () => {
      getTeamMemberApi();
    });
    return takentTeamMember;
  }, []);

  useEffect(() => {
    if (teamMemberData && teamMemberData?.data) {
      setTeamList(teamMemberData?.data);
      const initialEnabledState = {};
      teamMemberData.data.forEach(member => {
        initialEnabledState[member.id] = member.message_access_allowed;
      });
      console.log('Object Check', initialEnabledState);
      setIsEnabled(initialEnabledState);
    }
  }, [teamMemberData]);

  //=====================GET-TEAM-MEMBER-API====================//
  const getTeamMemberApi = async () => {
    setLoading(true);
    dispatch(GetFetchMemberApiData())
      .then(action => {
        if (action.type === 'teamMemberGet/fulfilled') {
          console.log(
            'Get Team Member API Success:----------->',
            action.payload,
          );
          setLoading(false);
        } else {
        //   Alert.alert(
        //     (action.payload.message ),
        // );       
             console.error('Get Team Member API Error:----------->', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  //=====================POST-TEAM-MEMBER-MANAGE-MESSAGE-ACCESS-API====================//
  const manageMessageAccessApi = async (itemId, newSwitchState) => {
    setLoading(true);
    const postData = {
      user_id: itemId,
      message_access_allowed: newSwitchState ? 'true' : 'false',
    };
    dispatch(ManageMemberChatApi(postData))
      .then(action => {
        console.log('Mesaage ACCESS=====', postData);
        if (action.type === 'messageAccess/fulfilled') {
          console.log('Manage Message Access API Success:----------->', action);
          getTeamMemberApi();
          setLoading(false);
        } else {
          Alert.alert(
            (action.payload.message ),
        );            console.error('Manage Message Access API Error:----------->', action);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  //=====================DELETE-TEAM-MEMBER-API====================//
  const onDeleteTeamMember = itemId => {
    setLoading(true);
    const deleteData = {
      user_id: itemId,
    };
    console.log('showreels Add data-=-=-=-', deleteData);
    dispatch(deleteTeamMemberApi(deleteData))
      .then(action => {
        if (action.type === 'deleteTeamMember/fulfilled') {
          console.log(
            'Delete Team Member Post API Success:----------->',
            action.payload,
          );
          getTeamMemberApi();
          setLoading(false);
        } else {
          console.error(
            'Delete Team Member Post API Error:----------->',
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

  const toggleSwitch = itemId => {
    const newSwitchState = !isEnabled[itemId];

    setIsEnabled(prevState => ({
      ...prevState,
      [itemId]: newSwitchState,
    }));
    console.log('Check params in method', itemId, newSwitchState);
    manageMessageAccessApi(itemId, newSwitchState);
  };

  const handleSwipeStart = itemId => {};

  const handleSwipeRelease = itemId => {};

  const handleDelete = itemId => {
    console.log('delete API ID here -=-=-=-=-=->>', itemId);
    Alert.alert('Confirmation', 'Are you sure you want to delete this film?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => onDeleteTeamMember(itemId),
      },
    ]);
  };

  const renderItem = ({item}) => {
    const rightButtons = [
      <TouchableOpacity
        key="delete"
        style={[styles.deleteButton, {backgroundColor: '#FD4340'}]}
        onPress={() => handleDelete(item.id)}>
        <Image source={require('../../assets/images/deleteIcon.png')} />
      </TouchableOpacity>,
    ];

    return (
      <Swipeable
        rightButtons={rightButtons}
        onSwipeStart={() => handleSwipeStart()}
        onSwipeRelease={() => handleSwipeRelease()}>
        <View>
          <View style={styles.renderContainer}>
            <View>
              {item.profile_picture_url ?<Image
                source={{uri: item.profile_picture_url}}
                style={styles.profileImgStyle}
              /> : <Image
              source={require('../../assets/images/user.png')}
              style={[styles.profileImgStyle, {tintColor: '#FFFFFF'}]}
            />}
            </View>
            <View style={styles.renderTextContainer}>
              <Text
                style={
                  styles.profileNameText
                }>{`${item.first_name} ${item.last_name}`}</Text>
              <Text style={styles.viewcrewText}>{Strings.viewMessages}</Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#65C366'}}
              thumbColor={isEnabled ? '#fffff' : '#f4f3f4'}
              onValueChange={() => toggleSwitch(item.id)}
              value={isEnabled[item.id]}
            />
          </View>
          <View style={styles.divider} />
        </View>
      </Swipeable>
    );
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          title={Strings.manageTeam}
          type={'headerIcon'}
          navigation={navigation}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            marginTop: Platform.OS === 'ios' ? 0 : 15,
          }}>
          <View style={styles.backIconContainer}></View>
          <View style={styles.flatListContainer}>
            <FlatList
              data={teamList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <Button
            title={Strings.addTeamMember}
            onPress={() => navigation.navigate('AddTeamMemberScreen')}
          />
        </View>
        <Loading isLoading={loading} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AddTeamScreen;
