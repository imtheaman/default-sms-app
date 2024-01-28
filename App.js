import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import MainStackNavigator from './src/navigation/mainStackNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/Store/index';
import useAppStart from './src/utils/useAppStart';

export default function App() {
  useAppStart()
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <MainStackNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
