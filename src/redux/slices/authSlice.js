// apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../../constant/Config';
import {
  LOGIN,
  OTP_VERIFICATION,
  SIGNUP,
  GET_DISTRICT,
} from '../../api/EndPoints';

const initialState = {
  signInData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  signUpData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  otpPostData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  districtData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  stateData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  pinCodeData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  talentRoleData: {
    data: null,
    loading: 'idle',
    error: null,
  },
  industryType: {
    data: null,
    loading: 'idle',
    error: null,
  }
};

// export const fetchAPIdata = createAsyncThunk('api/fetchData', async () => {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

export const signInApi = createAsyncThunk('signInPost', async (signInData, { rejectWithValue }) => {
  try {
    const response = await axios.post(baseURL + LOGIN, signInData, {
      headers: {
        "Accept": 'application/json'
      }
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

export const signUpApi = createAsyncThunk('signUpPost', async (signUpData, { rejectWithValue }) => {
  console.log('signup data -=-=--=', signUpData);
  try {
    const response = await axios.post(baseURL + SIGNUP, signUpData, {
      headers: {
        "Accept": 'application/json'
      }
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

export const otpAuthenticate = createAsyncThunk(
  'otpPost',
  async (otpPostData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        baseURL + OTP_VERIFICATION,
        otpPostData, {
        headers: {
          "Accept": 'application/json',
        },
      }
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

export const GetdistrictApiData = createAsyncThunk(
  'districtGet',
  async ({ q }, { rejectWithValue }) => {
    let authToken =
      'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYTE2YmNhZWEtMDdmZC00NjU0LThmNDgtNWJhODU2ZmU4YmZkIiwiZXhwaXJlc19hdCI6IjIwMjMtMTItMjkgMDU6MTI6NDAgKzAwMDAifQ.4Xooqncns5-nunMFEHHQao-90pBwhNfJHylG7QRcMTc';
    console.log('AGAIN PARAMS CHECK=======+++++++&&&&&&&', q);
    try {
      const response = await axios.get(baseURL + 'search/district', {
        params: {
          q: q,
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

export const GetPinCodeApiData = createAsyncThunk('pinCodeGet', async ({ q }, { rejectWithValue }) => {
  let authToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYTE2YmNhZWEtMDdmZC00NjU0LThmNDgtNWJhODU2ZmU4YmZkIiwiZXhwaXJlc19hdCI6IjIwMjMtMTItMjkgMDU6MTI6NDAgKzAwMDAifQ.4Xooqncns5-nunMFEHHQao-90pBwhNfJHylG7QRcMTc';
  try {
    const response = await axios.get(baseURL + 'search/pincode', {
      params: {
        q: q,
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
});

export const GetStateApiData = createAsyncThunk(
  'stateApiGet',
  async (country_id, { rejectWithValue }) => {
    console.log('check cuntry is here -=-=-', country_id);
    try {
      const response = await axios.get(baseURL + 'utils/populate_states', {
        params: {
          country_id: country_id,
        },
        headers: {
          "Accept": 'application/json',
          Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYTE2YmNhZWEtMDdmZC00NjU0LThmNDgtNWJhODU2ZmU4YmZkIiwiZXhwaXJlc19hdCI6IjIwMjMtMTItMjkgMDU6MTk6NDIgKzAwMDAifQ.Y5gGWH6YAw8rdDB2YVgIjc0Wag3uZVrqoEVWn2u00YA'}`,
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

export const GetTalentRoleApiData = createAsyncThunk(
  'talentRoleApiGet',
  async (data_type, { rejectWithValue }) => {
    let authToken =
      'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYTE2YmNhZWEtMDdmZC00NjU0LThmNDgtNWJhODU2ZmU4YmZkIiwiZXhwaXJlc19hdCI6IjIwMjMtMTItMjkgMDU6MTI6NDAgKzAwMDAifQ.4Xooqncns5-nunMFEHHQao-90pBwhNfJHylG7QRcMTc';
    console.log('check TalentID is here -=-=-', data_type);
    try {
      const response = await axios.get(baseURL + 'utils/populate_data', {
        params: {
          data_type: data_type,
        },
        headers: {
          "Accept": 'application/json',
          // Authorization: `Bearer ${authToken}`,
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

export const GetIndustryTypeApiData = createAsyncThunk(
  'industryTypeApiGet',
  async (data_type, { rejectWithValue }) => {
    console.log('check TalentID is here -=-=-', data_type);
    try {
      const response = await axios.get(baseURL + 'utils/populate_data', {
        params: {
          data_type: data_type,
        },
        headers: {
          "Accept": 'application/json',
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

const authSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // SignIn Post API data reducers
      .addCase(signInApi.pending, state => {
        state.signInData.loading = 'pending';
      })
      .addCase(signInApi.fulfilled, (state, action) => {
        state.signInData.loading = 'fulfilled';
        state.signInData.data = action.payload;
      })
      .addCase(signInApi.rejected, (state, action) => {
        state.signInData.loading = 'rejected';
        state.signInData.error = action.error.message;
      })
      .addCase(signUpApi.pending, state => {
        state.signUpData.loading = 'pending';
      })
      .addCase(signUpApi.fulfilled, (state, action) => {
        state.signUpData.loading = 'fulfilled';
        state.signUpData.data = action.payload;
      })
      .addCase(signUpApi.rejected, (state, action) => {
        state.signUpData.loading = 'rejected';
        state.signUpData.error = action.error.message;
      })
      .addCase(otpAuthenticate.pending, state => {
        state.otpPostData.loading = 'pending';
      })
      .addCase(otpAuthenticate.fulfilled, (state, action) => {
        state.otpPostData.loading = 'fulfilled';
        state.otpPostData.data = action.payload;
      })
      .addCase(otpAuthenticate.rejected, (state, action) => {
        state.otpPostData.loading = 'rejected';
        state.otpPostData.error = action.error.message;
      })
      //========= GET DISTRICT DATA=======//
      .addCase(GetdistrictApiData.pending, state => {
        state.districtData.loading = 'pending';
      })
      .addCase(GetdistrictApiData.fulfilled, (state, action) => {
        state.districtData.loading = 'fulfilled';
        state.districtData.data = action.payload;
      })
      .addCase(GetdistrictApiData.rejected, (state, action) => {
        state.districtData.loading = 'rejected';
        state.districtData.error = action.error.message;
      })
      //========= GET STATE DATA=======//
      .addCase(GetStateApiData.pending, state => {
        state.stateData.loading = 'pending';
      })
      .addCase(GetStateApiData.fulfilled, (state, action) => {
        state.stateData.loading = 'fulfilled';
        state.stateData.data = action.payload;
      })
      .addCase(GetStateApiData.rejected, (state, action) => {
        state.stateData.loading = 'rejected';
        state.stateData.error = action.error.message;
      })
      //========= GET PIN CODE DATA=======//
      .addCase(GetPinCodeApiData.pending, state => {
        state.pinCodeData.loading = 'pending';
      })
      .addCase(GetPinCodeApiData.fulfilled, (state, action) => {
        state.pinCodeData.loading = 'fulfilled';
        state.pinCodeData.data = action.payload;
      })
      .addCase(GetPinCodeApiData.rejected, (state, action) => {
        state.pinCodeData.loading = 'rejected';
        state.pinCodeData.error = action.error.message;
      })
      //========= GET TALENT ROLE DATA=======//
      .addCase(GetTalentRoleApiData.pending, state => {
        state.talentRoleData.loading = 'pending';
      })
      .addCase(GetTalentRoleApiData.fulfilled, (state, action) => {
        state.talentRoleData.loading = 'fulfilled';
        state.talentRoleData.data = action.payload;
      })
      .addCase(GetTalentRoleApiData.rejected, (state, action) => {
        state.talentRoleData.loading = 'rejected';
        state.talentRoleData.error = action.error.message;
      })
      //========= GET INDUSTRY TYPE DATA=======//
      .addCase(GetIndustryTypeApiData.pending, state => {
        state.industryType.loading = 'pending';
      })
      .addCase(GetIndustryTypeApiData.fulfilled, (state, action) => {
        state.industryType.loading = 'fulfilled';
        state.industryType.data = action.payload;
      })
      .addCase(GetIndustryTypeApiData.rejected, (state, action) => {
        state.industryType.loading = 'rejected';
        state.industryType.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
