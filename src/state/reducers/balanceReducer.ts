import { createSlice } from '@reduxjs/toolkit';

import { fetchBalance } from '../actions/balanceActions';

interface IInitialState {
  price: string;
}

const initialState: IInitialState = {
  price: '0',
};

export const tokenSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    resetPrice: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBalance.fulfilled, (state, action) => {
      state.price = action.payload;
    });
  },
});

export default tokenSlice.reducer;
export const { resetPrice } = tokenSlice.actions;
