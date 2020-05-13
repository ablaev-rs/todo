import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { observer, useValue } from 'startupjs'
import './index.styl'

export default observer(function Todoform ({ addTask }) {
  const defaultTask = {
    name: '',
    status: 'open'
  }

  let [task, $task] = useValue(defaultTask)

  function enterTaskHandler () {
    if (task) {
      $task.root.add('taskCollection', { name: task, status: 'open' })
    }
  }

  return pug`
    View.container
      TextInput.field(
        placeholder = "Enter task" 
        value = task.name
        onChange = e => $task.set(e.target.value) )
      Button(title="Add Task" onPress = enterTaskHandler)
  `
})
