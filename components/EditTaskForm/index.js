import React from 'react'
import { TextInput } from 'react-native'
import { observer, useDoc } from 'startupjs'
import './index.styl'

export default observer(function EditTaskForm ({ taskId }) {
  let [task, $task] = useDoc('taskCollection', taskId)

  function editTask (name) {
    $task.set('name', name)
  }

  return pug`
    
    TextInput.field(value = task.name onChangeText = editTask )

  `
})
