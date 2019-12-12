import React, {Component} from 'react';
import {
  Platform,
  Stylesheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Main',
  };
  render() {
    return (
      <View>
        <Text>Main Screen</Text>
      </View>
    );
  }
}
