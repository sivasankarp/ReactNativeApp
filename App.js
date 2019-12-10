import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('vikas sharma')
  const [person, setPerson] = useState({ name: 'Joker', age: 23 })
  const clickHandler = () => {
    setName('Vikas Sharma');
    setPerson({ name: 'Superman', age: 70 });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>React Native App!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Introduction</Text>
        <Text>My name is {name}</Text>
        <Text>His name is {person.name} and age is {person.age}</Text>
      </View>
      <Text>Enter Your name:</Text>
      <TextInput
        style={styles.input}
        placeholder='name'
        onChangeText={(val) => setPerson(val)} />
      <Text>Enter Your age:</Text>
      <TextInput
        style={styles.input}
        placeholder='age'
        keyboardType='numeric'
        onChangeText={(val) => setName(val)} />
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: "pink",
    padding: 8,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "#ffa",
    margin: 10,
    padding: 8,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 4,
    padding: 6,
    margin: 8,
    width: 200,
  }
});
