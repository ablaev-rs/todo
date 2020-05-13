import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { observer, useDoc } from 'startupjs'
import './index.styl'

export default observer(function EditStatus ({ taskId }) {
  let [editStatus, $editStatus] = useDoc('taskCollection', taskId)
  function changeStatus (status) {
    $editStatus.set('status', status)
  }

  return pug`
    
    if editStatus.status === "open"
      TouchableOpacity.btn(onPress = () => changeStatus('close'))
        Text.closeBtn.btn Close
    else
      TouchableOpacity.btn(onPress = () => changeStatus('open'))
        Text.openBtn.btn Open


  `
})
