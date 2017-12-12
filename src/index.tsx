import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { RootState } from './types';
import { listUsers } from './reducers/ListUsersReducer';
import { editUser } from './reducers/EditUserReducer';
import { addUser } from './reducers/AddUserReducer';
import ListUsers from './containers/ListUsers';
import EditUser from './containers/EditUser';
import AddUser from './containers/AddUser';

const store = createStore<RootState>(
  combineReducers({
    listUsersState: listUsers,
    editUserState: editUser,
    addUserState: addUser
  }),
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact={true} path="/" component={ListUsers} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/add/:id" component={AddUser} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
