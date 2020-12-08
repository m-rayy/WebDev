import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/App';
import './containers/App.css';
import { searchRobots } from './reducers';

// Will import rootReducer (1 source of truth) later:
const store = createStore(searchRobots);

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <App/>
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
