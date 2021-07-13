import React, {useState} from "react";
import {StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

const GoalInput = ({addHandler, visible, onCancel}) => {
    const [title, setTitle] = useState("");

    const pressHandler = (title) => {
        addHandler(title);
        setTitle("");
    };

    return (

        <View>
            <TextInput
                mode='focused'
                label="Type Here"
                value={title}
                onChangeText={title => setTitle(title)}
                right={<TextInput.Icon style={{color: 'red'}} onPress={() => pressHandler(title)} name="plus" />}

            />
            {/*<View style={styles.buttonContainer}>*/}
            {/*    <Button style={styles.button} color="#548CA8" icon="plus" mode="contained" onPress={() => pressHandler(title)}>Add*/}
            {/*        Task </Button>*/}
            {/*</View>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        paddingTop: 5,
    },
    button: {
        padding: 10,
    }
});

export default GoalInput;
