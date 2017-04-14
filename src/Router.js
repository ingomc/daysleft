import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Init from './components/Init';
import Login from './components/Login';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene key="login" hideNavBar={true} component={Login} title="Laden" initial />
        <Scene key="init" hideNavBar={true} component={Init} title="Laden"/>
        <Scene key="loginForm" hideNavBar={true} component={LoginForm} title="Einloggen"  />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
