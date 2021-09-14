import React, { useState } from 'react'
import { StyleSheet, Text, CheckBox, TouchableOpacity, View } from 'react-native'

const Task = ({ taskTitle, completedTask }) => {
  const [isSelected, setSelection] = useState(false)

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        {/* <View style={styles.square}></View> */}
        <View>
          <CheckBox value={isSelected} onValueChange={setSelection} />
        </View>
        <Text style={styles.itemText}>{taskTitle}</Text>
      </View>
      <TouchableOpacity style={styles.circular}  onPress={completedTask}></TouchableOpacity>
    </View>
  )
}

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 24,
    height: 24,
    backgroundColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#55BCF6',
  }
})
