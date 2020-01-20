import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const getUserBuyer = (id_user, token) => {
  return {
    type: 'GET_USER_BUYER',
    payload: axios.get(`http://18.208.177.116:5000/user/id/${id_user}`, token, {
      headers: {
        Authorization: `Bearer ${AsyncStorage.getItem('@accessToken')}`,
      },
    }),
  };
};
