// CheckRedux.js
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPIdata } from '../../redux/slices/authSlice';

const CheckRedux = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchAPIdata());
  }, [dispatch]);

  const handleSignupTouch = () =>{
  dispatch(postAPIData())
  }

  if (loading === 'pending') {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, marginHorizontal:20}}>
      {data.map((item) => (
        <Text style={{fontSize:24}} key={item.id}>{item.title}</Text>
      ))}
    </ScrollView>
  );
};

export default CheckRedux;
