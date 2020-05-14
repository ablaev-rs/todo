import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { observer, useValue, $root } from 'startupjs'
import './index.styl'

export default observer(function TodoForm ({ addTask }) {
  const defaultTasks = {
    name: '',
    status: 'open'
  }

  let [task, $task] = useValue(defaultTasks)

  function enterTaskHandler () {
    if (task) {
      $root.add('tasksCollection', { name: task, status: 'open' })
    }
  }

  return pug`
    View.root
      TextInput.field(
        placeholder = 'Enter task' 
        value = task.name
        onChange = e => $task.set(e.target.value) 
      )
      Button(title = 'Add Task' onPress = enterTaskHandler)
  `
})
