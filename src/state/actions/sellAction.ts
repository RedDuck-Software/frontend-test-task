import { createAsyncThunk } from '@reduxjs/toolkit';

import { API } from '../../api/api';
import { ISellInitialState } from '../reducers/sellReducer';

export const getSellDetainsAction = createAsyncThunk<ISellInitialState>(
  'getSellDetainsAction',
  async () => {
    // @todo: refactor this code and add error handling
    return await API.getSellDetails();
  },
);
