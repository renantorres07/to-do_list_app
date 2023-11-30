import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const FilterBar = ({ activeFilter, onFilterChange }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.filterButton, activeFilter === 'all' && styles.activeFilter]}
        onPress={() => onFilterChange('all')}
      >
        <Text style={styles.filterText}>Todas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.filterButton, activeFilter === 'pending' && styles.activeFilter]}
        onPress={() => onFilterChange('pending')}
      >
        <Text style={styles.filterText}>Pendentes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.filterButton, activeFilter === 'completed' && styles.activeFilter]}
        onPress={() => onFilterChange('completed')}
      >
        <Text style={styles.filterText}>Concluídas</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  filterText: {
    fontSize: 16,
  },
  activeFilter: {
    backgroundColor: 'blue',
    color: '#fff',
  },
})

export default FilterBar
