import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [name, setName] = useState('vikas sharma')
  const [person, setPerson] = useState({ name: 'Joker', age: 23 })
  const clickHandler = () => {
    setName('Vikas Sharma');
    setPerson({ name: 'Superman', age: 70 });
  }
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);
  return (
    // intro -->
    // <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text style={styles.boldText}>React Native App!</Text>
    //   </View>
    //   <View style={styles.body}>
    //     <Text style={styles.boldText}>Introduction</Text>
    //     <Text>My name is {name}</Text>
    //     <Text>His name is {person.name} and age is {person.age}</Text>
    //   </View>
    //   <Text>Enter Your name:</Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder='name'
    //     onChangeText={(val) => setPerson({ name: val, age: person.age })} />
    //   <Text>Enter Your age:</Text>
    //   <TextInput
    //     style={styles.input}
    //     placeholder='age'
    //     keyboardType='phone-pad'
    //     onChangeText={(val) => setPerson({ name: person.name, age: val })} />
    //   <View style={styles.buttonContainer}>
    //     <Button title='update state' onPress={clickHandler} />
    //   </View>
    //   <View style={styles.dynamicContainer}>
    //     {people.map((item) => {
    //       return (
    //         <View key={item.key}>
    //           <Text>{item.name}</Text>
    //         </View>
    //       )
    //     })}
    //   </View>
    // </View>

    // list --> bad performance data rendeer on single time
    // <View style={styles.dynamicContainer}>
    //   <ScrollView>
    //   {people.map((item) => {
    //       return (
    //         <View key={item.key}>
    //           <Text style={styles.item}>{item.name}</Text>
    //         </View>
    //       )
    //     })}
    //   </ScrollView>
    // </View>

    // Flat list --> good performance data rendeer to visible view only
    <View style={styles.dynamicContainer}>
      <FlatList
        data={people}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )} />
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
  },
  dynamicContainer: {
    flex: 1,
    backgroundColor: '#ffb',
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 20,
    marginTop: 8,
  },
  item: {
    marginTop: 24,
    padding: 20,
    backgroundColor: 'pink',
    fontSize: 18
  }
});
