import { createSlice } from '@reduxjs/toolkit';

import {
  getBuyDetailsAction,
} from '../actions/buyAction';

export interface IBuyInitialState  {
  requestId: number | null;
  ibanTo: string;
  depositAmount: number;
  depositComment: string;
  depositCurrency: string|null;
  outputUsdtAmount: number;
}

export const initialStateBuy: IBuyInitialState = {
  requestId: null,
  ibanTo: '',
  depositAmount: 0,
  depositComment: '',
  depositCurrency: null,
  outputUsdtAmount: 0,
};

export const buySlice = createSlice({
  name: 'buy',
  initialState: initialStateBuy,
  reducers: {
    resetBuyState: () => initialStateBuy,
  },
  extraReducers: (builder) => {
    builder.addCase(getBuyDetailsAction.fulfilled, (state, action) => {
      state.requestId = action.payload.requestId;
      state.depositAmount = action.payload.depositAmount;
      state.ibanTo = action.payload.ibanTo;
      state.depositCurrency = action.payload.depositCurrency;
      state.outputUsdtAmount = action.payload.outputUsdtAmount;
      state.depositComment = action.payload.depositComment;
    });
  },
});

export default buySlice.reducer;
export const { resetBuyState } = buySlice.actions;
