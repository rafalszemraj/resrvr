import * as actionTypes from './actionTypes';
import saga from './sagas';
import Login from './Login';
import reducer from './reducer';

export default { actionTypes, Login, saga, reducer, NAME:'login' };
export { Login };
