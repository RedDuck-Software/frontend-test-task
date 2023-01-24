import { createAsyncThunk } from '@reduxjs/toolkit';

import {API} from "../../api/api";
import {
  IBuyInitialState,
} from '../reducers/buyReducer';

export const getBuyDetailsAction = createAsyncThunk<IBuyInitialState>(
  'getBuyDetailsAction',
    async () => {
      // @todo: refactor this code and add error handling
      return await API.getBuyDetails()
    }
);
