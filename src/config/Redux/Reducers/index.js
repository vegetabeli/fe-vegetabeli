import {combineReducers} from 'redux';

import postRegister from '../Reducers/User/LoginRegister/postRegister'
import getLogin from '../Reducers/User/LoginRegister/getLogin'
import emailInsert from '../Reducers/User/ForgotPassword/emailInsert'
import codeInsert from '../Reducers/User/ForgotPassword/codeInsert'
import passwordInsert from '../Reducers/User/ForgotPassword/passwordInsert'
import getLoginPhone from '../Reducers/User/LoginRegister/getLoginPhone'
import patchUserBuyer from '../Reducers/User/CrudUser/patchUserBuyer'
import getUserBuyer from '../Reducers/User/CrudUser/getUserBuyer'

const reducers = combineReducers({
  postRegister,
  getLogin,
  emailInsert,
  codeInsert,
  passwordInsert,
  getLoginPhone,
  patchUserBuyer,
  getUserBuyer
})

export default reducers