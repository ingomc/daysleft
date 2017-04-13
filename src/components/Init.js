import React, {Component} from 'react';
import {  ActivityIndicator, View, Text, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        animating: true,
      };
    }

  setToggleTimeout() {
    this._timer = setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
      Actions.login();
    }, 2000);
  }

  componentDidMount() {
    this.setToggleTimeout();
  }

    render() {
        return (
            <Image source={require('../images/bg-login.jpg')} style={styles.backgroundImage}>
                <View style={styles.loginForm}>
                  <ActivityIndicator
                      size="large"
                      color="#ffffff"
                    />
                </View>
            </Image>
        );
    }
}

var styles = {
    backgroundImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default LoginForm;
