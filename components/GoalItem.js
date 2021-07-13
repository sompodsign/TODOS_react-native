import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

const GoalItem = ({ items, deleteItem }) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={items}
        renderItem={({ item }) => (

            <Card.Title
            style={{color: 'green'}}
             onPress={deleteItem}
              title={item.title}
              titleStyle={{color: "white"}}
              subtitle={`${item.date}/0${item.month}`}
              subtitleStyle={{color: '#EEEEEE'}}
              left={(props) => <Avatar.Icon {...props} icon="calendar-check" />}
              right={(props) => (
                <IconButton {...props} icon="check" onPress={() => deleteItem(item.id)} />
              )}
            />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    borderWidth: 1,
    backgroundColor: "#ccc",
    margin: 2,
    padding: 6,
  },
});
export default GoalItem;
