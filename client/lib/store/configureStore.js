import Promise from 'bluebird';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import sagaMiddlewareFactory from 'redux-saga';
import rootReducer from '../rootReducer';
import { routerReducer } from 'react-router-redux';
import remote from '../saga/remote'
import sagaMonitor from '../saga/monitor';

//
import login from '../login'  

const sagaMiddleware = sagaMiddlewareFactory({ sagaMonitor });

export default () => {

  const store  = createStore(rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  console.log( 'login: ',  login );
  sagaMiddleware.run(login.saga)
  if( module.hot) {
    module.hot.accept('../rootReducer', () => store.replaceReducer(require('../rootReducer').default));
  }
  return store;
}
