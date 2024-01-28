import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {baseURL} from '../../constant/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GET_FILM, GET_PRODUCER, GET_TALENT } from '../../api/EndPoints';

const initialState = {
  fetchData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  filmsData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  producerData: {
    data: null,
    loading: 'idle',
    error: null,
  }
};

export const GetTalentApiData = createAsyncThunk(
  'talentGet',
  async ({q}, {rejectWithValue}) => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.get(baseURL + GET_TALENT, {
        params: {
          q: q,
        },
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('API Request failed:', error);

      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        return rejectWithValue(error.response.data); // Correct usage of rejectWithValue
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error during request setup:', error.message);
      }

      throw error;
    }
  },
);

export const GetFilmsApiData = createAsyncThunk(
  'filmsGet',
  async ({q}, {rejectWithValue}) => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.get(baseURL + GET_FILM, {
        params: {
          q: q,
        },
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('API Request failed:', error);

      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        return rejectWithValue(error.response.data); // Correct usage of rejectWithValue
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error during request setup:', error.message);
      }

      throw error;
    }
  },
);

export const GetProducerApiData = createAsyncThunk(
  'producerGet',
  async ({q}, {rejectWithValue}) => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.get(baseURL + GET_PRODUCER, {
        params: {
          q: q,
        },
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('API Request failed:', error);

      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        return rejectWithValue(error.response.data); // Correct usage of rejectWithValue
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error during request setup:', error.message);
      }

      throw error;
    }
  },
);

const DiscoveryApiSlice = createSlice({
    name: 'discoveryApi',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
        //========= GET TALENT API DATA=======//
        .addCase(GetTalentApiData.pending, state => {
          state.fetchData.loading = 'pending';
        })
        .addCase(GetTalentApiData.fulfilled, (state, action) => {
          state.fetchData.loading = 'fulfilled';
          state.fetchData.data = action.payload;
        })
        .addCase(GetTalentApiData.rejected, (state, action) => {
          state.fetchData.loading = 'rejected';
          state.fetchData.error = action.error.message;
        })
        //========= GET FILMS API DATA=======//
        .addCase(GetFilmsApiData.pending, state => {
          state.filmsData.loading = 'pending';
        })
        .addCase(GetFilmsApiData.fulfilled, (state, action) => {
          state.filmsData.loading = 'fulfilled';
          state.filmsData.data = action.payload;
        })
        .addCase(GetFilmsApiData.rejected, (state, action) => {
          state.filmsData.loading = 'rejected';
          state.filmsData.error = action.error.message;
        })
         //========= GET PRODUCER API DATA=======//
         .addCase(GetProducerApiData.pending, state => {
          state.producerData.loading = 'pending';
        })
        .addCase(GetProducerApiData.fulfilled, (state, action) => {
          state.producerData.loading = 'fulfilled';
          state.producerData.data = action.payload;
        })
        .addCase(GetProducerApiData.rejected, (state, action) => {
          state.producerData.loading = 'rejected';
          state.producerData.error = action.error.message;
        });
    },
  });
  
  export default DiscoveryApiSlice.reducer;
  