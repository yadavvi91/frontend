import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { StoreState } from './types';
import { listUsers } from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ListUsers from './containers/ListUsers';
import EditUsers from './components/EditUsers';

const store = createStore<StoreState>(
  listUsers,
  {
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
  },
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact={true} path="/" component={ListUsers} />
        <Route path="/edit/:id(\d+)" component={EditUsers} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
