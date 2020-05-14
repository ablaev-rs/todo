import React from 'react'
import { TextInput } from 'react-native'
import { observer, useDoc } from 'startupjs'
import './index.styl'

export default observer(function EditTaskForm ({ taskId }) {
  let [tasks, $tasks] = useDoc('tasksCollection', taskId)

  function editTask (name) {
    $tasks.set('name', name)
  }

  return pug`
    
    TextInput.field(value = tasks.name onChangeText = editTask )

  `
})
