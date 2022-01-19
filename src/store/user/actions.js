import { createAsyncThunk } from '@reduxjs/toolkit';

import { addUser, getUsers } from '../../api/user';

/**
 * { type: 'ADD_USER_PENDING' } => loading: true
 * { type: 'ADD_USER_SUCCESS' } => loading: false
 * { type: 'ADD_USER_ERROR' } => loading: false, error: 'message'
 */

export const addUserAction = createAsyncThunk('user/addUser', async user => {
  const response = await addUser(user);

  return response;
});

export const getUsersAction = createAsyncThunk('user/getUsers', async () => {
  const response = await getUsers();

  return response;
});

// export const addUserAction = payload => dispatch => {
//   dispatch(addUserPending());
//   addUser(payload)
//     .then(user => {
//       dispatch(addUserSuccess(user));
//     })
//     .catch(error => {
//       dispatch(addUserError(error));
//     });
// };
