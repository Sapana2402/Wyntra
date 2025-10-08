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
      const res = await axios.post(API_URL, {
        username,
        password,
      });
      const data = res.data;
      console.log('data===', data);

      return res.data
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null,
      state.user = null,
      state.loading = false,
      state.error = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.accessToken;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions
export default authSlice.reducer;
