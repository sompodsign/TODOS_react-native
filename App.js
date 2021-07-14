import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Header from "./components/Header";
import Realm from "realm";

const date = new Date().getDate(); //To get the Current Date
const month = new Date().getMonth() + 1; //To get the Current Month
const year = new Date().getFullYear(); //To get the Current Year

const TaskSchema = {
  name: "Task",
  properties: {
    _id: "int",
    title: "string",
    date: "string?",
    month: "string",
  },
  primaryKey: "_id",
};

const realm = async () =>
  await Realm.open({
    path: "myrealm",
    schema: [TaskSchema],
  });

// let task1, task2;
// realm.write(() => {
//   task1 = realm.create("Task", {
//     _id: 1,
//     name: "go grocery shopping",
//     status: "Open",
//   });
//   task2 = realm.create("Task", {
//     _id: 2,
//     name: "go exercise",
//     status: "Open",
//   });
//   console.log(`created two tasks: ${task1.name} & ${task2.name}`);
// });

export default function App() {
  const [todos, setTodos] = useState([]);

  const pressHandler = (title) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: title,
        date: date,
        month: month,
        year: year,
      },
    ]);
    realm.write(() => {
      realm.create("Task", {
        _id: todos.length + 1,
        title: title,
        date: date,
        month: month,
        year: year,
      });
    });
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.background}>
      <Header />
      <View style={styles.container}>
        <GoalItem deleteItem={deleteHandler} items={todos} />

        <GoalInput addHandler={pressHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#47597E",
    flex: 1,
  },
  container: {
    padding: 30,
    marginTop: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
});
