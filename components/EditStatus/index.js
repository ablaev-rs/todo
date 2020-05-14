import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { observer, useDoc } from 'startupjs'
import './index.styl'

export default observer(function EditStatus ({ taskId }) {
  let [editStatus, $editStatus] = useDoc('tasksCollection', taskId)

  function changeStatus (status) {
    $editStatus.set('closed', status)
  }

  return pug`
    if editStatus.closed
      TouchableOpacity.btn(onPress = () => changeStatus(false))
        Text.closeBtn.btn Close
    else
      TouchableOpacity.btn(onPress = () => changeStatus(true))
        Text.openBtn.btn Open
  `
})
