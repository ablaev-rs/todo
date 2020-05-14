import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { observer, useDoc } from 'startupjs'
import './index.styl'

export default observer(function DeleteTask ({ taskId }) {
  let [delTask, $delTask] = useDoc('tasksCollection', taskId)

  return pug`
    TouchableOpacity.btn(onPress = () => $delTask.root.del('tasksCollection.' + taskId))
      Text.deleteBtn.btn Delete
  `
})
