import React, { useEffect, useState, useRef } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/todos";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [category, setCategory] = useState();

  const count = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const arrayData = await AsyncStorage.getItem("@tasks");
        const tasks = arrayData ? JSON.parse(arrayData) : [];
        console.log(tasks);
        setTaskList(tasks);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleAddTask = async () => {
    console.log(count);
    if (task) {
      setTaskList([
        ...taskList,
        { id: Date.now(), task: task, completed: false },
      ]);
      setTask("");
      try {
        await AsyncStorage.setItem("@tasks", JSON.stringify(taskList));
      } catch (error) {
        console.log(error);
      }
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

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Picker
        ref={pickerRef}
        selectedValue={category}
        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Button title="Add Task" onPress={handleAddTask} />
      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.bContainer}>
        <Text style={styles.counterText}>Count: {count}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => dispatch(increment())} />
          <Button title="-" onPress={() => dispatch(decrement())} />
        </View>
      </View>
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
  bContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default Home;
