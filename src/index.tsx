import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { RootState } from './types';
import { listUsers } from './reducers/ListUsersReducers';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ListUsers from './containers/ListUsers';
import EditUsers from './containers/EditUsers';
import { editUsers } from './reducers/EditUserReducer';

const store = createStore<RootState>(
  combineReducers({
    listUsersState: listUsers,
    editUsersState: editUsers
  }),
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact={true} path="/" component={ListUsers} />
        <Route path="/edit/:id" component={EditUsers} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
