import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'

export default observer(function Todofilter ({ taskFilter, setTaskFilter }) {
  function setCloseTaskHandler () {
    setTaskFilter({
      active: true,
      type: 'close'
    })
  }

  function setOpenTaskHandler () {
    setTaskFilter({
      active: true,
      type: 'open'
    })
  }

  function setAllTaskHandler () {
    setTaskFilter({ active: false })
  }

  return pug`
    View.filter
      Text.filterText Filter:
      TouchableOpacity(onPress = setAllTaskHandler)
        Text.filterText All
      TouchableOpacity(onPress = setOpenTaskHandler)
        Text.filterText Open
      TouchableOpacity(onPress = setCloseTaskHandler)
        Text.filterText Close
  `
})
