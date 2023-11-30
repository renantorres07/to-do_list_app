import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

const EditTaskScreen = ({ route }) => {
   const { task } = route.params
   const [editedTask, setEditedTask] = useState(task)
   // Lógica para atualizar os detalhes da tarefa

   const handleSaveTask = () => {
      // Lógica para salvar a tarefa editada
      console.log('Tarefa editada:', editedTask);
      // Aqui você pode implementar a lógica para atualizar os detalhes da tarefa em uma fonte de dados
      // Por exemplo, atualizar uma lista de tarefas, fazer uma requisição para uma API, etc.
   }

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Editar Tarefa</Text>
         <TextInput
            style={styles.input}
            placeholder="Título da Tarefa"
            value={task.title} // Exibe o título atual da tarefa
         // Lógica para atualizar o título da tarefa ao ser modificado pelo usuário
         />
         {/* Adicione campos de entrada para outros detalhes da tarefa, como descrição, data, etc. */}
         <TouchableOpacity onPress={() => {}}>
            <Text style={styles.saveButton}>Salvar</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
   },
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
   },
   input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
   },
   saveButton: {
      backgroundColor: 'blue',
      color: '#fff',
      textAlign: 'center',
      padding: 12,
      borderRadius: 5,
      fontSize: 16,
   },
})

export default EditTaskScreen
