import axios from 'axios';
const PORT = process.env.PORT
const HOST = process.env.HOST

const URL_STRING = `http://192.168.6.169:5000/market`;

export const getAllMarket = (token) => {
  return {
    type: 'GET_ALL_MARKET',
    payload: axios.get(URL_STRING, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    }
    )
  };
};
