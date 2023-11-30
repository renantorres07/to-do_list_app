import React, { useState } from 'react'
import { View, Switch, StyleSheet } from 'react-native'

const ThemeSwitch = ({ onToggleTheme }) => {
   const [isDarkMode, setIsDarkMode] = useState(false)

   const toggleSwitch = (value) => {
      setIsDarkMode(value)
      onToggleTheme(value)
   }

   return (
      <View style={styles.container}>
         <Switch
            trackColor={{ false: '#ccc', true: '#333' }}
            thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#ccc"
            onValueChange={toggleSwitch}
            value={isDarkMode}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
   },
})

export default ThemeSwitch