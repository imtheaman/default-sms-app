import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {baseURL} from '../../constant/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ADD_TEAM_MEMBER,
  FETCH_TEAM_MEMBER,
  GET_TALENT,
  MANAGE_MESSAGE_ACCESS,
  REMOVE_TEAM_MEMBER,
} from '../../api/EndPoints';

const initialState = {
  fetchData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  addTeamApiData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  fetchMember: {
    data: null,
    loading: 'idle',
    error: null,
  },
  messageAccess: {
    data: null,
    loading: 'idle',
    error: null,
  },
  deleteMember: {
    data: null,
    loading: 'idle',
    error: null,
  },
};

export const GetTalentApiData = createAsyncThunk('talentGet', async ({q}, { rejectWithValue }) => {
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
});

export const AddTeamMemberApi = createAsyncThunk(
  'AddTeamMember',
  async createConversationData => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.post(
        baseURL + ADD_TEAM_MEMBER,
        createConversationData,
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

export const GetFetchMemberApiData = createAsyncThunk(
  'teamMemberGet',
  async ( ) => {
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.get(baseURL + FETCH_TEAM_MEMBER, {
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

export const ManageMemberChatApi = createAsyncThunk(
  'messageAccess',
  async (postData,{rejectWithValue}) => {
    const authToken = await AsyncStorage.getItem('userToken');
    console.log('Mesaage in API METHOD ACCESS=====', postData);
    try {
      const response = await axios.post(
        baseURL + MANAGE_MESSAGE_ACCESS,
        postData,
        {
          headers: {
            Accept: 'application/json',
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

export const deleteTeamMemberApi = createAsyncThunk(
  'deleteTeamMember',
  async (deletId,{rejectWithValue}) => {
    console.log('check IDIDIDID here -=-=-=-=-=-', deletId);
    const authToken = await AsyncStorage.getItem('userToken');
    try {
      const response = await axios.post(baseURL + REMOVE_TEAM_MEMBER, deletId, {
        headers: {
          Accept: 'application/json',
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

const manageTeamApiSlice = createSlice({
  name: 'manageTeamApi',
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
      //========= POST ADD TEAM MEMBER API DATA=======//
      .addCase(AddTeamMemberApi.pending, state => {
        state.addTeamApiData.loading = 'pending';
      })
      .addCase(AddTeamMemberApi.fulfilled, (state, action) => {
        state.addTeamApiData.loading = 'fulfilled';
        state.addTeamApiData.data = action.payload;
      })
      .addCase(AddTeamMemberApi.rejected, (state, action) => {
        state.addTeamApiData.loading = 'rejected';
        state.addTeamApiData.error = action.error.message;
      })
      //========= GET TEAM MEMBER API DATA=======//
      .addCase(GetFetchMemberApiData.pending, state => {
        state.fetchMember.loading = 'pending';
      })
      .addCase(GetFetchMemberApiData.fulfilled, (state, action) => {
        state.fetchMember.loading = 'fulfilled';
        state.fetchMember.data = action.payload;
      })
      .addCase(GetFetchMemberApiData.rejected, (state, action) => {
        state.fetchMember.loading = 'rejected';
        state.fetchMember.error = action.error.message;
      })
      //========= POST TEAM MEMBER MESAAGE ACCESS API DATA=======//
      .addCase(ManageMemberChatApi.pending, state => {
        state.messageAccess.loading = 'pending';
      })
      .addCase(ManageMemberChatApi.fulfilled, (state, action) => {
        state.messageAccess.loading = 'fulfilled';
        state.messageAccess.data = action.payload;
      })
      .addCase(ManageMemberChatApi.rejected, (state, action) => {
        state.messageAccess.loading = 'rejected';
        state.messageAccess.error = action.error.message;
      })
      //========= REMOVE TEAM MEMBER API DATA=======//
      .addCase(deleteTeamMemberApi.pending, state => {
        state.deleteMember.loading = 'pending';
      })
      .addCase(deleteTeamMemberApi.fulfilled, (state, action) => {
        state.deleteMember.loading = 'fulfilled';
        state.deleteMember.data = action.payload;
      })
      .addCase(deleteTeamMemberApi.rejected, (state, action) => {
        state.deleteMember.loading = 'rejected';
        state.deleteMember.error = action.error.message;
      });
  },
});

export default manageTeamApiSlice.reducer;
