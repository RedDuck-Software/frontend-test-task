// import { axiosInstance } from './instance';

export const pricesAPI = {
  async getPrice(): Promise<number> {
    // await axiosInstance.get(`SOME_ENDPOINT`)

    // it can return exception or normal data (random)
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomResult = Math.random();
        if (randomResult > 0.5) {
          resolve(100);
        } else {
          reject('500 error');
        }
      }, 3000);
    });
  },
};
