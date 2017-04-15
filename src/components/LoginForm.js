import React, {Component} from 'react';
import {View, Text, Image } from 'react-native';
import {Card, Button, SocialIcon, FormLabel, FormInput} from 'react-native-elements';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import { inputChanged, loginUser } from '../actions';
import { Spinner } from './common';


class LoginForm extends Component {
  onButtonPress() {
    Reactotron.log(this.props);

    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }
  renderError() {
      if (this.props.error) {
        return (
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        );
      }

  }
  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner />
      );
    }
    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        buttonStyle={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20
        }}
        raised
        borderRadius={3}
        backgroundColor='#397af8'
        title='Einloggen / Registrieren'
      />
    );
}
  render() {
    return (
        <View style={styles.containerStyle}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image style={{
                    width: 48,
                    height: 48
                }} source={require('../images/app-icon.png')}></Image>
                <Text style={{
                    fontSize: 30,
                    marginLeft: 10,
                    color: 'white'
                }}>Daysleft</Text>
            </View>
            <Card containerStyle={{
                borderRadius: 3,
                backgroundColor: 'rgba(255,255,255,0.9)',
                padding: 0
            }}>
                <FormLabel>E-Mail-Adresse:</FormLabel>
                <FormInput
                  inputStyle={{ width: null }}
                  borderRadius={3}
                  placeholder='max@mustermann.de'
                  ref='forminput'
                  textInputRef='email'
                  value={this.props.email}
                  onChangeText={value => this.props.inputChanged({ prop: 'email', value })}
                />

                <FormLabel>Passwort:</FormLabel>
                <FormInput
                value={this.props.password}
                onChangeText={value => this.props.inputChanged({ prop: 'password', value })}
                inputStyle={{ width: null }} secureTextEntry borderRadius={3} placeholder='Passwort' ref='forminput' textInputRef='password'/>


                {this.renderError()}
                {this.renderButton()}

            </Card>

            <SocialIcon style={{
                margin: 18,
                marginTop: 36,
                width: null
            }} title='Mit Facebook einloggen' button type='facebook'/>
        </View>
    );
  }
}

const styles = {
    containerStyle: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    errorTextStyle: {
      fontSize: 10,
      paddingTop:5,
      alignSelf: 'center',
      color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};


export default connect(mapStateToProps, {
  inputChanged, loginUser
})(LoginForm);
