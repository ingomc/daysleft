import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class LoginForm extends Component {
  render() {
    return (
      <Image
        source={require('../images/bg-login.jpg')}
        style={styles.backgroundImage}
        >
        <View style={styles.loginForm}>
          <Text>All your stuff</Text>
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
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default LoginForm;
