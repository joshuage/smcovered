import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import Theme from './ui/Theme';
import Alert from './ui/Alert';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';
import AmbassadorQuery from './ambassador/query';
import Admin from './admin/dashbord';

// Redux
import { Provider } from 'react-redux';
import store from '../store'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Router>
          <Alert />
          <Switch>
            <Route exact path='/' component={ Login } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/ambassador' component={ AmbassadorQuery } />
            <Route exact path='/admin' component={ Admin } />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
