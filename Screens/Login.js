import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import firebase from 'firebase';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: '',
      Password: '',
    };
  }


  SignIn = () => {
    if (this.state.Email && this.state.Password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.Email, this.state.Password)
        .then(()=>{console.log("Sign succesfull")})
        .catch((Error)=>{
          alert(Error.message)
        })
    } else {
      alert('Enter Email And Password');
    }
  };
  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextInput
          style={styles.Input}
          placeholder="Email"
          onChangeText={(Text) => {
            this.setState({
              Email: Text,
            });
          }}
        />

        <TextInput
          style={styles.Input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(Text) => {
            this.setState({
              Password: Text,
            });
          }}
        />
        <TouchableOpacity style={styles.SignInButton} onPress={this.SignIn}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Input: {
    borderWidth: 2,
    marginTop: 10,
  },

  SignInButton: {
    borderWidth: 1,
    width: 50,
    alignSelf: 'center',
    marginTop: 10,
  },
});
