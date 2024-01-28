import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {styles} from './style';
import Loading from '../loadingIndicator';

const LocationModal = props => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(props.Locations);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Array Check%%%%%%%%%%', props.Locations);
    const filtered = props.Locations.filter(location =>
      location.name.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredLocations(filtered);
  }, [searchInput, props.Locations]);

  const LocationRenderItem = ({item, index}) => {
    const handleStateSelection = item => {
      props.onSelectState(item.name);
      Keyboard.dismiss();
    };
    return (
      <TouchableOpacity
        style={styles.listTalentContainer}
        onPress={() => handleStateSelection(item)}>
        <View>
          <Text style={styles.listTalentText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <TouchableOpacity
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
            style={styles.closeImgContainer}
            onPress={() => props.onCloseLocation()}>
            <Image
              source={require('../../assets/images/xmark.png')}
              style={styles.closeImgStyle}
            />
          </TouchableOpacity>
          <KeyboardAvoidingView
            // keyboardVerticalOffset={-200}
            behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <View style={[styles.searchContainer]}>
              <Image
                style={styles.searchImage}
                source={require('../../assets/images/searchBar.png')}
              />
              <TextInput
                placeholder={'Search State...'}
                value={searchInput}
                placeholderTextColor={'grey'}
                style={styles.searchInput}
                onChangeText={text => setSearchInput(text)}
              />
            </View>
          </KeyboardAvoidingView>
            <View style={{flex: 1}}>
              <FlatList
                data={filteredLocations}
                keyExtractor={item => item.id}
                renderItem={LocationRenderItem}
                showsVerticalScrollIndicator={false}
              />
            </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default LocationModal;
