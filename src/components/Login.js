import React, { Component } from 'react';
import { Text, Image, ActivityIndicator, LayoutAnimation } from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

    componentWillUpdate() {
      LayoutAnimation.easeInEaseOut();
    }

    setToggleTimeout() {
      this._timer = setTimeout(() => {
        this.setState({loading: !this.state.loading});
      }, 2000);
    }


    renderForm() {
      if (this.state.loading == true) {
        return (
          <ActivityIndicator
            style={{ flex:1, backgroundColor: 'transparent' }}
            size="large"
            color="#ffffff" />
        );
      }
      return (
        <LoginForm />
      );
    }
    componentDidMount() {
      this.setToggleTimeout();
    }

    render() {
        return (
            <Image source={require('../images/bg-login.jpg')} style={styles.backgroundImage}>
                {this.renderForm()}
            </Image>
        );
    }
}

var styles = {
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
};

export default Login;
