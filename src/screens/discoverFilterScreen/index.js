import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import {styles} from './style';
import Slider from '@react-native-community/slider';
import Header from '../../components/header';
import Strings from '../../constant/Strings';

const DiscoverFilterScreen = () => {
  const navigation = useNavigation();

  const [selectTalentType, setSelectTalentType] = useState(false);
  const [selectWorksWith, setSelectWorksWith] = useState(false);
  const [selectRate, setSelectRate] = useState(false);
  const [selectFamilarity, setSelectFamilarity] = useState(false);
  const [selectEducation, setSelectEducation] = useState(false);
  const [selectHomeLocation, setSelectHomeLocation] = useState(false);
  const [selectTypeFilm, setSelectTypeFilm] = useState(false);
  const [selectBrand, setSelectBrand] = useState(false);
  const [selectIndustry, setSelectIndustry] = useState(false);
  const [selectGenre, setSelectGenre] = useState(false);
  const [selectDuration, setSelectDuration] = useState(false);
  const [selectYearRelease, setSelectYearRelease] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState(false);
  const [selectShootLocation, setShootShootLocation] = useState(false);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const TalentTypeDropDownHandler = () => {
    setSelectTalentType(!selectTalentType);
    setSelectWorksWith(false);
    setSelectRate(false);
    setSelectFamilarity(false);
    setSelectEducation(false);
    setSelectHomeLocation(false);
    setSelectTypeFilm(false);
    setSelectBrand(false);
    setSelectIndustry(false);
    setSelectGenre(false);
    setSelectDuration(false);
    setSelectYearRelease(false);
    setSelectLanguage(false);
    setShootShootLocation(false);
  };

  const selectWorksWithDropDownHandler = () => {
    setSelectWorksWith(!selectWorksWith);
    setSelectTalentType(false);
    setSelectRate(false);
    setSelectFamilarity(false);
    setSelectEducation(false);
    setSelectHomeLocation(false);
    setSelectTypeFilm(false);
    setSelectBrand(false);
    setSelectIndustry(false);
    setSelectGenre(false);
    setSelectDuration(false);
    setSelectYearRelease(false);
    setSelectLanguage(false);
    setShootShootLocation(false);
  };

  const selectRateDropDownHandler = () => {
    setSelectRate(!selectRate);
    setSelectTalentType(false);
    setSelectWorksWith(false);
    setSelectFamilarity(false);
    setSelectEducation(false);
    setSelectHomeLocation(false);
    setSelectTypeFilm(false);
    setSelectBrand(false);
    setSelectIndustry(false);
    setSelectGenre(false);
    setSelectDuration(false);
    setSelectYearRelease(false);
    setSelectLanguage(false);
    setShootShootLocation(false);
  };

  const selectFamilarityDropDownHandler = () => {
    setSelectFamilarity(!selectFamilarity);
    setSelectTalentType(false);
    setSelectWorksWith(false);
    setSelectRate(false);
    setSelectEducation(false);
    setSelectHomeLocation(false);
    setSelectTypeFilm(false);
    setSelectBrand(false);
    setSelectIndustry(false);
    setSelectGenre(false);
    setSelectDuration(false);
    setSelectYearRelease(false);
    setSelectLanguage(false);
    setShootShootLocation(false);
  };

  const selectEducationDropDownHandler = () => {
    setSelectEducation(!selectEducation);
    setSelectTalentType(false);
    setSelectWorksWith(false);
    setSelectRate(false);
    setSelectFamilarity(false);
    setSelectHomeLocation(false);
    setSelectTypeFilm(false);
    setSelectBrand(false);
    setSelectIndustry(false);
    setSelectGenre(false);
    setSelectDuration(false);
    setSelectYearRelease(false);
    setSelectLanguage(false);
    setShootShootLocation(false);
  };

  const selectHomeLocationDropDownHandler = () => {
    setSelectHomeLocation(!selectHomeLocation);
    setSelectTalentType(false);
    setSelectWorksWith(false);
    setSelectRate(false);
    setSelectFamilarity(false);
    setSelectEducation(false);
    setSelectTypeFilm(false);
    setSelectBrand(false);
    setSelectIndustry(false);
    setSelectGenre(false);
    setSelectDuration(false);
    setSelectYearRelease(false);
    setSelectLanguage(false);
    setShootShootLocation(false);
  };

  const selectTypeFilmDropDownHandler = () => {
    setSelectTypeFilm(!selectTypeFilm);
    setSelectTalentType(false);
    setSelectWorksWith(false);
    setSelectRate(false);
    setSelectFamilarity(false);
    setSelectEducation(false);
    setSelectHomeLocation(false);
    setSelectBrand(false);
    setSelectIndustry(false);
    setSelectGenre(false);
    setSelectDuration(false);
    setSelectYearRelease(false);
    setSelectLanguage(false);
    setShootShootLocation(false);
  };

  const selectBrandDropDownHandler = () => {
    setSelectBrand(!selectBrand);
    setSelectTalentType(false);
    setSelectWorksWith(false);
    setSelectRate(false);
    setSelectFamilarity(false);
    setSelectEducation(false);
    setSelectHomeLocation(false);
    setSelectTypeFilm(false);
    setSelectIndustry(false);
    setSelectGenre(false);
    setSelectDuration(false);
    setSelectYearRelease(false);
    setSelectLanguage(false);
    setShootShootLocation(false);
  };

  const selectIndustryDropDownHandler = () => {
    setSelectIndustry(!selectIndustry);
    setSelectTalentType(false);
    setSelectWorksWith(false);
    setSelectRate(false);
    setSelectFamilarity(false);
    setSelectEducation(false);
    setSelectHomeLocation(false);
    setSelectTypeFilm(false);
    setSelectBrand(false);
    setSelectGenre(false);
    setSelectDuration(false);
    setSelectYearRelease(false);
    setSelectLanguage(false);
    setShootShootLocation(false);
  };

  const selectGenreDropDownHandler = () => {
    setSelectGenre(!selectGenre);
    setSelectTalentType(false);
    setSelectWorksWith(false);
    setSelectRate(false);
    setSelectFamilarity(false);
    setSelectEducation(false);
    setSelectHomeLocation(false);
    setSelectTypeFilm(false);
    setSelectBrand(false);
    setSelectIndustry(false);
    setSelectDuration(false);
    setSelectYearRelease(false);
    setSelectLanguage(false);
    setShootShootLocation(false);
  };

  const selectDurationDropDownHandler = () => {
    setSelectDuration(!selectDuration);
    setSelectTalentType(false);
    setSelectWorksWith(false);
    setSelectRate(false);
    setSelectFamilarity(false);
    setSelectEducation(false);
    setSelectHomeLocation(false);
    setSelectTypeFilm(false);
    setSelectBrand(false);
    setSelectIndustry(false);
    setSelectGenre(false);
    setSelectYearRelease(false);
    setSelectLanguage(false);
    setShootShootLocation(false);
  };

  const selectYearReleaseDropDownHandler = () => {
    setSelectYearRelease(!selectYearRelease);
    setSelectTalentType(false);
    setSelectWorksWith(false);
    setSelectRate(false);
    setSelectFamilarity(false);
    setSelectEducation(false);
    setSelectHomeLocation(false);
    setSelectTypeFilm(false);
    setSelectBrand(false);
    setSelectIndustry(false);
    setSelectGenre(false);
    setSelectDuration(false);
    setSelectLanguage(false);
    setShootShootLocation(false);
  };

  const selectLanguageDropDownHandler = () => {
    setSelectLanguage(!selectLanguage);
    setSelectTalentType(false);
    setSelectWorksWith(false);
    setSelectRate(false);
    setSelectFamilarity(false);
    setSelectEducation(false);
    setSelectHomeLocation(false);
    setSelectTypeFilm(false);
    setSelectBrand(false);
    setSelectIndustry(false);
    setSelectGenre(false);
    setSelectDuration(false);
    setSelectYearRelease(false);
    setShootShootLocation(false);
  };

  const selectShootLocationDropDownHandler = () => {
    setShootShootLocation(!selectShootLocation);
    setSelectTalentType(false);
    setSelectWorksWith(false);
    setSelectRate(false);
    setSelectFamilarity(false);
    setSelectEducation(false);
    setSelectHomeLocation(false);
    setSelectTypeFilm(false);
    setSelectBrand(false);
    setSelectIndustry(false);
    setSelectGenre(false);
    setSelectDuration(false);
    setSelectYearRelease(false);
    setSelectLanguage(false);
  };

  const [filterCategories, setFilterCategories] = useState([
    {id: 1, category: 'Director', isChecked: false},
    {id: 2, category: 'First AD', isChecked: false},
    {id: 3, category: 'Second AD', isChecked: false},
    {id: 4, category: 'Third AD ', isChecked: false},
    {id: 5, category: 'Fourth AD', isChecked: false},
    {id: 6, category: 'D.A', isChecked: false},
    {id: 7, category: '2nd Unit Director', isChecked: false},
    {id: 8, category: 'Assistant Director', isChecked: false},
    {id: 9, category: 'Executive Producer', isChecked: false},
    {id: 10, category: 'Producer', isChecked: false},
    {id: 11, category: 'Line Producer', isChecked: false},
    {id: 12, category: 'DoP', isChecked: false},
    {id: 13, category: '2nd Unit DoP', isChecked: false},
    {id: 14, category: 'First AC', isChecked: false},
    {id: 15, category: 'Gaffer', isChecked: false},
    {id: 16, category: 'Focus Puller', isChecked: false},
    {id: 17, category: 'Drone Pilot', isChecked: false},
    {id: 18, category: 'Steadicam Operator', isChecked: false},
    {id: 19, category: 'Casting Director', isChecked: false},
    {id: 20, category: 'Casting Assistant', isChecked: false},
    {id: 21, category: 'Location Manager', isChecked: false},
    {id: 22, category: 'Production Designer', isChecked: false},
    {id: 23, category: 'Art Director', isChecked: false},
    {id: 24, category: 'Set Decorator/Prop Stylist', isChecked: false},
    {id: 25, category: 'Art Assistant', isChecked: false},
    {id: 26, category: 'Costume Stylist', isChecked: false},
    {id: 27, category: 'Costume Assistant', isChecked: false},
    {id: 28, category: 'Dressman', isChecked: false},
    {id: 29, category: 'Hair & Make-Up', isChecked: false},
    {id: 30, category: 'Hmu Assistant', isChecked: false},
    {id: 31, category: 'Live Sound', isChecked: false},
    {id: 32, category: 'Storyboard Artist', isChecked: false},
    {id: 33, category: 'Food Stylist', isChecked: false},
    {id: 34, category: 'Pack Maker', isChecked: false},
    {id: 35, category: 'Product Stylist', isChecked: false},
    {id: 36, category: 'Choreographer', isChecked: false},
    {id: 37, category: 'Action Director', isChecked: false},
    {id: 38, category: 'Post Producer', isChecked: false},
    {id: 39, category: 'Offline Editor', isChecked: false},
    {id: 40, category: 'Assistant Editor', isChecked: false},
    {id: 41, category: 'Online Editor', isChecked: false},
    {id: 42, category: 'Online Assistant', isChecked: false},
    {id: 43, category: 'Colourist', isChecked: false},
    {id: 44, category: 'CG/Vfx/Animation', isChecked: false},
    {id: 45, category: 'Music Director', isChecked: false},
    {id: 46, category: 'Sound Engineer', isChecked: false},
    {id: 47, category: 'Voice Over', isChecked: false},
    {id: 48, category: 'Lyrics', isChecked: false},
    {id: 49, category: 'Singer', isChecked: false},
    {id: 50, category: 'Musician', isChecked: false},
    {id: 51, category: 'Photographer', isChecked: false},
    {id: 52, category: 'Photographer Assistant', isChecked: false},
    {id: 53, category: 'Retouching/Photo editor', isChecked: false},
    {id: 54, category: 'Animal Supplier', isChecked: false},
    {id: 55, category: 'Prosthetics/SFX make up', isChecked: false},
  ]);

  const [familarityCategories, setFamilarityCategories] = useState([
    {id: 1, familarityValues: '1st', valueAlias: 'First', isChecked: false},
    {id: 2, familarityValues: '2nd', valueAlias: 'Second', isChecked: false},
    {id: 3, familarityValues: '3rd', valueAlias: 'Third', isChecked: false},
  ]);

  const [industryCategories, setIndustryCategories] = useState([
    {id: 1, industryValue: 'Fashion & Apparel', isChecked: false},
    {id: 2, industryValue: 'Home & Lifestyle', isChecked: false},
    {id: 3, industryValue: 'Beauty - Hair', isChecked: false},
    {id: 4, industryValue: 'Sports', isChecked: false},
    {id: 5, industryValue: 'Automobile ', isChecked: false},
    {id: 6, industryValue: 'FMCG ', isChecked: false},
    {id: 7, industryValue: 'Telecom', isChecked: false},
    {id: 8, industryValue: 'Electronics', isChecked: false},
    {id: 9, industryValue: 'Travel & tourism', isChecked: false},
    {id: 10, industryValue: 'Fitness ', isChecked: false},
    {id: 11, industryValue: 'Gender Neutral', isChecked: false},
    {id: 12, industryValue: 'Beauty - Skin', isChecked: false},
    {id: 13, industryValue: 'Banking, Finance & Insurance', isChecked: false},
    {id: 14, industryValue: 'eCommerce & Retail', isChecked: false},
    {id: 15, industryValue: 'Construction', isChecked: false},
    {id: 16, industryValue: 'Education', isChecked: false},
    {id: 17, industryValue: 'Media & Entertainment', isChecked: false},
    {id: 18, industryValue: 'Jewellery', isChecked: false},
  ]);

  const [typeFilmCategories, settypeFilmCategories] = useState([
    {id: 1, typeOfFilmValue: 'TVC + Digital Ad', isChecked: false},
    {id: 2, typeOfFilmValue: 'Digital Ad', isChecked: false},
    {id: 3, typeOfFilmValue: 'Reels', isChecked: false},
    {id: 4, typeOfFilmValue: 'Animation/CG/VFX', isChecked: false},
    {id: 5, typeOfFilmValue: 'Infomercials', isChecked: false},
    {id: 6, typeOfFilmValue: 'Short', isChecked: false},
    {id: 7, typeOfFilmValue: 'Music video', isChecked: false},
    {id: 8, typeOfFilmValue: 'Documentary', isChecked: false},
    {id: 9, typeOfFilmValue: 'Feature', isChecked: false},
    {id: 10, typeOfFilmValue: 'Series', isChecked: false},
  ]);

  const initialItemsToShow = 3;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
  const [showFullList, setShowFullList] = useState(false);

  const minValue = 5000;
  const maxValue = 3000000;

  const d = new Date();
  const year = d.getFullYear();

  const yearMinValue = 2010;
  const yearMaxValue = year;

  const [sliderValue, setSliderValue] = useState(minValue);
  const [yearSliderValue, setYearSliderValue] = useState(yearMinValue);

  const handleReadMore = () => {
    setItemsToShow(filterCategories.length);
    setShowFullList(true);
  };

  const handleReadLess = () => {
    setItemsToShow(initialItemsToShow);
    setShowFullList(false);
  };

  const TalentDropDownHandler = index => {
    const updatedCategories = filterCategories.map((item, i) => ({
      ...item,
      isChecked: i === index ? !item.isChecked : false,
    }));
    setFilterCategories(updatedCategories);
  };

  const FamilarityDropDownHandler = index => {
    const updatedCategories = [...familarityCategories];
    updatedCategories[index].isChecked = !updatedCategories[index].isChecked;
    setFamilarityCategories(updatedCategories);
  };

  const IndustryDropDownHandler = index => {
    const updatedCategories = [...industryCategories];
    updatedCategories[index].isChecked = !updatedCategories[index].isChecked;
    setIndustryCategories(updatedCategories);
  };

  const FilmTypeDropDownHandler = index => {
    const updatedCategories = [...typeFilmCategories];
    updatedCategories[index].isChecked = !updatedCategories[index].isChecked;
    settypeFilmCategories(updatedCategories);
  };

  const renderTalentTypesItem = ({item, index}) => {
    if (showFullList || index < itemsToShow) {
      return (
        <View style={styles.listTalentContainer}>
          <View>
            <Text style={styles.listTalentText}>{item.category}</Text>
          </View>
          <TouchableOpacity
            style={styles.CheckBoxTouch}
            hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
            onPress={() => TalentDropDownHandler(index)}>
            {!item.isChecked ? (
              <View style={styles.CheckBoxContainer}></View>
            ) : (
              <View style={styles.isCheckBoxContainer}>
                <Image source={require('../../assets/images/check.png')} />
              </View>
            )}
          </TouchableOpacity>
        </View>
      );
    }
  };

  const familarityRenderItem = ({item, index}) => {
    return (
      <View style={styles.listTalentContainer}>
        <View>
          <Text style={styles.listTalentText}>{item.familarityValues}</Text>
        </View>
        <TouchableOpacity
          style={styles.CheckBoxTouch}
          hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
          onPress={() => FamilarityDropDownHandler(index)}>
          {!item.isChecked ? (
            <View style={styles.CheckBoxContainer}></View>
          ) : (
            <View style={styles.isCheckBoxContainer}>
              <Image source={require('../../assets/images/check.png')} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const IndustryRenderItem = ({item, index}) => {
    return (
      <View style={styles.listTalentContainer}>
        <View>
          <Text style={styles.listTalentText}>{item.industryValue}</Text>
        </View>
        <TouchableOpacity
          style={styles.CheckBoxTouch}
          hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
          onPress={() => IndustryDropDownHandler(index)}>
          {!item.isChecked ? (
            <View style={styles.CheckBoxContainer}></View>
          ) : (
            <View style={styles.isCheckBoxContainer}>
              <Image source={require('../../assets/images/check.png')} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const FilmTypeRenderItem = ({item, index}) => {
    return (
      <View style={styles.listTalentContainer}>
        <View>
          <Text style={styles.listTalentText}>{item.typeOfFilmValue}</Text>
        </View>
        <TouchableOpacity
          style={styles.CheckBoxTouch}
          hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
          onPress={() => FilmTypeDropDownHandler(index)}>
          {!item.isChecked ? (
            <View style={styles.CheckBoxContainer}></View>
          ) : (
            <View style={styles.isCheckBoxContainer}>
              <Image source={require('../../assets/images/check.png')} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const filterHeader = () => {
    return (
      <View style={styles.mainHeaderContainer}>
        <View>
          <TouchableOpacity
            hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
            onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/leftIcon.png')} />
          </TouchableOpacity>
          <View>
            <Text style={styles.titleText}>{'Filters'}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      {/* {filterHeader()} */}
      <SafeAreaView style={{flex: 1}}>

      <Header
              title={Strings.filter}
              type={'headerIcon'}
              navigation={navigation}
            />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.keyBoardAvoidCntainer}>
          <View style={{flex: 1}}>
            <ScrollView>
              <View style={styles.filterListContainer}>
                <View style={styles.categoryContainer} />
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity onPress={() => TalentTypeDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>
                          {'Talent Type'}
                        </Text>
                      </View>
                      {!selectTalentType ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                  {selectTalentType ? (
                    <View style={{marginTop: 18}}>
                      <FlatList
                        data={filterCategories}
                        keyExtractor={item => item.id}
                        renderItem={renderTalentTypesItem}
                        showsVerticalScrollIndicator={false}
                      />
                      {itemsToShow < filterCategories.length && (
                        <TouchableOpacity
                          style={styles.readMoreContainer}
                          onPress={
                            showFullList
                              ? () => handleReadLess()
                              : () => handleReadMore()
                          }>
                          <Text style={styles.readMoreText}>
                            {showFullList ? 'Show Less' : 'Show More'}
                          </Text>
                          <Image
                            style={{margin: 6}}
                            source={require('../../assets/images/dropSmall.png')}
                          />
                        </TouchableOpacity>
                      )}
                    </View>
                  ) : (
                    ''
                  )}
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity
                    onPress={() => selectWorksWithDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>
                          {'Works with'}
                        </Text>
                      </View>
                      {/* <TouchableOpacity
                      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}> */}
                      {!selectWorksWith ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity onPress={() => selectRateDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>
                          {'Rate per shoot day'}
                        </Text>
                      </View>
                      {/* <TouchableOpacity
                      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}} */}
                      {/* onPress={() => selectRateDropDownHandler()}> */}
                      {!selectRate ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                  {selectRate ? (
                    <View style={{marginVertical: 15}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}>
                        <Text style={styles.minValueText}>{minValue}</Text>
                        <Text style={styles.minValueText}>{maxValue}</Text>
                      </View>
                      <Slider
                        value={sliderValue}
                        onValueChange={value => setSliderValue(value)}
                        minimumValue={minValue}
                        maximumValue={maxValue}
                        style={{width: '100%', height: 30}}
                        minimumTrackTintColor="#0A84FF"
                        maximumTrackTintColor="#FFFFFF5C"
                        thumbTintColor="#FFFFFF"
                        step={600}
                      />
                      <View style={styles.updateSliderContainer}>
                        <Text style={styles.updateSliderValue}>
                          {sliderValue}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    ''
                  )}
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity
                    onPress={() => selectFamilarityDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>
                          {'Familiarity'}
                        </Text>
                      </View>
                      {/* <TouchableOpacity
                      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}> */}
                      {!selectFamilarity ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                  {selectFamilarity ? (
                    <FlatList
                      data={familarityCategories}
                      keyExtractor={item => item.id}
                      renderItem={familarityRenderItem}
                      showsVerticalScrollIndicator={false}
                    />
                  ) : (
                    ''
                  )}
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity
                    onPress={() => selectEducationDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>
                          {'Education'}
                        </Text>
                      </View>
                      {/* <TouchableOpacity
                      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}> */}
                      {!selectEducation ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity
                    onPress={() => selectHomeLocationDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>
                          {'Home Location'}
                        </Text>
                      </View>
                      {/* <TouchableOpacity
                        hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}> */}
                      {!selectHomeLocation ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity
                    onPress={() => selectTypeFilmDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>
                          {'Type of Film'}
                        </Text>
                      </View>
                      {/* <TouchableOpacity
                      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}> */}
                      {!selectTypeFilm ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                  {selectTypeFilm ? (
                    <FlatList
                      data={typeFilmCategories}
                      keyExtractor={item => item.id}
                      renderItem={FilmTypeRenderItem}
                      showsVerticalScrollIndicator={false}
                    />
                  ) : (
                    ''
                  )}
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity
                    onPress={() => selectBrandDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>{'Brand'}</Text>
                      </View>
                      {/* <TouchableOpacity
                      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}> */}
                      {!selectBrand ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity
                    onPress={() => selectIndustryDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>
                          {'Industry'}
                        </Text>
                      </View>
                      {/* <TouchableOpacity
                      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}> */}
                      {!selectIndustry ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                  {selectIndustry ? (
                    <FlatList
                      data={industryCategories}
                      keyExtractor={item => item.id}
                      renderItem={IndustryRenderItem}
                      showsVerticalScrollIndicator={false}
                    />
                  ) : (
                    ''
                  )}
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity
                    onPress={() => selectGenreDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>{'Genre'}</Text>
                      </View>
                      {/* <TouchableOpacity
                        hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}> */}
                      {!selectGenre ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity
                    onPress={() => selectDurationDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>
                          {'Duration'}
                        </Text>
                      </View>
                      {/* <TouchableOpacity
                      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}> */}
                      {!selectDuration ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity
                    onPress={() => selectYearReleaseDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>
                          {'Year of release'}
                        </Text>
                      </View>
                      {/* <TouchableOpacity
                      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}> */}
                      {!selectYearRelease ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                  {selectYearRelease ? (
                    <View style={{marginVertical: 15}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}>
                        <Text style={styles.minValueText}>{yearMinValue}</Text>
                        <Text style={styles.minValueText}>{yearMaxValue}</Text>
                      </View>
                      <Slider
                        value={yearSliderValue}
                        onValueChange={value => setYearSliderValue(value)}
                        minimumValue={yearMinValue}
                        maximumValue={yearMaxValue}
                        style={{width: '100%', height: 30}}
                        minimumTrackTintColor="#0A84FF"
                        maximumTrackTintColor="#FFFFFF5C"
                        thumbTintColor="#FFFFFF"
                        step={1}
                      />
                      <View style={styles.updateSliderContainer}>
                        <Text style={styles.updateSliderValue}>
                          {yearSliderValue}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    ''
                  )}
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity
                    onPress={() => selectLanguageDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>
                          {'Language'}
                        </Text>
                      </View>
                      {/* <TouchableOpacity
                      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}> */}
                      {!selectLanguage ? (
                        <Image
                          source={require('../../assets/images/drop.png')}
                        />
                      ) : (
                        <Image
                          source={require('../../assets/images/dropDownIcon.png')}
                        />
                      )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.mainFilterContainer}>
                  <TouchableOpacity
                    onPress={() => selectShootLocationDropDownHandler()}>
                    <View style={styles.listFilterContainer}>
                      <View>
                        <Text style={styles.renderCategoryText}>
                          {'Shoot Location'}
                        </Text>
                      </View>
                      {/* <TouchableOpacity
                        hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}> */}
                        {!selectShootLocation ? (
                          <Image
                            source={require('../../assets/images/drop.png')}
                          />
                        ) : (
                          <Image
                            source={require('../../assets/images/dropDownIcon.png')}
                          />
                        )}
                      {/* </TouchableOpacity> */}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 70,
                backgroundColor: '#1F2533',
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    textDecorationLine: 'underline',
                    fontSize: 16,
                  }}>
                  Clear All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Alert.alert('Coming Soon')}
                style={{
                  backgroundColor: '#007AFF',
                  paddingVertical: 10,
                  paddingHorizontal: 14,
                  borderRadius: 30,
                }}>
                <Text style={{color: 'white', fontSize: 16}}>
                  Show 200 results
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default DiscoverFilterScreen;
