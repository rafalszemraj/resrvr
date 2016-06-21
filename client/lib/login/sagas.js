import remote from '../saga/remote';
import * as type from './actionTypes';
import { takeEvery } from 'redux-saga'
import API from '../api';

function* logIn(action) {

    const {login, password} = action.payload;
    yield remote(action, API.login(login, password));


}



export default function* wateForlogin() {

    console.log(API);
    yield takeEvery(type.LOGIN, logIn)
  
}

