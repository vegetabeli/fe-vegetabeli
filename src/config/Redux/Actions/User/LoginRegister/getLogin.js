import axios from 'axios';
const PORT = process.env.PORT
const HOST = process.env.HOST

const URL_STRING = `http://192.168.6.169:5000/user/login`;

export const getLogin = (email, password, role) => {
  return {
    type: 'GET_LOGIN',
    payload: axios.get(URL_STRING,{
      params: {
        email: email,
        password: password,
        role: role
      }
    })
  };
};
