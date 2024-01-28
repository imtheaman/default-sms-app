import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {baseURL} from '../../constant/Config';
import {
  UPDATE_TALENT_PROFILE,
  UPLOAD_TALENT_PROFILE_PIC,
  ADD_SHOWREEL,
  UPLOAD_PRODUCER_PROFILE_PIC,
  UPDATE_TALENT_SHOWREELS,
  DELETE_TALENT_SHOWREELS,
  ADD_PRODUCER_SHOWREELS,
  TALENT_PIN_TO_TOP,
  PRODUCER_PIN_TO_TOP,
} from '../../api/EndPoints';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  updateProfileData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  uploadTalentProfilePicData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  fetchData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  addTalentShowreelData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  addProducerShowreelData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  getShowReelData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  getProducerShowreelData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  searchFilmData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  uploadProducerProfilePicData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  aboutProducerData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  updateTalentReels: {
    data: null,
    loading: 'idle',
    error: null,
  },
  deleteTalentReels: {
    data: null,
    loading: 'idle',
    error: null,
  },
  pinToTopState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  producerPinToTop: {
    data: null,
    loading: 'idle',
    error: null,
  },
};

export const editTalentProfileApi = createAsyncThunk(
  'editProfile',
  async (updateProfileData,{rejectWithValue}) => {
    const authToken = await AsyncStorage.getItem('userToken');
    console.log('check data here -=-=', updateProfileData);
    try {
      const response = await axios.post(
        baseURL + UPDATE_TALENT_PROFILE,
        updateProfileData,
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

export const uploadTalentProfilePic = createAsyncThunk(
  'uploadTalentPic',
  async (uploadTalentProfilePicData,{rejectWithValue}) => {
    console.log('check pic here -=-=-=-=-=-', JSON.stringify(uploadTalentProfilePicData));
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.post(
        baseURL + UPLOAD_TALENT_PROFILE_PIC,
        uploadTalentProfilePicData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
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

export const updateTalentShowreels = createAsyncThunk(
  'updateTalentShowreels',
  async (updateTalentReels,{rejectWithValue}) => {
    console.log('check pic here -=-=-=-=-=-', updateTalentReels);
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.post(
        baseURL + UPDATE_TALENT_SHOWREELS,
        updateTalentReels,
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

export const deleteTalentShowreels = createAsyncThunk(
  'deleteTalentShowreel',
  async (deleteTalentReels,{rejectWithValue}) => {
    console.log('check pic here -=-=-=-=-=-', deleteTalentReels);
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.post(
        baseURL + DELETE_TALENT_SHOWREELS,
        deleteTalentReels,
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

export const aboutTalentUserProfile = createAsyncThunk(
  'getTalentUserData',
  async (talentId, {rejectWithValue}) => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.get(`${baseURL}talents/${talentId}/about`, {
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

export const AddTalentShowReel = createAsyncThunk(
  'addTalentShowreel',
  async (addTalentShowreelData, {rejectWithValue}) => {
    console.log('check add data here -=-=-=-=-=-', addTalentShowreelData);
    const authToken = await AsyncStorage.getItem('userToken');

    try {
      const response = await axios.post(
        baseURL + ADD_SHOWREEL,
        addTalentShowreelData,
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

export const AddProducerShowReel = createAsyncThunk(
  'addProducerShowreel',
  async (addProducerShowreelData,{rejectWithValue}) => {
    console.log('check add data here -=-=-=-=-=-', addProducerShowreelData);
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.post(
        baseURL + ADD_PRODUCER_SHOWREELS,
        addProducerShowreelData,
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

export const GetShowreelData = createAsyncThunk(
  'showreelApiGet',
  async (talentId,{rejectWithValue}) => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.get(
        `${baseURL}talents/${talentId}/showreel`,
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

export const GetProducerShowreelData = createAsyncThunk(
  'producerShowreelApiGet',
  async (GetproducerShowreelId,{rejectWithValue}) => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.get(
        `${baseURL}producers/${GetproducerShowreelId}/films`,
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

export const GetSearchFilmsApiData = createAsyncThunk(
  'searchFilmGet',
  async (queryParams,{rejectWithValue}) => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      console.log('QUERYPARAMS', queryParams);
      const response = await axios.get(baseURL + 'films/search_films', {
        params: queryParams,
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

export const uploadProducerProfilePic = createAsyncThunk(
  'uploadProducerPic',
  async (uploadProducerProfilePicData,{rejectWithValue}) => {
    console.log(
      'check pic here -=-=-=-=-=-',
      uploadProducerProfilePicData,
    );
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.post(
        baseURL + UPLOAD_PRODUCER_PROFILE_PIC,
        uploadProducerProfilePicData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
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

export const aboutProducerUserProfile = createAsyncThunk(
  'getProducerUserData',
  async (producerId, {rejectWithValue}) => {
    console.log('check proucer id here-=-=-=-=-=-=', producerId);
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.get(
        `${baseURL}producers/${producerId}/about`,
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

export const PinToTopShowreelApi = createAsyncThunk(
  'pinToTop',
  async postData => {
    const authToken = await AsyncStorage.getItem('userToken');
    console.log('Talent PIn to top data=====', postData);
    try {
      const response = await axios.post(baseURL + TALENT_PIN_TO_TOP, postData, {
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

export const PinToTopFilmApi = createAsyncThunk(
  'producerPinToTop',
  async postData => {
    const authToken = await AsyncStorage.getItem('userToken');
    console.log('Producer PIn to top data=====', postData);
    try {
      const response = await axios.post(
        baseURL + PRODUCER_PIN_TO_TOP,
        postData,
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

const profileScreenSlice = createSlice({
  name: 'profileApi',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(editTalentProfileApi.pending, state => {
        state.updateProfileData.loading = 'pending';
      })
      .addCase(editTalentProfileApi.fulfilled, (state, action) => {
        state.updateProfileData.loading = 'fulfilled';
        state.updateProfileData.data = action.payload;
      })
      .addCase(editTalentProfileApi.rejected, (state, action) => {
        state.updateProfileData.loading = 'rejected';
        state.updateProfileData.error = action.error.message;
      })
      // =========UPLOAD TALENTUSER PROFILE PIC======== //
      .addCase(uploadTalentProfilePic.pending, state => {
        state.uploadTalentProfilePicData.loading = 'pending';
      })
      .addCase(uploadTalentProfilePic.fulfilled, (state, action) => {
        state.uploadTalentProfilePicData.loading = 'fulfilled';
        state.uploadTalentProfilePicData.data = action.payload;
      })
      .addCase(uploadTalentProfilePic.rejected, (state, action) => {
        state.uploadTalentProfilePicData.loading = 'rejected';
        state.uploadTalentProfilePicData.error = action.error.message;
      })
      //========= GET TALENT USER PROFILE DATA=======//
      .addCase(aboutTalentUserProfile.pending, state => {
        state.fetchData.loading = 'pending';
      })
      .addCase(aboutTalentUserProfile.fulfilled, (state, action) => {
        state.fetchData.loading = 'fulfilled';
        state.fetchData.data = action.payload;
      })
      .addCase(aboutTalentUserProfile.rejected, (state, action) => {
        state.fetchData.loading = 'rejected';
        state.fetchData.error = action.error.message;
      })
      //========= POST TALENT SHOWREEL DATA=======//
      .addCase(AddTalentShowReel.pending, state => {
        state.addTalentShowreelData.loading = 'pending';
      })
      .addCase(AddTalentShowReel.fulfilled, (state, action) => {
        state.addTalentShowreelData.loading = 'fulfilled';
        state.addTalentShowreelData.data = action.payload;
      })
      .addCase(AddTalentShowReel.rejected, (state, action) => {
        state.addTalentShowreelData.loading = 'rejected';
        state.addTalentShowreelData.error = action.error.message;
      })
      //========= POST PRODUCER SHOWREEL DATA=======//
      .addCase(AddProducerShowReel.pending, state => {
        state.addProducerShowreelData.loading = 'pending';
      })
      .addCase(AddProducerShowReel.fulfilled, (state, action) => {
        state.addProducerShowreelData.loading = 'fulfilled';
        state.addProducerShowreelData.data = action.payload;
      })
      .addCase(AddProducerShowReel.rejected, (state, action) => {
        state.addProducerShowreelData.loading = 'rejected';
        state.addProducerShowreelData.error = action.error.message;
      })
      //========= GET TALENT SHOWREEL DATA=======//
      .addCase(GetShowreelData.pending, state => {
        state.getShowReelData.loading = 'pending';
      })
      .addCase(GetShowreelData.fulfilled, (state, action) => {
        state.getShowReelData.loading = 'fulfilled';
        state.getShowReelData.data = action.payload;
      })
      .addCase(GetShowreelData.rejected, (state, action) => {
        state.getShowReelData.loading = 'rejected';
        state.getShowReelData.error = action.error.message;
      })
      //========= GET PRODUCER SHOWREEL DATA=======//
      .addCase(GetProducerShowreelData.pending, state => {
        state.getProducerShowreelData.loading = 'pending';
      })
      .addCase(GetProducerShowreelData.fulfilled, (state, action) => {
        state.getProducerShowreelData.loading = 'fulfilled';
        state.getProducerShowreelData.data = action.payload;
      })
      .addCase(GetProducerShowreelData.rejected, (state, action) => {
        state.getProducerShowreelData.loading = 'rejected';
        state.getProducerShowreelData.error = action.error.message;
      })
      //========= GET SEARCH FILM DATA=======//
      .addCase(GetSearchFilmsApiData.pending, state => {
        state.searchFilmData.loading = 'pending';
      })
      .addCase(GetSearchFilmsApiData.fulfilled, (state, action) => {
        state.searchFilmData.loading = 'fulfilled';
        state.searchFilmData.data = action.payload;
      })
      .addCase(GetSearchFilmsApiData.rejected, (state, action) => {
        state.searchFilmData.loading = 'rejected';
        state.searchFilmData.error = action.error.message;
      })
      // =========UPLOAD PRODUCER USER PROFILE PIC======== //
      .addCase(uploadProducerProfilePic.pending, state => {
        state.uploadProducerProfilePicData.loading = 'pending';
      })
      .addCase(uploadProducerProfilePic.fulfilled, (state, action) => {
        state.uploadProducerProfilePicData.loading = 'fulfilled';
        state.uploadProducerProfilePicData.data = action.payload;
      })
      .addCase(uploadProducerProfilePic.rejected, (state, action) => {
        state.uploadProducerProfilePicData.loading = 'rejected';
        state.uploadProducerProfilePicData.error = action.error.message;
      })
      //========= GET PRODUCER USER PROFILE DATA=======//
      .addCase(aboutProducerUserProfile.pending, state => {
        state.aboutProducerData.loading = 'pending';
      })
      .addCase(aboutProducerUserProfile.fulfilled, (state, action) => {
        state.aboutProducerData.loading = 'fulfilled';
        state.aboutProducerData.data = action.payload;
      })
      .addCase(aboutProducerUserProfile.rejected, (state, action) => {
        state.aboutProducerData.loading = 'rejected';
        state.aboutProducerData.error = action.error.message;
      })
      //========= UPDATE TALENT SHOWREELS=======//
      .addCase(updateTalentShowreels.pending, state => {
        state.updateTalentReels.loading = 'pending';
      })
      .addCase(updateTalentShowreels.fulfilled, (state, action) => {
        state.updateTalentReels.loading = 'fulfilled';
        state.updateTalentReels.data = action.payload;
      })
      .addCase(updateTalentShowreels.rejected, (state, action) => {
        state.updateTalentReels.loading = 'rejected';
        state.updateTalentReels.error = action.error.message;
      })
      //========= DELETE TALENT SHOWREELS=======//
      .addCase(deleteTalentShowreels.pending, state => {
        state.deleteTalentReels.loading = 'pending';
      })
      .addCase(deleteTalentShowreels.fulfilled, (state, action) => {
        state.deleteTalentReels.loading = 'fulfilled';
        state.deleteTalentReels.data = action.payload;
      })
      .addCase(deleteTalentShowreels.rejected, (state, action) => {
        state.deleteTalentReels.loading = 'rejected';
        state.deleteTalentReels.error = action.error.message;
      })
      //========= PIN TO TOP SHOWREELS=======//
      .addCase(PinToTopShowreelApi.pending, state => {
        state.pinToTopState.loading = 'pending';
      })
      .addCase(PinToTopShowreelApi.fulfilled, (state, action) => {
        state.pinToTopState.loading = 'fulfilled';
        state.pinToTopState.data = action.payload;
      })
      .addCase(PinToTopShowreelApi.rejected, (state, action) => {
        state.pinToTopState.loading = 'rejected';
        state.pinToTopState.error = action.error.message;
      })
      //========= PIN TO TOP FILMS=======//
      .addCase(PinToTopFilmApi.pending, state => {
        state.producerPinToTop.loading = 'pending';
      })
      .addCase(PinToTopFilmApi.fulfilled, (state, action) => {
        state.producerPinToTop.loading = 'fulfilled';
        state.producerPinToTop.data = action.payload;
      })
      .addCase(PinToTopFilmApi.rejected, (state, action) => {
        state.producerPinToTop.loading = 'rejected';
        state.producerPinToTop.error = action.error.message;
      });
  },
});

export default profileScreenSlice.reducer;
