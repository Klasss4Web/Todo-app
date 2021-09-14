// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Keyboard, TouchableOpacity, StyleSheet, Text, TextInput, ScrollView, View, Platform } from 'react-native';

import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [taskUpdate, setTaskUpdate] =  useState(true);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if(!task) {
      return alert("Please Enter a task")
    }
    setTaskItems([...taskItems, task])
    setTask('');
    setTaskUpdate(false)
  }

  const completedTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        {taskUpdate ? <Text style={styles.sectionUpdate}>
           Your task board is empty, try adding a new task
        </Text> : <Text style={styles.sectionUpdate}>
           You have {taskItems.length} tasks pending
        </Text>} 
        <View style={styles.items}>
          { taskItems.map((item, index) => {
           return(
            <TouchableOpacity key={index}>
              <Task taskTitle={item} completedTask={()=>completedTask(index)} />
            </TouchableOpacity>
           )          
          })}
        </View>
      </View>

      <KeyboardAvoidingView 
        behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
          style={styles.input} 
          placeholder='type a task'
          value={task} 
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#26A9E0'
  },
  sectionUpdate: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: "80%",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'green',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  addText: {
    fontSize: 34
  }
});
