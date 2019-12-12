import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TextInput,
  TouchableOpacity,
  Button,
  Keyboard,
} from 'react-native';

export default class Home extends Component {
  state = {
    email: '',
    password: '',
  };
  handleEmail = text => {
    this.setState({email: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };
  static navigationOptions = {
    title: 'Home',
  };
  myFun = () => {
    const {email, password} = this.state;
    Keyboard.dismiss();
    if (email == '') {
      //alert('Please fill the Email');
      this.setState({Error: 'Please fill the Email'});
    } else if (password == '') {
      this.setState({Error: 'Please fill the Password'});
    } else if (email == 'user' && password == '123') {
      this.props.navigation.navigate('Main');
    } else {
      console.warn('Email or Password is Incorrect');
      //ToastAndroid.show('Email or Password is Incorrect', ToastAndroid.SHORT);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'red', textAlign: 'center'}}>
          {this.state.Error}
        </Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#36485f"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#36485f"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />

        <TouchableOpacity style={styles.submitButton} onPress={this.myFun}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.btnsignup}> Haven't Account? Signup here </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#36485f',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#36485f',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    textAlign: 'center',
    color: 'white',
  },
  btnsignup: {
    textAlign: 'center',
  },
});
