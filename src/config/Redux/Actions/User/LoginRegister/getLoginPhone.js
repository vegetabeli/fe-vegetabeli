import axios from 'axios';
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const URL_STRING = `http://18.208.177.116:5000/user/otp`;

export const getLoginPhone = (phone, password, role) => {
  return {
    type: 'GET_LOGIN_PHONE',
    payload: axios.get(URL_STRING, {
      params: {
        to: phone,
        password: password,
        role: role,
      },
    }),
  };
};
