import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../../constant/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_BLACKBOOK } from '../../api/EndPoints';

const initialState = {
  addBlackBookData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  getBlackBookState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  getArchiveBlackBookData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  archivedata: {
    data: null,
    loading: 'idle',
    error: null,
  },
  unArchivedata: {
    data: null,
    loading: 'idle',
    error: null,
  }
};

export const AddBlackBookApi = createAsyncThunk(
  'AddBlackBook',
  async addBlackBookData => {
    const authToken = await AsyncStorage.getItem('userToken');
    console.log('Response Params Check', addBlackBookData);
    try {
      const response = await axios.post(
        baseURL + ADD_BLACKBOOK,
        addBlackBookData,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const GetBlackBookData = createAsyncThunk(
  'getBlackBookApi',
  async () => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.get(
        baseURL + 'blackbooks/fetch_blackbooks',
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        },
      );
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

export const GetArchiveBlackBookData = createAsyncThunk(
  'getArchiveBlackBookApi',
  async () => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.get(
        baseURL + 'blackbooks/list_archived_blackbooks',
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('API Request failed:', error);

      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error during request setup:', error.message);
      }

      throw error;
    }
  },
);

export const ArchiveBlackBook = createAsyncThunk(
  'archiveBlackBookFilm',
  async archivedata => {
    const authToken = await AsyncStorage.getItem('userToken');
    console.log('Producer PIn to top data=====', archivedata);
    try {
      const response = await axios.post(
        baseURL + 'blackbooks/remove_blackbook',
        archivedata,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        },
      );
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

export const UnArchiveBlackBook = createAsyncThunk(
  'unArchiveBlackBookFilm',
  async unArchivedata => {
    const authToken = await AsyncStorage.getItem('userToken');
    console.log('Producer PIn to top data=====', unArchivedata);
    try {
      const response = await axios.post(
        baseURL + 'blackbooks/unarchive_blackbook',
        unArchivedata,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        },
      );
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

const AddBlackBookApiSlice = createSlice({
  name: 'blackBookApi',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //========= GET TALENT API DATA=======//
      .addCase(AddBlackBookApi.pending, state => {
        state.addBlackBookData.loading = 'pending';
      })
      .addCase(AddBlackBookApi.fulfilled, (state, action) => {
        state.addBlackBookData.loading = 'fulfilled';
        state.addBlackBookData.data = action.payload;
      })
      .addCase(AddBlackBookApi.rejected, (state, action) => {
        state.addBlackBookData.loading = 'rejected';
        state.addBlackBookData.error = action.error.message;
      })
      //========= GET BLACKBOOK API DATA=======//
      .addCase(GetBlackBookData.pending, state => {
        state.getBlackBookState.loading = 'pending';
      })
      .addCase(GetBlackBookData.fulfilled, (state, action) => {
        state.getBlackBookState.loading = 'fulfilled';
        state.getBlackBookState.data = action.payload;
      })
      .addCase(GetBlackBookData.rejected, (state, action) => {
        state.getBlackBookState.loading = 'rejected';
        state.getBlackBookState.error = action.error.message;
      })
      //========= GET ARCHIVE BLACKBOOK API DATA=======//
      .addCase(GetArchiveBlackBookData.pending, state => {
        state.getArchiveBlackBookData.loading = 'pending';
      })
      .addCase(GetArchiveBlackBookData.fulfilled, (state, action) => {
        state.getArchiveBlackBookData.loading = 'fulfilled';
        state.getArchiveBlackBookData.data = action.payload;
      })
      .addCase(GetArchiveBlackBookData.rejected, (state, action) => {
        state.getArchiveBlackBookData.loading = 'rejected';
        state.getArchiveBlackBookData.error = action.error.message;
      })
      //========= ARCHIVE BLACKBOOK FILM DATA=======//
      .addCase(ArchiveBlackBook.pending, state => {
        state.archivedata.loading = 'pending';
      })
      .addCase(ArchiveBlackBook.fulfilled, (state, action) => {
        state.archivedata.loading = 'fulfilled';
        state.archivedata.data = action.payload;
      })
      .addCase(ArchiveBlackBook.rejected, (state, action) => {
        state.archivedata.loading = 'rejected';
        state.archivedata.error = action.error.message;
      })
      //========= UNARCHIVE BLACKBOOK FILM DATA=======//
      .addCase(UnArchiveBlackBook.pending, state => {
        state.unArchivedata.loading = 'pending';
      })
      .addCase(UnArchiveBlackBook.fulfilled, (state, action) => {
        state.unArchivedata.loading = 'fulfilled';
        state.unArchivedata.data = action.payload;
      })
      .addCase(UnArchiveBlackBook.rejected, (state, action) => {
        state.unArchivedata.loading = 'rejected';
        state.unArchivedata.error = action.error.message;
      });
  },
});

export default AddBlackBookApiSlice.reducer;
