import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

import styles from './TodoStyles';

class Todo extends Component {
  state = {
    task: '',
    list: []
  };

  onPressAddTask = () => {
    if (this.state.task) {
      const newTask = this.state.task;
      const lastTask = this.state.list[0] || { id: 0 };
      const newId = Number(lastTask.id + 1);

      this.setState({
        list: [{ id: newId, task: newTask }, ...this.state.list],
        task: ''
      });
    }
  }

  onPressDeleteTask = id => {
    Alert.alert('Delete', 'Do you really want to delete this task?', [
      {
        text: 'Yes, delete it',
        onPress: () => {
          this.setState({
            list: this.state.list.filter(task => task.id !== id)
          });
        }
      }, {
        text: 'No, keep it'
      }
    ]);
  }

  render() {
    const { list } = this.state;
    let zebraIndex = 1;

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View style={styles.list}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Todo List</Text>
            </View>

            <View style={styles.add}>
              <TextInput
                style={styles.inputText}
                placeholder="Add a new task"
                onChangeText={(value) => this.setState({ task: value })}
                value={this.state.task}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={this.onPressAddTask}
              >
                <Text style={styles.submitText}>+ Add Task</Text>
              </TouchableOpacity>
            </View>

            {list.length === 0 && (
              <View style={styles.noTasks}>
                <Text style={styles.noTasksText}>There are no tasks yet, create a new one!</Text>
              </View>
            )}

            {list.map((item, i) => {
              zebraIndex = zebraIndex === 2 ? 1 : 2;

              return (
                <View key={`task${i}`} style={styles[`task${zebraIndex}`]}>
                  <Text>{item.task}</Text>
                  <TouchableOpacity onPress={() => { this.onPressDeleteTask(item.id) }}>
                    <Text style={styles.delete}>
                      X
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Todo;
