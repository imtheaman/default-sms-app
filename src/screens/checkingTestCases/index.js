import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextInputWithLabel = () => {

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email or Name</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#000', 
    borderRadius: 5, 
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    top: -10,
    left: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TextInputWithLabel;