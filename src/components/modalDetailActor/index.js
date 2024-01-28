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
} from 'react-native';
import Strings from '../../constant/Strings';
import {styles} from './style';
import {FontFamily} from '../../constant/Fonts';
import AddToBlackbook from '../addToBlackbook';
import FilmDetailModal from '../modalView';

const TalentDetailModal = props => {
  const movies = [
    {
      id: 1,
      name: 'Name',
      place: 'Mumbai',
      image:
        'https://cdn.pixabay.com/photo/2020/08/14/16/48/chocolate-5488493_1280.jpg',
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
        'https://cdn.pixabay.com/photo/2016/09/30/11/32/vintage-1705055_1280.jpg',
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
        'https://cdn.pixabay.com/photo/2019/02/09/14/01/man-3985195_1280.jpg',
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
        'https://cdn.pixabay.com/photo/2020/05/19/00/21/background-5188867_1280.jpg',
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

  const [activeTab, setActiveTab] = useState(Strings.showReel);
  const [isDropDown, setIsDropDown] = useState(false);
  const [isSecondDropDown, setIsSecondDropDown] = useState(false);
  const [addToBlackbookModalVisible, setAddToBlackbookModalVisible] =
    useState(false);
  const [selectTalenttoAdd, setSelectTalentToAdd] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovieImage, setSelectedMovieImage] = useState(null);

  useEffect(() => {
    console.log('Talet Overall', props.selectTalent);
  }, []);

  const DropDownHandler = () => {
    setIsDropDown(!isDropDown);
  };

  const SecondDropDownHandler = () => {
    setIsSecondDropDown(!isSecondDropDown);
  };

  const handleAddToBlackbookModal = talentDetails => {
    setSelectTalentToAdd(talentDetails);
    setAddToBlackbookModalVisible(!addToBlackbookModalVisible);
  };

  const modalHandler = movieDetails => {
    setSelectedMovieImage(movieDetails);
    setModalVisible(true);
  };

  const closeModal = () => {
    setAddToBlackbookModalVisible(false);
    setModalVisible(false);
  };

  const renderProducerItem = ({item}) => (
    <View style={styles.listContainer}>
      <View style={styles.listImageContainer}>
        <ImageBackground
          style={styles.renderImgStyle}
          source={{uri: item.image}}>
          <Image source={require('../../assets/images/play.png')} />
          <View style={styles.verifiedIconContainer}>
            <Image source={require('../../assets/images/verifyIcon.png')} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.renderTitleContainer}>
        <Text style={styles.renderNameText}>{item.brand}</Text>
        <Text style={styles.renderPlaceText}>{item.house}</Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 10,
            fontFamily: FontFamily.regular,
          }}>
          {item.director}
        </Text>
        <TouchableOpacity
          style={styles.viewCrewContainer}
          onPress={() => modalHandler(item)}>
          <Text style={styles.viewcrewText}>{Strings.viewCrew}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.talentModalVisible}>
      <ScrollView style={styles.scrollContainer} bounces={false}>
        <View style={styles.mainContainer}>
          <ImageBackground
            style={styles.scrollContainer}
            source={require('../../assets/images/background.png')}>
            <View style={styles.imgContainer}>
              <ImageBackground
                source={{uri: props.selectTalent.image}}
                style={styles.imgStyle}>
                <TouchableOpacity
                  style={styles.closeImgContainer}
                  onPress={() => props.closeModal()}>
                  <Image
                    source={require('../../assets/images/xmark.png')}
                    style={styles.closeImgStyle}
                  />
                </TouchableOpacity>
              </ImageBackground>
            </View>
            {addToBlackbookModalVisible && (
              <AddToBlackbook
                modalVisible={addToBlackbookModalVisible}
                closeModal={closeModal}
                selectTalenttoAdd={selectTalenttoAdd}
              />
            )}
            <TouchableOpacity
              onPress={() => handleAddToBlackbookModal(props.selectTalent)}
              style={styles.bookmarkImgContainer}>
              <Image
                source={require('../../assets/images/bookmark.png')}
                style={styles.bookmarkImgStyle}
              />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.nameText}>{props.selectTalent.name}</Text>
                  <Image
                    source={require('../../assets/images/connectFirst.png')}
                  />
                </View>
                <Text style={styles.placeText}>{props.selectTalent.dop}</Text>
                <Text style={styles.placeText}>{props.selectTalent.place}</Text>
              </View>
            </View>
            <View style={styles.contactImageContainer}>
              <TouchableOpacity style={styles.contactIconContainer}>
                <Image
                  source={require('../../assets/images/callIcon.png')}
                  style={styles.shareImgIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactIconContainer}>
                <Image
                  source={require('../../assets/images/chattingIcon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactIconContainer}>
                <Image source={require('../../assets/images/shareIcon.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.tabs}>
              <TouchableOpacity
                style={[
                  styles.tab,
                  activeTab === 'Showreel' && styles.activeTab,
                ]}
                onPress={() => setActiveTab('Showreel')}>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'Showreel' && styles.activeTabText,
                  ]}>
                  {Strings.showReel}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'About' && styles.activeTab]}
                onPress={() => setActiveTab('About')}>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === 'About' && styles.activeTabText,
                  ]}>
                  {Strings.about}
                </Text>
              </TouchableOpacity>
            </View>
            {activeTab === 'Showreel' ? (
              <View style={styles.flatListContainer}>
                <FlatList
                  data={movies}
                  renderItem={renderProducerItem}
                  keyExtractor={item => item.id}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            ) : (
              <View style={styles.aboutMainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <TouchableOpacity onPress={() => DropDownHandler()} style={styles.aboutHeaderContainer}>
                    <View style={styles.bioSecContainer}>
                      <Image
                        source={require('../../assets/images/bioIcon.png')}
                        style={styles.bioImgStyle}
                      />
                      <Text style={styles.bioText}>{Strings.bio}</Text>
                    </View>
                    <View
                      style={styles.dropImgPosContainer}
                      
                      hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
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
                  {isDropDown && (
                    <View style={styles.bioContainer}>
                      <Text style={styles.bioContentText}>
                        {
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nibh at ligula aliquet dapiaculis tempor ligula elementum, semper.'
                        }
                      </Text>
                      <Text style={styles.keyText}>{Strings.prodHouse}</Text>
                      <Text style={styles.valueText}>Brand</Text>
                      <Text style={styles.keyText}>{Strings.experience}</Text>
                      <Text style={styles.valueText}>5+ years</Text>
                      <Text style={styles.keyText}>{Strings.location}</Text>
                      <Text style={styles.valueText}>Soel</Text>
                      <View style={styles.divider} />
                    </View>
                  )}
                  <TouchableOpacity  onPress={() => SecondDropDownHandler()} style={styles.aboutHeaderContainer}>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 20,
                      }}>
                      <Image
                        source={require('../../assets/images/awardIcon.png')}
                        style={styles.awardImgStyle}
                      />
                      <Text style={styles.bioText}>{Strings.awards}</Text>
                    </View>
                    <View
                      style={styles.dropImgPosContainer}
                     
                      hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
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
                      <Text style={styles.keyText}>{Strings.awrardName}</Text>
                      <Text style={styles.yearText}>Category</Text>
                      <Text style={styles.valueText}>2023</Text>
                    </View>
                  )}
                </ScrollView>
              </View>
            )}
            {modalVisible && (
              <FilmDetailModal
                modalVisible={modalVisible}
                closeModal={closeModal}
                selectedMovieImage={selectedMovieImage}
              />
            )}
          </ImageBackground>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default TalentDetailModal;
