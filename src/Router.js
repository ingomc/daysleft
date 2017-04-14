import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Login from './components/Login';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" hideNavBar={true} component={Login} title="Laden" initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
