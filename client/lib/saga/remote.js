import { put, call } from 'redux-saga/effects';
import Api from '../api'
import { isPending ,hasCompleted, hasFailed } from '../redux/async';


export default function* (action, apiCall) {

  const { type, payload } = action;
  yield put( {type:isPending(type), payload });
  console.log(...payload);
  try {
    const response = yield call(apiCall);
    console.log("response => ", response );
    yield put( {type:hasCompleted(type), payload:response})
  }
  catch(error) {
    console.log("error => ", error );
    yield put( { type:hasFailed(type), error})

  }


}
