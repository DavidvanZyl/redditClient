import './App.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import routes from './constants/routes';
import reduxStore from './data/redux/store';
import Home from './ui/pages/Home';
import Post from './ui/pages/Post';

function App() {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Switch>
          <Route path={routes.POST} component={Post} />
          <Route path={routes.HOME} component={Home} />
          <Redirect from="/" to="/r/pics" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
