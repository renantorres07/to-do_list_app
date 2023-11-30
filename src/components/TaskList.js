import React from "react"
import { View, FlatList, StyleSheet } from "react-native"
import Task from './Task'

const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {
   const renderItem = ({ item }) => (
      <Task
         task={item}
         onDelete={onDeleteTask}
         onToggle={onToggleTask}
      />
   )

   return (
      <View style={styles.container}>
         <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 8,
   },
   list: {
      marginTop: 8,
   }
})

export default TaskList