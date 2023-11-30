import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      <Text style={styles.info}>
        Este aplicativo To-Do List foi desenvolvido por Renan Torres.
      </Text>
      {/* Adicione mais informações sobre o aplicativo ou a equipe de desenvolvimento */}
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
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
})

export default AboutScreen
