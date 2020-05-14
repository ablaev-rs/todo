import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { observer, useValue, $root } from 'startupjs'
import './index.styl'

export default observer(function TodoForm ({ addTask }) {
  const defaultTasks = {
    name: '',
    opened: true
  }

  let [task, $task] = useValue(defaultTasks)

  function enterTaskHandler () {
    if (task) {
      $root.add('tasksCollection', { ...task })
    }
  }

  function setTask (name) {
    $task.set('name', name)
  }

  return pug`
    View.root
      TextInput.field(
        placeholder = 'Enter task' 
        value = task.name
        onChangeText  = setTask
      )
      Button(title = 'Add Task' onPress = enterTaskHandler)
  `
})
