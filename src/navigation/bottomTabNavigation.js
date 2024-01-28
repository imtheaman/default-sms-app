import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import DiscoverScreen from '../screens/discover';
import MessageScreen from '../screens/messagesScreen';
import ProfileScreen from '../screens/profileScreen';
import {FontFamily} from '../constant/Fonts';
import Strings from '../constant/Strings';
import BlackBookScreen from '../screens/blackBookScreen';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22 }}>In Progress!</Text>
    </View>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icon = () => {
          switch (route.name) {
            case 'Discover':
              return isFocused ? (
                <Image
                  source={require('../assets/images/icon.png')}
                  style={{ tintColor: '#F8B903' }}
                />
              ) : (
                <Image
                  source={require('../assets/images/icon.png')}
                  style={{ tintColor: '#fff' }}
                />
              );
            case 'Black Book':
              return isFocused ? (
                <Image
                  source={require('../assets/images/library.png')}
                  style={{ tintColor: '#F8B903',marginBottom: 5 }}
                />
              ) : (
                <Image
                  source={require('../assets/images/library.png')}
                  style={{ tintColor: '#fff', marginBottom: 5 }}
                />
              );
            case 'Messages':
              return isFocused ? (
                <Image
                  source={require('../assets/images/chat.png')}
                  style={{ tintColor: '#F8B903', width: 22, height: 22 }}
                />
              ) : (
                <Image
                  source={require('../assets/images/chat.png')}
                  style={{ tintColor: '#fff', width: 22, height: 22 }}
                />
              );
            case 'Notifications':
              return isFocused ? (
                <Image
                  source={require('../assets/images/ring.png')}
                  style={{ tintColor: '#F8B903' }}
                />
              ) : (
                <Image
                  source={require('../assets/images/ring.png')}
                  style={{ tintColor: '#fff',  }}
                />
              );
            case 'Profile':
              return isFocused ? (
                <Image
                  source={require('../assets/images/user.png')}
                  style={{ tintColor: '#F8B903', width: 22, height: 22 }}
                />
              ) : (
                <Image
                  source={require('../assets/images/user.png')}
                  style={{ tintColor: '#fff', width: 22, height: 22 }}
                />
              );
          }
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: '#1f2533',
              justifyContent: 'center',
              alignItems: 'center',
              // padding: 12,
              height:70
            }}>
            <Icon />
            <Text
              style={{
                color: isFocused ? '#F2C94C' : '#fff',
                fontSize: 9,
                fontFamily: FontFamily.regular,
                width:65,
                textAlign:'center'
              }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={-200} // Adjust the offset as needed
    >
      <Tab.Navigator
        initialRouteName="Discover"
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen
          name={Strings.discover}
          component={DiscoverScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image source={require('../assets/images/icon.png')} />
            ),
          }}
        />
        <Tab.Screen
          name={Strings.blackBook}
          component={BlackBookScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image source={require('../assets/images/library.png')} />
            ),
          }}
        />
        <Tab.Screen
          name={Strings.messages}
          component={MessageScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image source={require('../assets/images/chatIcon.png')} />
            ),
          }}
        />
        <Tab.Screen
          name={Strings.notifications}
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image source={require('../assets/images/ring.png')} />
            ),
          }}
        />
        <Tab.Screen
          name={Strings.profile}
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image source={require('../assets/images/user.png')} />
            ),
          }}
        />
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};

export default MyTabs;
