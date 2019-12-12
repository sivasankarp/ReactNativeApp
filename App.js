import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Signup from './components/signup';

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

  // const pressHandler = (id) => {
  //   console.log(id);
  //   setPeople((prevPeople) => {
  //     return prevPeople.filter(person => person.id != id);
  //   });
  // };

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      //setText('');
      setTodos(prevTodos => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

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
    // <View style={styles.dynamicContainer}>

    //   <FlatList 
    //     numColumns={2}
    //     keyExtractor={(item) => item.id} 
    //     data={people} 
    //     renderItem={({ item }) => ( 
    //       <Text style={styles.item}>{item.name}</Text>
    //     )}
    //   />
    // </View>

    // <View style={styles.dynamicContainer}>

    //   <FlatList
    //     numColumns={2}
    //     keyExtractor={(item) => item.id}
    //     data={people}
    //     renderItem={({ item }) => (
    //       <TouchableOpacity onPress={() => pressHandler(item.id)}>
    //         <Text style={styles.item}>{item.name}</Text>
    //       </TouchableOpacity>
    //     )}
    //   />
    // </View>

    // <View style={styles.container}>
    //   <Header />
    //   <View style={styles.content}>
    //     {/* add todo form */}
    //     <View style={styles.list}>
    //       <FlatList
    //         data={todos}
    //         renderItem={({ item }) => (
    //           <Text>{item.text}</Text>
    //         )}
    //       />
    //     </View>
    //   </View>
    // </View>

    // <View style={styles.container}>
    //   <Header />
    //   <View style={styles.content}>
    //     {/* add todo form */}
    //     <View style={styles.list}>
    //       <FlatList
    //         data={todos}
    //         renderItem={({ item }) => (
    //           <TodoItem item={item} pressHandler={pressHandler} />
    //         )}
    //       />
    //     </View>
    //   </View>
    // </View>

    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //   <View style={styles.container}>
    //     <Header />
    //     <View style={styles.content}>
    //       <AddTodo submitHandler={submitHandler} />
    //       <View style={styles.list}>
    //         <FlatList
    //           data={todos}
    //           renderItem={({ item }) => (
    //             <TodoItem item={item} pressHandler={pressHandler} />
    //           )}
    //         />
    //       </View>
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback>

    <View>
      <Signup></Signup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd',
    //alignItems: 'center',
    //justifyContent: 'center',
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
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
