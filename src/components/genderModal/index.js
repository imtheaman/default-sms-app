import React, {useState} from 'react';
import {Modal, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

const GenderOptionModal = props => {
  const gender = [
    {id: 1, gender: 'Male'},
    {id: 2, gender: 'Female'},
    {id: 3, gender: 'Gender Neutral'},
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const handleGenderPress = gender => {
    setActiveTab(gender);
    console.log('check gender', gender);
    props.onGenderSelect(gender);
    setModalVisible(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      activeTab={activeTab}>
      <Pressable
        style={{flex: 1, justifyContent: 'center'}}
        onPress={() => props.closeModal()}>
        <View>
          <View style={styles.flatListContainer}>
            {gender.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.listContainer}
                onPress={() => handleGenderPress(item.gender)}>
                <View style={styles.renderTitleContainer}>
                  <Text style={styles.renderNameText}>{item.gender}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default GenderOptionModal;
