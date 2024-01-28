// import React, {useState, useRef, useEffect} from 'react';
// import {View, TextInput, Animated, Dimensions, Text} from 'react-native';

// const Width = Dimensions.get('window').width;
// const FloatingLabelInput = props => {
//   const [isFocused, setIsFocused] = useState(false);
//   const animatedIsFocused = useRef(
//     new Animated.Value(props.value === '' ? 0 : 1),
//   );

//   const handleFocus = () => setIsFocused(true);
//   const handleBlur = () => setIsFocused(false);

//   useEffect(() => {
//     Animated.timing(animatedIsFocused.current, {
//       toValue: isFocused || props.value !== '' ? 1 : 0,
//       duration: 200,
//       useNativeDriver: false,
//     }).start();
//   }, [isFocused, props.value]);

//   const labelStyle = {
//     position: 'absolute',
//     left: 10,
//     top: animatedIsFocused.current.interpolate({
//       inputRange: [0, 10],
//       outputRange: [34, -310],
//     }),
//     fontSize: animatedIsFocused.current.interpolate({
//       inputRange: [0, 1],
//       outputRange: [20, 14],
//     }),
//     color: animatedIsFocused.current.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['#aaa', '#aaa'],
//     }),
//   };

//   return (
//     <View style={{paddingTop: 18}}>
//       <Animated.Text style={labelStyle}>{props.label}</Animated.Text>
//       <View
//         style={{
//           height: 56,
//           width: Width * 0.9,
//           borderWidth: 1,
//           borderColor: '#fff',
//           borderRadius: 6,
//           marginVertical: 4
//         }}>
//         <TextInput
//           {...props}
//           style={{
//             fontSize: 20,
//             color: '#fff',
//           }}
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//           blurOnSubmit
//         />
//       </View>
//     </View>
//   );
// };

// export default FloatingLabelInput;

import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FontFamily} from '../../constant/Fonts';

const Width = Dimensions.get('window').width;
const FloatingLabelInput = React.forwardRef((props, ref) => {
  const {
    placeholder,
    onChangeText,
    value,
    keyboardType,
    secureTextEntry,
    returnKeyType,
    autoFocus,
    onSubmitEditing,
    TextInputStyle,
    editable,
    pointerEvents,
    isMandatory,
    maxLength,
    blurOnSubmit,
    autoCapitalize,
    onTouchStart,
    textAlignVertical,
    multiline,
    leftIconStyle,
    leftIcon,
    numberOfLines,
    style,
    label,
    labelStyle,
    labelTextStyle,
    togglePassword,
    errorTextStyle,
    errorTextViewStyle,
    error,
    onFocus,
    updateRef,
    rightIcon,
    rightImageStyle,
    placeholderTextColor,
    onPressRightIcon = () => {},
    showError,
    container,
    selection,
    onSelectionChange,
  } = props;
  const [active, setActive] = useState(false);
  const [activeBorder, setActiveBorder] = useState(false);

  const myRef = useRef(null);

  useEffect(() => {
    if (updateRef != undefined) {
      updateRef(myRef);
    }
  }, [updateRef]);

  const onSubmit = () => {
    if (onSubmitEditing != undefined) {
      onSubmitEditing();
    }
  };

  const handleActive = () => {
    setActive(!active);
    setTimeout(() => {
      togglePassword && togglePassword(active);
    }, 1);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          activeBorder ? {borderColor: 'red'} : '#fff',
        ]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'#E6E0E9'}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          blurOnSubmit={blurOnSubmit}
          secureTextEntry={secureTextEntry}
          autoCorrect={false}
          returnKeyType={returnKeyType}
          numberOfLines={numberOfLines}
          selection={selection}
          autoFocus={autoFocus}
          onSubmitEditing={onSubmitEditing}
          ref={ref}
          error={error}
          editable={editable}
          pointerEvents={pointerEvents}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onTouchStart={onTouchStart}
          textAlignVertical={textAlignVertical}
          multiline={multiline}
          onFocus={onFocus}
          onSelectionChange={onSelectionChange}
          onBlur={() => setActiveBorder(false)}
        />
        {togglePassword && (
          <TouchableOpacity
            style={[styles.iconViewStyle]}
            onPress={() => handleActive()}>
            <Image
              source={
                secureTextEntry
                  ? require('../../assets/images/eye.png')
                  : require('../../assets/images/eyeOff.png')
              }
              style={styles.rightImageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {rightIcon && (
          <TouchableOpacity
            style={[styles.iconViewStyle]}
            onPress={() => onPressRightIcon()}>
            <Image
              source={require('../../assets/images/dropRightWhite.png')}
              style={[styles.rightImageStyle, rightImageStyle]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      {showError ? (
        <View style={[error ? styles.errorTextView : null, errorTextViewStyle]}>
          <Text style={[styles.errorText, errorTextStyle]} numberOfLines={3}>
            {error ?? ''}
          </Text>
        </View>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {

    width: Width * 0.9,
    // marginTop: 20,
  },
  inputContainer: {
    height: 56,
    borderWidth: 1,
    borderColor: '#938F99',
    borderRadius: 5,
    justifyContent:'center'
  },
  label: {
    position: 'absolute',
    backgroundColor: '#000',
    paddingHorizontal: 5,
    top: -10,
    left: 10,
    fontSize: 12,
    color: '#CAC4D0',
    fontFamily: FontFamily.regular,
  },
  textInput: {
    padding: 13,
    fontSize: 16,
    color: '#E6E0E9',
    fontFamily: FontFamily.regular,
  },
  iconViewStyle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    right: 16,
    bottom: 12,
  },
  rightImageStyle: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  errorTextView: {
    width: '100%',
    marginVertical: 5,
    // backgroundColor:'blue'
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    paddingHorizontal: 15,
    fontFamily: FontFamily.regular,
  },
});

export default FloatingLabelInput;
