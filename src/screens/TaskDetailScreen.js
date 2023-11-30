import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import TaskDetails from '../components/TaskDetails'

const TaskDetailScreen = ({ route }) => {
  const { task } = route.params
  const navigation = useNavigation()

  const handleDeleteTask = (taskId) => {
    console.log(`Tarefa ${taskId} deletada`)
  }

  const handleUpdateTask = (taskId) => {
    // Lógica para editar/atualizar a tarefa
    console.log(`Editar tarefa ${taskId}`);
    navigation.navigate('EditTaskScreen', { task })
  }

  return (
    <View style={styles.container}>
      <TaskDetails
        task={task}
        onDelete={handleDeleteTask}
        onUpdate={handleUpdateTask}
      />
      <TouchableOpacity onPress={() => handleUpdateTask(task.id)}>
        <Text style={styles.editButton}>Editar Tarefa</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  editButton: {
    color: 'blue',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
})

export default TaskDetailScreen
