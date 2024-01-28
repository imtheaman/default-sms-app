import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {baseURL} from '../../constant/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CREATE_CONVERSATION,
  FETCH_CONVERSATION,
  GET_LIST_CONVERSATION,
  MARK_MESSAGE_READ,
  SEND_MESSAGE,
} from '../../api/EndPoints';

const initialState = {
  fetchData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  listData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  sendMessageData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  fetchMessage: {
    data: null,
    loading: 'idle',
    error: null,
  },
  markMessageData: {
    data: null,
    loading: 'idle',
    error: null,
  },
};

export const CreateConversationApi = createAsyncThunk(
  'createConversation',
  async (createConversationData,{rejectWithValue}) => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.post(
        baseURL + CREATE_CONVERSATION,
        createConversationData,
        {
          headers: {
            "Accept": 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        },
      );
      return response.data;
    }  catch (error) {
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

export const GetListOfConversations = createAsyncThunk(
  'listOfConverstion',
  async ({ talentId }, { rejectWithValue }) => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.get(baseURL + GET_LIST_CONVERSATION, {
        params: {
          owner_id: talentId,
          // page: page,
        },
        headers: {
          "Accept": 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response.data;
    }  catch (error) {
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


export const SendMessageApi = createAsyncThunk(
  'sendMessage',
  async (messageData, { rejectWithValue }) => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.post(baseURL + SEND_MESSAGE, messageData, {
        headers: {
          "Accept": 'application/json',
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

export const FetchConversations = createAsyncThunk(
  'fetchConverstions',
  async ({userId, conversationId, page},  { rejectWithValue }) => {
    const authToken = await AsyncStorage.getItem('userToken');
    console.log('USER ID CHECK', userId);
    console.log('CONVERSTION ID CHECK', conversationId);
    try {
      const response = await axios.get(baseURL + FETCH_CONVERSATION, {
        params: {
          conversation_id: conversationId,
          owner_id: userId,
          page: page
        },
        headers: {
          "Accept": 'application/json',
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

// export const FetchConversations = createAsyncThunk(
//   'fetchConverstions',
//   async ({ userId, conversationId, page }, thunkAPI) => {
//     const authToken = await AsyncStorage.getItem('userToken');
//     try {
//       const response = await axios.get(baseURL + FETCH_CONVERSATION, {
//         params: {
//           conversation_id: conversationId,
//           owner_id: userId,
//           page: page,
//         },
//         headers: {
//           "Accept": 'application/json',
//           Authorization: `Bearer ${authToken}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );


export const MarkReadMessageApi = createAsyncThunk(
  'markMessage',
  async (postData,{rejectWithValue}) => {
    const authToken = await AsyncStorage.getItem('userToken');
    console.log( 'check postdata herr===-=-=-=-=-=-=-',authToken);
    try {
      console.log('Check Response', postData);
      const response = await axios.post(
        baseURL + MARK_MESSAGE_READ,
        postData,
        {
          headers: {
            "Content-Type": 'application/json',
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

const messageApiSlice = createSlice({
  name: 'messageApi',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //========= POST CREATE CONVERSATION DATA=======//
      .addCase(CreateConversationApi.pending, state => {
        state.fetchData.loading = 'pending';
      })
      .addCase(CreateConversationApi.fulfilled, (state, action) => {
        state.fetchData.loading = 'fulfilled';
        state.fetchData.data = action.payload;
      })
      .addCase(CreateConversationApi.rejected, (state, action) => {
        state.fetchData.loading = 'rejected';
        state.fetchData.error = action.error.message;
      })
      //========= GET LIST OF CONVERSATION DATA=======//
      .addCase(GetListOfConversations.pending, state => {
        state.listData.loading = 'pending';
      })
      .addCase(GetListOfConversations.fulfilled, (state, action) => {
        state.listData.loading = 'fulfilled';
        state.listData.data = action.payload;
      })
      .addCase(GetListOfConversations.rejected, (state, action) => {
        state.listData.loading = 'rejected';
        state.listData.error = action.error.message;
      })
      //========= POST SEND MESSAGE DATA=======//
      .addCase(SendMessageApi.pending, state => {
        state.sendMessageData.loading = 'pending';
      })
      .addCase(SendMessageApi.fulfilled, (state, action) => {
        state.sendMessageData.loading = 'fulfilled';
        state.sendMessageData.data = action.payload;
      })
      .addCase(SendMessageApi.rejected, (state, action) => {
        state.sendMessageData.loading = 'rejected';
        state.sendMessageData.error = action.error.message;
      })
      //========= GET FETCH CONVERSATION DATA=======//
      .addCase(FetchConversations.pending, state => {
        state.fetchMessage.loading = 'pending';
      })
      .addCase(FetchConversations.fulfilled, (state, action) => {
        state.fetchMessage.loading = 'fulfilled';
        state.fetchMessage.data = action.payload;
      })
      .addCase(FetchConversations.rejected, (state, action) => {
        state.fetchMessage.loading = 'rejected';
        state.fetchMessage.error = action.error.message;
      })
      //========= POST MARK MESSAGE DATA=======//
      .addCase(MarkReadMessageApi.pending, state => {
        state.markMessageData.loading = 'pending';
      })
      .addCase(MarkReadMessageApi.fulfilled, (state, action) => {
        state.markMessageData.loading = 'fulfilled';
        state.markMessageData.data = action.payload;
      })
      .addCase(MarkReadMessageApi.rejected, (state, action) => {
        state.markMessageData.loading = 'rejected';
        state.markMessageData.error = action.error.message;
      });
  },
});

export default messageApiSlice.reducer;
