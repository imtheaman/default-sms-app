import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem } from '../../constant/LocalStorage';

const initialState = {
  role: 'Talent',
};

const accountSwitchSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
      setItem('userRole', action.payload);
    },
    initializeRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setRole, initializeRole } = accountSwitchSlice.actions;
export const selectUserRole = state => state.user.role;

export const getUserRoleFromStorage = () => async dispatch => {
  try {
    const storedUserRole = await getItem('userRole');
    if (storedUserRole !== null) {
      dispatch(initializeRole(storedUserRole));
    }
  } catch (error) {
    console.error('Error retrieving user role from AsyncStorage:', error);
  }
};

export default accountSwitchSlice.reducer;
