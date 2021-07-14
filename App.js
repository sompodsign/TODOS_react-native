import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Header from "./components/Header";

const date = new Date().getDate(); //To get the Current Date
const month = new Date().getMonth() + 1; //To get the Current Month
const year = new Date().getFullYear(); //To get the Current Year


export default function App() {
    const [todos, setTodos] = useState([]);


    const pressHandler = (title) => {
        setTodos([...todos, {id: todos.length + 1, title: title, date: date, month: month, year: year}]);
    }


    const deleteHandler = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    };

    return (
        <View style={styles.background}>
            <Header/>
            <View style={styles.container}>
                <GoalItem deleteItem={deleteHandler} items={todos}/>

                <GoalInput addHandler={pressHandler}/>
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
