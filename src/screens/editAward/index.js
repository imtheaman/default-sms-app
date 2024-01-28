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
import Header from '../../components/header';
import Strings from '../../constant/Strings';

const Width = Dimensions.get('window').width;
const EditAwardScreen = () => {
  const focusNextInput = nextInputRef => {
    nextInputRef && nextInputRef.current && nextInputRef.current.focus();
  };

  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          title={Strings.editAward}
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
              <View style={styles.container}>
                <View style={styles.ageContainer} onPress={() => {}}>
                  <View style={[styles.inputContainer]}>
                    <Text style={styles.label}>{'Award Name'}</Text>
                    <TextInput
                      style={styles.inputStyle}
                      value={''}
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
                      value={''}
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
                    onPress={() => navigation.navigate('Profile')}
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

export default EditAwardScreen;
