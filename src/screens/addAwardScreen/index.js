import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import Button from '../../components/Button';
import {styles} from './style';
import AwardListModal from '../../components/awardListModal';
import Strings from '../../constant/Strings';
import Header from '../../components/header';

const AddAwardScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [awardValue, setAwardValue] = useState(null);

  const handleAwardSelect = award => {
    setAwardValue(award);
    setIsModalVisible(false);
  };

  const closeAwardrModal = () => {
    setIsModalVisible(false);
  };

  const openAwardModal = () => {
    setIsModalVisible(true);
  };

  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          title={Strings.addAward}
          type={'headerIcon'}
          navigation={navigation}
        />
        <KeyboardAvoidingView style={styles.keyBoardContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                marginTop: Platform.OS === 'ios' ? 0 : 15,
              }}>
              {/* <TouchableOpacity
                style={styles.backIconContainer}
                onPress={() => navigation.goBack()}>
                <Image
                  style={styles.backIcon}
                  source={require('../../assets/images/leftIcon.png')}
                />
              </TouchableOpacity>
              <View>
                <Text style={styles.headerText}>{'Add Award'}</Text>
              </View> */}
              <View style={styles.container}>
                {isModalVisible && (
                  <AwardListModal
                    modalVisible={isModalVisible}
                    closeModal={closeAwardrModal}
                    onAwardSelect={handleAwardSelect}
                  />
                )}
                <View style={styles.ageContainer} onPress={() => {}}>
                  <View style={[styles.inputContainer]}>
                    <Text style={styles.label}>{'Award Name'}</Text>
                    <TextInput
                      style={styles.inputStyle}
                      value={awardValue ? awardValue : Strings.select}
                      editable={true}
                    />
                    <TouchableOpacity
                      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
                      style={[styles.iconViewStyle]}
                      onPress={() => openAwardModal()}>
                      <Image
                        source={require('../../assets/images/dropRightWhite.png')}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.ageContainer} onPress={() => {}}>
                  <View style={[styles.inputContainer]}>
                    <Text style={styles.label}>{'Year'}</Text>
                    <TextInput
                      style={styles.inputStyle}
                      value={''}
                      editable={true}
                    />
                  </View>
                </View>
                <View style={styles.ageContainer} onPress={() => {}}>
                  <View style={[styles.inputContainer]}>
                    <Text style={styles.label}>
                      {'Film for which the Producer was awarded'}
                    </Text>
                    <TextInput
                      style={styles.inputStyle}
                      value={'Select Film'}
                      editable={true}
                    />
                    <TouchableOpacity
                      style={[styles.iconViewStyle]}
                      onPress={() => {}}>
                      <Image
                        source={require('../../assets/images/dropRightWhite.png')}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <Button
                    title={'Save'}
                    buttonStyle={styles.addButtonStyle}
                    onPress={() => {}}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AddAwardScreen;
