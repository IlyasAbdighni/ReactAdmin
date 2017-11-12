import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../components/auth/Login';
import Dashboard from '../components/content/Dashboard';
import Charts from '../components/content/Charts';

// const Dashboard = () => {
//   return <div>Dashboard</div>;
// };

const ContentRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/charts" component={Charts} />
      </Switch>
    </div>
  );
};

export default ContentRoutes;
