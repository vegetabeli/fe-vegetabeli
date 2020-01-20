import axios from 'axios';

export const getProduct = token => dispatch => {
  axios
    .get(`https://18.208.177.116:5000/product`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer `.concat(token),
      },
    })
    .then(res => {
      console.log('res product ', res);
      dispatch({
        type: 'GET_PRODUCT_FULFILLED',
        payload: res.data.data,
      });
    })

    .catch(err => {
      console.log(err);
    });
};
