import React, { useState } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleSwitch = () => {
    setIsDarkMode(previousState => !previousState)
    // Aqui você pode implementar a lógica para alterar o tema do aplicativo
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <View style={styles.settingOption}>
        <Text style={styles.optionText}>Modo Escuro</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#333' }}
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
          ios_backgroundColor="#ccc"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
      {/* Outras opções de configuração conforme necessário */}
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
  settingOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  optionText: {
    fontSize: 18,
  },
})

export default SettingsScreen
