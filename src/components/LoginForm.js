import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, Button, SocialIcon, FormLabel, FormInput} from 'react-native-elements';

class LoginForm extends Component {
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
                <FormInput borderRadius={3} placeholder='max@mustermann.de' ref='forminput' textInputRef='email'/>

                <FormLabel>Passwort:</FormLabel>
                <FormInput secureTextEntry borderRadius={3} placeholder='Passwort' ref='forminput' textInputRef='password'/>
                <Button buttonStyle={{
                    marginTop: 20,
                    marginBottom: 20,
                    marginLeft: 20,
                    marginRight: 20
                }} raised borderRadius={3} backgroundColor='#397af8' title='Einloggen / Registrieren'/>
            </Card>
            <View style={styles.formStyle}></View>
            <SocialIcon style={{
                margin: 18,
                marginTop: 36,
                width: null
            }} title='Sign In With Facebook' button type='facebook'/>
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
    }
};
export default LoginForm;
