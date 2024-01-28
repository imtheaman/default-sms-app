import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { FontFamily } from '../../constant/Fonts';

const Button = ({ title, onPress, buttonStyle, textStyle }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, { width: screenWidth * 0.88 }]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 24,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
    paddingHorizontal: 10,
    fontFamily:FontFamily.medium
  },
});

export default Button;
