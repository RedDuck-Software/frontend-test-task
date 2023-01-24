import { createAsyncThunk } from '@reduxjs/toolkit';
// import {pricesAPI} from "../../api/api-prices";

export const fetchBalance = createAsyncThunk<string>(
  'getTokenDetails',
  async () => {
    // const price = pricesAPI.getPrice()
    return '100';
  },
);
