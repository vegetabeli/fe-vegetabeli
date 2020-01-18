import {combineReducers} from 'redux';

import postRegister from '../Reducers/User/LoginRegister/postRegister'
import getLogin from '../Reducers/User/LoginRegister/getLogin'
import emailInsert from '../Reducers/User/ForgotPassword/emailInsert'
import codeInsert from '../Reducers/User/ForgotPassword/codeInsert'
import passwordInsert from '../Reducers/User/ForgotPassword/passwordInsert'

const reducers = combineReducers({
  postRegister,
  getLogin,
  emailInsert,
  codeInsert,
  passwordInsert
})

export default reducers