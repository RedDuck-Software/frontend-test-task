// import { axiosInstance } from './instance';

import { IBuyInitialState } from '../state/reducers/buyReducer';
import { ISellInitialState } from '../state/reducers/sellReducer';

export const API = {
  async getBuyDetails(): Promise<IBuyInitialState> {
    // await axiosInstance.get(`SOME_ENDPOINT`)

    // it can return exception or normal data (random)
    return await new Promise((resolve) => {
      setTimeout(() => {
        const randomResult = Math.random();
        if (randomResult > 0.5) {
          const data: IBuyInitialState = {
            requestId: 1,
            ibanTo: 'iban',
            depositAmount: 1000,
            depositComment: 'some comment',
            depositCurrency: 'usd',
            outputUsdtAmount: 900,
          };
          resolve(data);
        } else {
          throw new Error('500 Internal error');
        }
      }, 1000);
    });
  },
  async getSellDetails(): Promise<ISellInitialState> {
    // await axiosInstance.get(`SOME_ENDPOINT`)

    // it can return exception or normal data (random)
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomResult = Math.random();
        if (randomResult > 0.5) {
          const data: ISellInitialState = {
            depositId: 2,
            userBankAccountNumber: 'bank account',
            depositAddress: '0xdfsadfmsdkfgmfglkadsgfdsangjajdfgjl',
            depositAmount: 1000,
            outputCurrency: 'usdt',
            outputAmount: 900,
          };
          resolve(data);
        } else {
          reject('500 error');
        }
      }, 3000);
    });
  },
};
