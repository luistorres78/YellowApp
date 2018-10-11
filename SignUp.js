// SignUp.js
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebase from 'firebase';
import { Content, Container, Header, Left, Body, Right, Title } from 'native-base';
import { Icon } from 'react-native-elements';

export default class SignUp extends React.Component {

  state = { email: '', password: '', username: '', name: '', errorMessage: null }
  handleSignUp = () => {
    var USERNAME = this.state.username;
    var EMAIL = this.state.email;
    var NAME = this.state.name;
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function (currentUser) {
        
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            firebase.database().ref('users/' + user.uid).set(
              {
                username: USERNAME,
                email: EMAIL, 
                name: NAME
              });
          }
        });

        () => this.props.navigation.navigate('Main')
      });
  }



  render() {


    return (

      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Username"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          placeholder="Full Name"
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />

        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})