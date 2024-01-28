// index.js
import {configureStore} from '@reduxjs/toolkit';
import apiReducer from '../slices/authSlice';
import accountSwitchReducer from '../slices/accountSwitchSlice';
import profileScreenSlice from '../slices/profileScreenSlice';
import messageSlice from '../slices/messageSlice';
import manageTeamApiSlice from '../slices/manageTeam';
import DiscoveryApiSlice from '../slices/discoverySlice';
import AddBlackBookApiSlice from '../slices/blackbookSlice';

const reducer = {
  api: apiReducer,
  user: accountSwitchReducer,
  profileApi: profileScreenSlice,
  messageApi: messageSlice,
  manageTeamApi: manageTeamApiSlice,
  discoveryApi: DiscoveryApiSlice,
  blackBookApi: AddBlackBookApiSlice
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
