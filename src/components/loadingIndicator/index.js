import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {MetrixConstant} from '../../constants/Constants';
export default function Loading(props) {
  return (
    <>
      {props.isLoading ? (
        <View style={Styles.mainView}>
          <View style={[Styles.loaderStyle, props.loaderStyle]}>
            <ActivityIndicator
              color={'#ffffff'}
              size={25}
            />
          </View>
        </View>
      ) : null}
    </>
  );
}

const Styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    elevation: 20,
  },
  loaderStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    marginTop: 55,
    justifyContent: 'flex-end',
  },
  customBlurOverlayStyle: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -150,
  },
});
