import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTaskList([
        ...taskList,
        { id: Date.now(), task: task, completed: false },
      ]);
      setTask("");
    }
  };

  const handleToggleTask = (id) => {
    const updatedTaskList = taskList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTaskList(updatedTaskList);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleToggleTask(item.id)}>
      <View style={[styles.taskItem, item.completed && styles.completedTask]}>
        <Text style={styles.taskText}>{item.task}</Text>
        {item.completed && <Text style={styles.completedText}>Completed</Text>}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  flatListContent: {
    marginTop: 10,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completedTask: {
    backgroundColor: "#d3d3d3",
  },
  completedText: {
    fontSize: 12,
    color: "green",
    marginLeft: 8,
  },
});

export default Home;
