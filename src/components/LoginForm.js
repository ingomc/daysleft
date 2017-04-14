import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, Button, SocialIcon, FormLabel, FormInput} from 'react-native-elements';

class LoginForm extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'stretch',

            }}>
                <Image source={require('../images/bg-login.jpg')} style={styles.backgroundImage}>
                    <View style={styles.containerStyle}>
                        <View style={styles.formStyle}>
                            <FormLabel labelStyle={{ color: "white" }}>E-Mail-Adresse:</FormLabel>
                            <View>
                              <FormInput borderRadius={3} placeholder='max@mustermann.de' inputStyle={{ width: null, backgroundColor:'white', padding:10}} ref='forminput' textInputRef='email'/>
                            </View>
                            <View>
                              <Button buttonStyle={{ marginTop:20, marginBottom:20, marginLeft:20, marginRight:20 }} raised borderRadius={3} backgroundColor='#397af8' title='Einloggen / Registrieren'/>
                            </View>
                        </View>
                        <SocialIcon style={{
                        margin: 18,
                        marginTop: 36,
                        width: null,
                        }} title='Sign In With Facebook' button type='facebook'/>
                    </View>
                </Image>
            </View>

        );
    }
}

var styles = {
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    containerStyle: {
      flex:1,
      padding:10,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    formStyle: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        width: null,
    }
};

export default LoginForm;
