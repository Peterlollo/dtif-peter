import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
// import DevTools for use in development
import DevTools from './containers/devTools'

const target = document.querySelector('#root')
registerServiceWorker();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
        {/* Add DevTools component for use in development */}
        <DevTools></DevTools>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
