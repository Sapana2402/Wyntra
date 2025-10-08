import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as Keychain from 'react-native-keychain';

interface AuthType {
  token: String | null;
  user: any | null;
  loading: Boolean;
  error: String | null;
}
const initialState: AuthType = {
  token: null,
  user: null,
  loading: false,
  error: null,
};
const API_URL = 'https://dummyjson.com/auth/login';

export const loginUser = createAsyncThunk(
  'login/track',
  async (
    { username, password }: { username: String; password: String },
    { rejectWithValue },
  ) => {
    try {
        console.log("insede here");
        
      const res = await axios.post(API_URL, {
        username,
        password,
      });
      const data = res.data;
      console.log('data===', data);

      await Keychain.setGenericPassword('auth', data.accessToken);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
