import React, { Component } from 'react';
import { Provider } from 'react-redux';
import XxXApp from './XxXApp';
import { Router, Route, browserHoistory } from 'react-router';
import configureStore from '../store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';


const store = configureStore();


export default class Root extends Component {

  render() {
    return (

      <Provider store={store}>
        <div style={{height:'100%'}}>
          <XxXApp />
        </div>
      </Provider>
    );
  }
}