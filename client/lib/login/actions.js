import * as type from './actionTypes';
import API from '../api'

const logIn = (login,password) => (
  {
    type:type.LOGIN,
    payload: {login, password}
  });


export default { logIn }