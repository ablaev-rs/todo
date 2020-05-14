import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'

export default observer(function TodoFilter ({ tasksFilter, setTasksFilter }) {
  function setCloseTasksHandler () {
    setTasksFilter({
      active: true,
      type: 'close'
    })
  }

  function setOpenTasksHandler () {
    setTasksFilter({
      active: true,
      type: 'open'
    })
  }

  function setAllTasksHandler () {
    setTasksFilter({ active: false })
  }

  return pug`
    View.root
      Text.filterText Filter:
      TouchableOpacity(onPress = setAllTasksHandler)
        Text.filterText All
      TouchableOpacity(onPress = setOpenTasksHandler)
        Text.filterText Open
      TouchableOpacity(onPress = setCloseTasksHandler)
        Text.filterText Close
  `
})
