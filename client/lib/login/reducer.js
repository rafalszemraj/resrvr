import * as type from './actionTypes';
import { isPending, hasCompleted, hasFailed } from '../redux/async';

const initialState = {

  token: null,
  isLoading: false,
  error: null

}

export default (state = initialState, action) => {

  switch (action.type) {
    case isPending(type.LOGIN) :
      return { ...state, isLoading: false, error: false };
    case hasCompleted(type.LOGIN) :
      return {...state, isLoading:false, error:false, token:action.payload.token};
    case hasFailed(type.LOGIN) :
      return {...state, isLoading:false, error:action.payload, token:null};
    default:
      return state;
  }


}
