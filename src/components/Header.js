import React from "react"
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ title }) => {
   return (
      <View style={styles.header}>
         <Text style={styles.title}>{title}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   header: {
      backgroundColor: '#f2f2f2',
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
   },
   title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333'
   }
})

export default Header