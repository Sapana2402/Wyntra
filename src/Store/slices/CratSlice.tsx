import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface dataTypes {
  items: any | null;
  loading: Boolean;
  error: String | null;
  added: Boolean;
}

const initialState: dataTypes = {
  items: null,
  loading: false,
  error: null,
  added: false,
};
const BASE_URL = 'http://192.168.0.103:3000/carts';
// const BASE_URL = 'http://localhost:3000/cartts';


export const fetchFromCart = createAsyncThunk(
  'carts/fetch',
  async (userId: number) => {
    const res = await axios.get(`${BASE_URL}?userId=${userId}`);
    console.log('resss fetch', res.data);
    return await res.data;
  },
);

// export const addToCart = createAsyncThunk('carts/add', async (item: any) => {
//   console.log('add to cart');

//   const res = await axios.post(BASE_URL, item);
//   console.log('rtess add', res.data);

//   return res.data;
// });

export const addToCart = createAsyncThunk('carts/add', async (item: any, { rejectWithValue }) => {
  try {
    console.log('add to cart');
    const res = await axios.post(BASE_URL, item);
    console.log('rtess add', res.data);
    return res.data;
  } catch (error: any) {
    console.log('error add to cart', error.message);
    return rejectWithValue(error.message);
  }
});

const cartSlice = createSlice({
  name: 'carts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFromCart.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchFromCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchFromCart.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.added = true;
        if (state.items) {
          state.items.push(action.payload);
        } else {
          state.items = [action.payload];
        }
      })

      .addCase(addToCart.rejected, (state, action) => {
        state.added = false;
      });
  },
});

export default cartSlice.reducer;
