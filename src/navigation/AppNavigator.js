import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import TaskDetailScreen from '../screens/TaskDetailScreen'
import EditTaskScreen from '../screens/EditTaskScreen'
import SettingsScreen from '../screens/SettingsScreen'
import AboutScreen from '../screens/AboutScreen'
import ThemeSwitch from '../components/ThemeSwitch'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SettingScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Tarefas' }} />
        <Stack.Screen name="TaskDetailScreen" component={TaskDetailScreen} options={{ title: 'Detalhes da Tarefa' }} />
        <Stack.Screen name="EditTaskScreen" component={EditTaskScreen} options={{ title: 'Editar Tarefa' }} />
        <Stack.Screen
          name="SettingsScreen" 
          component={SettingsScreen} 
          options={{ 
            title: 'Configurações',
            headerRight: () => <ThemeSwitch />  
          }} 
        />
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ title: 'Sobre o Aplicativo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
