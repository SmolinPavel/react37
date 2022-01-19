import { createSlice } from '@reduxjs/toolkit';

import { addUserAction, getUsersAction } from './actions';

const initialState = {
  users: [],
  loadingUser: false,
  loadingUsers: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addUserAction.pending, state => {
      state.loadingUser = true;
    });
    builder.addCase(addUserAction.fulfilled, (state, action) => {
      state.users.push(action.payload);
      state.loadingUser = false;
    });
    builder.addCase(addUserAction.rejected, (state, action) => {
      state.loadingUser = false;
      state.error = action.payload;
    });

    builder.addCase(getUsersAction.pending, state => {
      state.loadingUsers = true;
    });
    builder.addCase(getUsersAction.fulfilled, (state, action) => {
      console.log('action', action);
      state.users = action.payload;
      state.loadingUsers = false;
    });
    builder.addCase(getUsersAction.rejected, (state, action) => {
      console.log('action', action);
      state.loadingUsers = false;
      state.error = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;
