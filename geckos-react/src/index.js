import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
