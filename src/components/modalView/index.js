import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { styles } from './style';
import AddToBlackbook from '../addToBlackbook';

const FilmDetailModal = props => {
  const movies = [
    {
      id: 1,
      name: 'Name',
      place: 'Mumbai',
      image:
        'https://cdn.pixabay.com/photo/2018/01/20/13/32/human-3094550_1280.jpg',
      brand: 'Brand Name',
      house: 'Production House',
      director: 'Director Name',
      dop: 'Director of Photography(DOP)',
      duration: '2.36',
    },
    {
      id: 2,
      name: 'Name',
      place: 'Mumbai',
      image:
        'https://cdn.pixabay.com/photo/2018/01/04/08/04/portrait-3060106_1280.jpg',
      brand: 'Brand Name',
      house: 'Production House',
      director: 'Director Name',
      dop: 'Director of Photography(DOP)',
      duration: '2.36',
    },
    {
      id: 3,
      name: 'Name',
      place: 'Mumbai',
      image:
        'https://cdn.pixabay.com/photo/2016/07/11/01/06/personification-1508890_1280.jpg',
      brand: 'Brand Name',
      house: 'Production House',
      director: 'Director Name',
      dop: 'Director of Photography(DOP)',
      duration: '2.36',
    },
    {
      id: 4,
      name: 'Name',
      place: 'Mumbai',
      image:
        'https://cdn.pixabay.com/photo/2023/10/12/16/09/ai-generated-8311186_1280.png',
      brand: 'Brand Name',
      house: 'Production House',
      director: 'Director Name',
      dop: 'Director of Photography(DOP)',
      duration: '2.36',
    },
    {
      id: 5,
      name: 'Name',
      place: 'Mumbai',
      image:
        'https://cdn.pixabay.com/photo/2017/07/26/06/31/road-2540632_1280.jpg',
      brand: 'Brand Name',
      house: 'Production House',
      director: 'Director Name',
      dop: 'Director of Photography(DOP)',
      duration: '2.36',
    },
    {
      id: 6,
      name: 'Name',
      place: 'Mumbai',
      image:
        'https://cdn.pixabay.com/photo/2016/07/11/01/06/personification-1508890_1280.jpg',
      brand: 'Brand Name',
      house: 'Production House',
      director: 'Director Name',
      dop: 'Director of Photography(DOP)',
      duration: '2.36',
    },
    {
      id: 7,
      name: 'Name',
      place: 'Mumbai',
      image:
        'https://cdn.pixabay.com/photo/2023/10/12/16/09/ai-generated-8311186_1280.png',
      brand: 'Brand Name',
      house: 'Production House',
      director: 'Director Name',
      dop: 'Director of Photography(DOP)',
      duration: '2.36',
    },
  ];

  useEffect(() => {
    console.log('Overall', props.selectedMovieImage);
  }, []);

  const [talentModalVisible, setTalentModalVisible] = useState(false);
  const [selectTalent, setSelectTalent] = useState(null);
  const [addToBlackbookModalVisible, setAddToBlackbookModalVisible] =
    useState(false);
  const [selectTalenttoAdd, setSelectTalentToAdd] = useState(null);

  const modalHandler = talentDetails => {
    setSelectTalent(talentDetails);
    setTalentModalVisible(!talentModalVisible);
  };

  const closeModal = () => {
    setTalentModalVisible(false);
    setAddToBlackbookModalVisible(false);
  };

  const handleAddToBlackbookModal = talentDetails => {
    console.log('Check Modal UUUDDD');
    setSelectTalentToAdd(talentDetails);
    setAddToBlackbookModalVisible(!addToBlackbookModalVisible);
  };

  const renderProducerItem = ({ item }) => {
    return (
      <View style={styles.listContainer}>
        <View style={styles.listImageContainer}>
          <Image
            style={[
              styles.renderImgStyle,
              { borderTopLeftRadius: 30, borderBottomLeftRadius: 30 },
            ]}
            source={{ uri: item.image }}
          />
        </View>
        <View style={styles.renderTitleContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.renderNameText}>{item.name}</Text>
            <Image source={require('../../assets/images/connectFirst.png')} />
          </View>
          <Text style={styles.renderPlaceText}>{item.dop}</Text>
          <Text style={styles.renderDopText}>{item.place}</Text>
          <TouchableOpacity
            style={styles.viewCrewContainer}
            onPress={() => modalHandler(item)}>
            <Text style={styles.viewcrewText}>View details</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          style={{ bottom: 11 }}
          onPress={() => handleAddToBlackbookModal(item)}>
          <Image
            source={require('../../assets/images/bookmark.png')}
            style={styles.bookmarkImgStyle}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal
      style={{ flex: 1 }}
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          bounces={false}>
          <View style={styles.mainContainer}>
            <ImageBackground
              style={{ flex: 1 }}
              source={require('../../assets/images/background.png')}>
              <View style={styles.imgContainer}>
                <ImageBackground
                  source={{ uri: props.selectedMovieImage.image }}
                  style={styles.imgStyle}>
                  <TouchableOpacity
                    style={styles.closeImgContainer}
                    onPress={() => props.closeModal()}>
                    <Image
                      source={require('../../assets/images/xmark.png')}
                      style={styles.closeImgStyle}
                    />
                  </TouchableOpacity>
                  <Image source={require('../../assets/images/play.png')} />
                </ImageBackground>
                <View style={{ paddingHorizontal: 25 }}>
                  <View style={styles.titleContainer}>
                    <View>
                      <Text style={styles.nameText}>
                        {props.selectedMovieImage.brand}
                      </Text>
                      <Text style={styles.placeText}>
                        {props.selectedMovieImage.director}
                      </Text>
                      <Text style={styles.placeText}>
                        {props.selectedMovieImage.duration}
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <Image
                        source={require('../../assets/images/shareIcon.png')}
                        style={styles.shareImgIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.fiterTitleContainer}>
                    <Text style={styles.fiterTitleText}>Crew</Text>
                  </View>
                </View>
              </View>

              <View style={styles.flatListContainer}>
                <FlatList
                  data={movies}
                  renderItem={renderProducerItem}
                  keyExtractor={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              </View>
              {addToBlackbookModalVisible && (
                <AddToBlackbook
                  modalVisible={addToBlackbookModalVisible}
                  closeModal={closeModal}
                  selectTalenttoAdd={selectTalenttoAdd}
                />
              )}
            </ImageBackground>
          </View>
          
        </ScrollView>

    </Modal>
  );
};

export default FilmDetailModal;
