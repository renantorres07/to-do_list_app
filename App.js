import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import {
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Platform,
  AsyncStorage
} from 'react-native'

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native'

export default function App() {
  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState('')
  const [taskStatus, setTaskStatus] = useState({})

  async function addTask() {
    const search = task.filter(task => task === newTask)

    if (search.length !== 0) {
      Alert.alert("Atention", "Task name already in use!")
      return
    }

    setTask([...task, newTask])
    setNewTask('')

    Keyboard.dismiss()
  }

  async function removeTask(item) {
    Alert.alert(
      "Delete Task",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => setTask(task.filter(tasks => tasks !== item))
        }
      ],
      { cancelable: false }
    )
  }

  function toggleTaskCompletion(item) {
    setTaskStatus({
      ...taskStatus,
      [item]: !taskStatus[item],
    })
  }

  useEffect(() => {
    async function carregarDados() {
      const task = await AsyncStorage.getItem("task")

      if (task) {
        setTask(JSON.parse(task))
      }
    }
    carregarDados()
  }, [])

  useEffect(() => {
    async function salvarDados() {
      AsyncStorage.setItem("task", JSON.stringify(task))
    }
    salvarDados()
  }, [task])

  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior='padding'
        style={{ flex: 1 }}
        enabled={Platform.OS === "ios"}
        >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.Titulo}>To-Do List</Text>
          </View>
          <View style={styles.Body}>
            <FlatList
              data={task}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              style={styles.FlatList}
              renderItem={({ item }) => (
                <View style={styles.ContainerView}>
                  <TouchableOpacity
                    onPress={() => toggleTaskCompletion(item)}
                    style={styles.Checkbox}
                  >
                    {taskStatus[item] ? (
                      <MaterialIcons
                        name='check-box'
                        size={25}
                        color='#1c6cce'
                      />
                    ) : (
                      <MaterialIcons
                        name='check-box-outline-blank'
                        size={25}
                        color='#1c6cce'
                      />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.Texto}>{item}</Text>  
                  <TouchableOpacity onPress={() => removeTask(item)}>
                    <MaterialIcons
                      name='delete-forever'
                      size={25}
                      color='#f64c75'
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>

          <View style={styles.Form}>
            <TextInput
              style={styles.Input}
              placeholderTextColor='#999'
              autoCorrect={true}
              value={newTask}
              placeholder='Adicione uma tarefa'
              maxLength={25}
              onChangeText={text => setNewTask(text)}
            />
            <TouchableOpacity style={styles.Button} onPress={() => addTask()}>
              <Ionicons name='ios-add' size={20} color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#0C356A",
  },
  Body: {
    flex: 1
  },
  header: {
    backgroundColor: '#0174BE',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 40,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#FFC436"
  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: "#FFC436",
    marginBottom: 20
  },
  Input: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFF0CE",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#FFC436"
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9ADE7B",
    borderRadius: 4,
    marginLeft: 10
  },
  FlatList: {
    flex: 1,
    marginTop: 5
  },
  Texto: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center"
  },
  Titulo: {
    fontSize: 25,
    color: "#FFC436",
    fontWeight: "bold",
    textAlign: "center"
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#FFF0CE",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#FFC436"
  }
})
