import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';

ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  root);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextApp = require('./containers/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
    </AppContainer>,
    root
    );
  });
}
