import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { observer, useValue } from 'startupjs'
import './index.styl'

export default observer(function TodoForm ({ addTask }) {
  const defaultTasks = {
    name: '',
    status: 'open'
  }

  let [tasks, $tasks] = useValue(defaultTasks)

  function enterTaskHandler () {
    if (tasks) {
      $tasks.root.add('tasksCollection', { name: tasks, status: 'open' })
    }
  }

  return pug`
    View.root
      TextInput.field(
        placeholder = 'Enter task' 
        value = tasks.name
        onChange = e => $tasks.set(e.target.value) )
      Button(title = 'Add Task' onPress = enterTaskHandler)
  `
})
