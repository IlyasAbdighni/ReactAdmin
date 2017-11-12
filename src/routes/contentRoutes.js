import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../components/auth/Login';
import Dash from '../components/content/index';

const ContentRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Dash} exact={true} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default ContentRoutes;
