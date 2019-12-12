import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  CheckBox,
  Button,
  TouchableOpacity,
  ToastAndroid,
  Keyboard,
} from 'react-native';

export default class Signup extends Component {
  state = {
    fname: '',
    lname: '',
    email: '',
    pass: '',
    repass: '',
  };
  handlefname = text => {
    this.setState({fname: text});
  };
  handlelname = text => {
    this.setState({lname: text});
  };
  handleemail = text => {
    this.setState({email: text});
  };
  handlePass = text => {
    this.setState({pass: text});
  };
  handlerePass = text => {
    this.setState({repass: text});
  };
  static navigationOptions = {
    title: 'Signup',
  };
  mywork = () => {
    const {fname, lname, email, pass, repass} = this.state;
    if (
      fname == '' &&
      lname == '' &&
      email == '' &&
      pass == '' &&
      repass == ''
    ) {
      ToastAndroid.show('Please Fill in the all Blanks', ToastAndroid.SHORT);
    } else {
      Keyboard.dismiss();
      ToastAndroid.show('Successful Registerd', ToastAndroid.LONG);
      this.props.navigation.navigate('Home');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>SignUp</Text>
        <TextInput
          style={styles.Textinput}
          placeholder="Enter Your First Name"
          placeholderTextColor="#36485f"
          underlineColorAndroid={'transparent'}
          onChangeText={this.handlefname}
        />
        <TextInput
          style={styles.Textinput}
          placeholder="Enter Your Last Name"
          placeholderTextColor="#36485f"
          underlineColorAndroid={'transparent'}
          onChangeText={this.handlelname}
        />
        <TextInput
          style={styles.Textinput}
          placeholder="Enter Your Email"
          placeholderTextColor="#36485f"
          underlineColorAndroid={'transparent'}
          onChangeText={this.handleemail}
        />
        <TextInput
          style={styles.Textinput}
          placeholder="Enter Your Password"
          placeholderTextColor="#36485f"
          underlineColorAndroid={'transparent'}
          onChangeText={this.handlePass}
        />
        <TextInput
          style={styles.Textinput}
          placeholder="Re-Enter Your Password"
          placeholderTextColor="#36485f"
          underlineColorAndroid={'transparent'}
          onChangeText={this.handlerePass}
        />
        <TouchableOpacity style={styles.submitButton1} onPress={this.mywork}>
          <Text style={styles.submitButtonText1}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  header: {
    color: '#36485f',
    alignSelf: 'stretch',
    fontSize: 24,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#36485f',
    paddingBottom: 10,
    paddingTop: 20,
    marginLeft: 20,
    marginRight: 30,
    fontWeight: 'bold',
  },
  Textinput: {
    alignSelf: 'stretch',
    paddingTop: 10,
    height: 40,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 50,
  },
  submitButton1: {
    backgroundColor: '#36485f',
    padding: 10,
    height: 40,
    width: 150,
    marginLeft: 130,
    marginTop: 25,
  },
  submitButtonText1: {
    textAlign: 'center',
    color: '#fff',
  },
});
