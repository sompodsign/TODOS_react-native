import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Header from "./components/Header";
import { Button } from 'react-native-paper';

var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month

export default function App() {

  const [todos, setTodos] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const pressHandler = (title) => {
    setTodos([...todos, { id: todos.length + 1, title: title, date: date, month: month }]);
    setIsAddMode(false);
  };

  const deleteHandler = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <ImageBackground
      source={require("./assets/back.png")}
      style={styles.backgroundImage}
    >
      <Header />
      <View style={styles.container}>
        <Button color="#548CA8" icon="plus" mode="contained" onPress={() => setIsAddMode(true)} >Add Task </Button>
        <GoalInput
          onCancel={cancelGoalAdditionHandler}
          addHandler={pressHandler}
          visible={isAddMode}
        />

        <GoalItem deleteItem={deleteHandler} items={todos} />
      </View>


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
