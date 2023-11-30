import React, { useState } from "react"
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native"

const AddTaskForm = ({ onAddTask }) => {
   const [taskText, setTaskText] = useState('')

   const handleAddTask = () => {
      if (taskText.trim() !== '') {
         onAddTask(taskText)
         setTaskText('')
      }
   }

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.input}
            placeholder="Digite sua nova tarefa"
            value={taskText}
            onChangeText={(text) => setTaskText(text)}
         />
         <TouchableOpacity onPress={handleAddTask}>
            <Text style={styles.addButton}>Adicionar</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc'
   },
   input: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 8,
      marginRight: 8,
   },
   addButton: {
      color: 'green',
      fontSize: 16,
   }
})

export default AddTaskForm