import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux';
import { StoreState } from './types';
import { listUsers } from './reducers';
import { Provider } from 'react-redux';
import ListUsers from './containers/ListUsers';

const store = createStore<StoreState>(listUsers, {
  'users': [
    {
      'id': 0,
      'firstName': 'Aniyah',
      'lastName': 'Luettgen',
      'phone': '861-332-5113',
      'email': 'Danika.Ryan84@yahoo.com',
      'role': 'admin'
    },
    {
      'id': 1,
      'firstName': 'Alisa',
      'lastName': 'Pacocha',
      'phone': '085-056-3901',
      'email': 'Eusebio68@yahoo.com',
      'role': 'admin'
    }
  ]
});

ReactDOM.render(
  <Provider store={store}>
    <ListUsers/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
