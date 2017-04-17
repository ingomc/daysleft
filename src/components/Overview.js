import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Reactotron from 'reactotron-react-native';

import { Button } from 'react-native-elements';


var LOGIN_EMAIL = '@AsyncStorageLogin:LoginEmail';
var LOGIN_PASSWORD = '@AsyncStorageLogin:LoginPAssword';

class Overview extends Component {
  onRemoveUser() {
    let keys = [LOGIN_EMAIL, LOGIN_PASSWORD];
    AsyncStorage.multiRemove(keys, (err) => {
      console.log('success remove');
    });
  }
  onButtonPress() {
    console.log('Press button');
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
        console.log('success');
        //Actions.auth();
    }).catch(function(error) {
      // An error happened.
      console.log('fail: ' + error);
    });
    this.onRemoveUser();
    Actions.auth();
  }
  render(){
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello23</Text>
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
            title='Ausloggen'
          />
      </View>
    );
  }
};

export default Overview;
