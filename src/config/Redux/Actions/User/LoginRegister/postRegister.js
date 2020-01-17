import axios from 'axios';
const PORT = process.env.PORT
const HOST = process.env.HOST

const URL_STRING = `http://192.168.6.169:5000/user/register`;

export const postRegister = (data) => {
  return {
    type: 'POST_REGISTER',
    payload: axios.post(
      URL_STRING,
      data,
      {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    ),
  };
};
