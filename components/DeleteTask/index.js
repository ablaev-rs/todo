import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { observer, useDoc } from 'startupjs'
import './index.styl'

export default observer(function DeleteTask ({ taskId }) {
  let [delTasks, $delTasks] = useDoc('tasksCollection', taskId)

  return pug`
    TouchableOpacity.btn(onPress = () => $delTasks.root.del('tasksCollection.' + taskId))
      Text.deleteBtn.btn Delete
  `
})
