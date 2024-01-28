import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { postAPIData } from '../../redux/slices/authSlice';

const YourComponent = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('1'); // Assuming a default user ID as a string
  const dispatch = useDispatch();

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleBodyChange = (text) => {
    setBody(text);
  };

  const handleUserIdChange = (text) => {
    setUserId(text);
  };

  const handlePostDataSubmit = () => {
    // Create postData object with individual input states
    const postData = {
        name: title,
        job: body
    };

    // Dispatch the postAPIData async thunk with postData
    dispatch(postAPIData(postData))
    .then((response) => {
      console.log('Post API Success:', response);
      // Handle the response data as needed
    })
    .catch((error) => {
      console.error('Post API Error:', error);
      // Handle the error as needed
    });
  };

  return (
    <View>
      {/* Input for title */}
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={handleTitleChange}
      />

      {/* Input for body */}
      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={handleBodyChange}
      />

      {/* Input for userId */}
      {/* <TextInput
        placeholder="User ID"
        value={userId}
        onChangeText={handleUserIdChange}
      /> */}

      {/* Button to submit */}
      <Button title="Submit" onPress={handlePostDataSubmit} />
    </View>
  );
};

export default YourComponent;
