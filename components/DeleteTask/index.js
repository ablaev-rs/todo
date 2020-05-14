import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { observer, $root } from 'startupjs'
import './index.styl'

export default observer(function DeleteTask ({ taskId }) {
  return pug`
    TouchableOpacity.btn(onPress = () => $root.del('tasksCollection.' + taskId))
      Text.deleteBtn.btn Delete
  `
})
