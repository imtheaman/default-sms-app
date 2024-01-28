import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

const AwardListModal = props => {
  const awardList = [
    {id: 1, award: 'Award Name 1'},
    {id: 2, award: 'Award Name 2'},
    {id: 3, award: 'Award Name 3'},
    {id: 4, award: 'Award Name 4'},
    {id: 5, award: 'Award Name 5'},
    {id: 6, award: 'Award Name 6'},
    {id: 7, award: 'Award Name 7'},
    {id: 8, award: 'Award Name 8'},
    {id: 9, award: 'Award Name 9'},
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  const handleAwardPress = award => {
    setActiveTab(award);
    console.log('check gender', award);
    props.onAwardSelect(award);
    setModalVisible(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      activeTab={activeTab}>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center'}}
        onPress={() => props.closeModal()}>
          <View style={styles.flatListContainer}>
            {awardList.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.listContainer}
                onPress={() => handleAwardPress(item.award)}>
                <View style={styles.renderTitleContainer}>
                  <Text style={styles.renderNameText}>{item.award}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AwardListModal;
