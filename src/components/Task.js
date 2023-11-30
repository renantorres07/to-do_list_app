import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Task = ({ task, onDelete, onToggle}) => {
   const handleDelete = () => {
      onDelete(task.id)
   }

   const handleToggle = () => {
      onToggle(task.id)
   }

   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={handleToggle}>
            <Text style={task.completed ? styles.taskCompleted : styles.task}>
               {task.title}
            </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.deleteButton}>Delete</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderColor: "#ccc"
   },
   task: {
      fontSize: 16,
      color: '#333'
   },
   taskCompleted: {
      fontSize: 16,
      color: '#aaa',
      textDecorationLine: 'line-through',
   },
   deleteButton: {
      color: 'red',
      fontSize: 16,
   }
})

export default Task