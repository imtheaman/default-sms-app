import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/header';
import Loading from '../../components/loadingIndicator';
import Strings from '../../constant/Strings';
import {
  AddTeamMemberApi,
  GetTalentApiData,
} from '../../redux/slices/manageTeam';
import {styles} from './style';

const AddTeamMemberScreen = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const talentData = useSelector(state => state.manageTeamApi.fetchData.data);

  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTalentInput, setSearchTalentInput] = useState('');
  const [filteredTalents, setFilterTalents] = useState();

  const teamList = [
    {
      id: 1,
      profile:
        'https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ=',
      profileName: 'Harsha Roa',
    },
    {
      id: 2,
      profile:
        'https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?b=1&s=612x612&w=0&k=20&c=j6JFqJNLKTE7ubhZUsYeTcKh5_5nHgVCvh9qg7f5KzI=',
      profileName: 'Helen Ryan',
    },
  ];

  const updateFilteredTalent = newDistrictData => {
    if (newDistrictData !== null) {
      setFilterTalents(talentData);
    }
  };

  useEffect(() => {
    console.log('Value Check for Talent ++++++', talentData);
    updateFilteredTalent(talentData);
  }, [talentData]);

  //=====================GET-TALENT-API====================//
  const getTalentApi = async text => {
    setLoading(true);
    const queryParams = {
      q: text,
    };
    dispatch(GetTalentApiData(queryParams))
      .then(action => {
        if (action.type === 'talentGet/fulfilled') {
          console.log('Get Talent API Success:==============>', action.payload);
          setLoading(false);
        } else {
          Alert.alert(
            (action.payload.message ),
        );            console.error('Get Talent API Error:==============>', action.error);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  //=====================ON-ADD-TEAM-MEMBER-API====================//

  const onAddMemberPostApi = async selectedId => {
    setLoading(true);
    const postData = {
      user_id: selectedId,
    };
    dispatch(AddTeamMemberApi(postData))
      .then(action => {
        if (action.type === 'AddTeamMember/fulfilled') {
          console.log('Add Team Member API Success:----------->', action);
          setLoading(false);
          navigation.goBack();
        } else {
        //   Alert.alert(
        //     (action.payload.message ),
        // );       
             console.error('Add Team Member API Error:----------->', action);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Dispatch Error:', error);
        setLoading(false);
      });
  };

  const onChangeHandle = text => {
    setSearchTalentInput(text);
    getTalentApi(text);
  };

  const onSelectTalent = talent => {
    setSelectedTeamMember(talent);
    onAddMemberPostApi(talent);
    setFilterTalents();
    setSearchTalentInput('');
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.renderContainer}>
          <View>
            {'https://dev.touch.black' + item.profile_picture_url ? (
              <Image
                source={{
                  uri: 'https://dev.touch.black' + item.profile_picture_url,
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
          <View style={styles.renderDetailContainer}>
            <Text
              style={
                styles.profileNameText
              }>{`${item.first_name} ${item.last_name}`}</Text>
            <TouchableOpacity
              style={styles.viewCrewContainer}
              onPress={() => onSelectTalent(item.id)}>
              <Text
                style={
                  styles.viewcrewText
                }>{`${Strings.add} ${item.first_name} ${item.last_name}`}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    );
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          title={Strings.addTeamMember}
          type={'headerIcon'}
          navigation={navigation}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            marginTop: Platform.OS === 'ios' ? 0 : 15,
          }}>
          <View style={styles.filterContainer}>
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
                value={searchTalentInput}
                placeholder={Strings.searchPhonePlaceholder}
                placeholderTextColor={'#E0E0E0'}
                style={styles.searchInput}
                onChangeText={txt => onChangeHandle(txt)}
              />
            </View>
          </View>
          <View>
            <Text style={styles.searchText}>{Strings.searchResult}</Text>
          </View>
          <FlatList
            data={filteredTalents}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Loading isLoading={loading} />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AddTeamMemberScreen;
