import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import TaskList from '../components/TaskList'
import AddTaskForm from '../components/AddTaskForm'
import Header from '../components/Header'

const HomeScreen = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    const newTask = {
      id: Math.random().toString(),
      title: text,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <View style={styles.container}>
      <Header title="Lista de Tarefas" />
      <AddTaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default HomeScreen
