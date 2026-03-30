import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { Button, CheckBox } from '@rneui/themed';

export default function App() {
  // Default tasks (REQUIRED)
  const [tasks, setTasks] = useState([
    { key: '1', description: 'Finish homework', completed: false },
    { key: '2', description: 'Go to the gym', completed: true },
    { key: '3', description: 'Buy groceries', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  // Toggle checkbox
  const toggleTask = (key) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.key === key
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Add task
  const addTask = () => {
    if (newTask.trim() === '') return;

    const newItem = {
      key: Date.now().toString(),
      description: newTask,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newItem]);
    setNewTask('');
  };

  // Render each task
  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <CheckBox
        checked={item.completed}
        onPress={() => toggleTask(item.key)}
      />

      <Text
        style={[
          styles.taskText,
          item.completed && styles.completedText,
        ]}
      >
        {item.description}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Input + Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={addTask}
        />

        <Button title="Add" onPress={addTask} />
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },

  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  taskText: {
    fontSize: 16,
  },

  completedText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'gray',
  },
});