import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import {styles} from './style';

const NotificationScreen = () => {
  const notificationList = [
    {
      id: 1,
      source: 'Black Picture Co.',
      notification: 'Gave you a credit',
      time: '9:41 AM',
    },
    {
      id: 2,
      source: 'Nirvana Films',
      notification: 'Approved your credit request',
      time: 'Yesterday',
    },
    {
      id: 3,
      source: 'Chalk and Cheese',
      notification: 'Gave you a credit',
      time: 'Monday',
    },
    {
      id: 4,
      source: 'Loudmouth',
      notification: 'Gave you a credit',
      time: 'Sunday',
    },
    {
      id: 5,
      source: 'Nirvana Films',
      notification: 'Gave you a credit',
      time: '10/10/2023',
    },
    {
      id: 6,
      source: 'Chalk and Cheese',
      notification: 'Gave you a credit',
      time: '8/10/2023',
    },
    {
      id: 7,
      source: 'Black Picture Co.',
      notification: 'Gave you a credit',
      time: '8/10/2023',
    },
    {
      id: 8,
      source: 'Chalk and Cheese',
      notification: 'Gave you a credit',
      time: '10/10/2023',
    },
    {
      id: 9,
      source: 'Loudmouth',
      notification: 'Gave you a credit',
      time: '5/10/2023',
    },
    {
      id: 10,
      source: 'Black Picture Co.',
      notification: 'Gave you a credit',
      time: '4/10/2023',
    },
    {
      id: 11,
      source: 'Chalk and Cheese',
      notification: 'Gave you a credit',
      time: '3/10/2023',
    },
    {
      id: 12,
      source: 'Loudmouth',
      notification: 'Gave you a credit',
      time: '1/10/2023',
    },
  ];

  const renderItem = ({item}) => (
    <>
      <Pressable style={{flexDirection: 'row', paddingVertical: 10}}>
        <View>
          <Image
            source={require('../../assets/images/notifyIcon.png')}
            style={styles.profileImgStyle}
          />
        </View>
        <View style={{marginHorizontal: 5}}>
          <Text style={styles.profileNameText}>{item.source}</Text>
          <Text style={styles.messageText}>{item.notification}</Text>
        </View>
        <View
          style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end'}}>
          <Text style={styles.messageText}>{item.time}</Text>
        </View>
      </Pressable>
      <View style={styles.divider} />
    </>
  );

  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('../../assets/images/background.png')}>
      <View style={{padding: 10}}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={notificationList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ImageBackground>
  );
};

export default NotificationScreen;
