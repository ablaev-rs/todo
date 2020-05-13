import React, { useState } from 'react'
import {
  observer,
  useQuery
} from 'startupjs'
import './index.styl'
import Navlink from '../Navlink'
import Todoform from '../Todoform'
import Todolist from '../Todolist'
import { View } from 'react-native'

export default observer(function TestComponent ({ style }) {
  let [task, $task] = useQuery('taskCollection', {})
  if (!task) throw $task.addSelf()

  const [edit, setEdit] = useState({
    editStatus: false,
    id: null
  })

  function changeEditStatus (id, editStatus) {
    setEdit({
      editStatus: editStatus,
      id: id
    })
  }

  return pug`
    Navlink
    View.body
      Todoform
      Todolist(
        task = task 
        edit = edit
        changeEditStatus = changeEditStatus)

  `
})
