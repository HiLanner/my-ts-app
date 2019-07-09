import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from './containers/Hello'

const store = createStore<StoreState, any, any, any>(enthusiasm, {
  languageName: 'TypeScript',
  enthusiasmLevel: 1,
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
