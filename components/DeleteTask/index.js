import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { observer, useDoc } from 'startupjs'
import './index.styl'

export default observer(function DeleteTask ({ taskId }) {
  let [delTask, $delTask] = useDoc('taskCollection', taskId)

  return pug`

    TouchableOpacity.btn(onPress = () => $delTask.root.del('taskCollection.' + taskId))
      Text.deleteBtn.btn Delete

  `
})
