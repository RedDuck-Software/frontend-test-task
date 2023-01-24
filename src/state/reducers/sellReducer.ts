import { createSlice } from '@reduxjs/toolkit';

import { getSellDetainsAction } from '../actions/sellAction';

export interface ISellInitialState {
  depositId: number | null;
  userBankAccountNumber: string;
  depositAddress: string | null;
  depositAmount: number;
  outputCurrency: string | null;
  outputAmount: number;
}

export const initialStateSell: ISellInitialState = {
  depositId: null,
  userBankAccountNumber: '',
  depositAddress: null,
  depositAmount: 0,
  outputCurrency: null,
  outputAmount: 0,
};

export const sellSlice = createSlice({
  name: 'sell',
  initialState: initialStateSell,
  reducers: {
    resetSellState: () => initialStateSell,
  },
  extraReducers: (builder) => {
    builder.addCase(getSellDetainsAction.fulfilled, (state, action) => {
      state.depositId = action.payload.depositId;
      state.depositAmount = action.payload.depositAmount;
      state.depositAddress = action.payload.depositAddress;
      state.outputCurrency = action.payload.outputCurrency;
      state.outputAmount = action.payload.outputAmount;
      state.userBankAccountNumber = action.payload.userBankAccountNumber;
    });
  },
});

export default sellSlice.reducer;
export const { resetSellState } = sellSlice.actions;
