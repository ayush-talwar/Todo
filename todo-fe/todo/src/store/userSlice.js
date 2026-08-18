import { createSlice } from '@reduxjs/toolkit';
import axios from '../api/axios.js';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export const RegisterUser = (userData) => async (dispatch) => {
  try {
    await axios.post('/accounts/register/', userData);
  } catch (err) {
    console.log('enable to create user', err);
    throw err;
  }
};

export const loginUser = (credentials) => async (dispatch) => {
  const tokenData = await axios.post('/accounts/login/', credentials);
  localStorage.setItem('authToken', tokenData.data.token);
  const userDetails = await axios.get('/accounts/user-details/');
  dispatch(setUser(userDetails.data));
};

export const logoutUser = () => async (dispatch) => {
  await axios.post('/accounts/logout/');
  localStorage.removeItem('authToken');
  dispatch(logout());
};

export default userSlice;