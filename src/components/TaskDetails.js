import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const TaskDetails = ({ task, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(task.id)
  }

  const handleUpdate = () => {
    onUpdate(task.id)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.details}>Descrição: {task.description}</Text>
      <Text style={styles.details}>Data de Vencimento: {task.dueDate}</Text>
      <TouchableOpacity onPress={handleUpdate}>
        <Text style={styles.button}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        <Text style={[styles.button, styles.deleteButton]}>Excluir</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  },
  deleteButton: {
    color: 'red',
  },
})

export default TaskDetails
