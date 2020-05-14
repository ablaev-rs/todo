import React, { useState } from 'react'
import {
  observer,
  useQuery
} from 'startupjs'
import './index.styl'
import NavLink from '../NavLink'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import { View } from 'react-native'

export default observer(function TodoComponent ({ style }) {
  let [tasks, $tasks] = useQuery('tasksCollection', {})
  if (!tasks) throw $tasks.addSelf()

  const [edit, setEdit] = useState({
    editStatus: false,
    id: null
  })

  function changeEditStatus (id, editStatus) {
    setEdit({ editStatus, id })
  }

  return pug`
    NavLink
    View.body
      TodoForm
      TodoList(
        tasks=tasks 
        edit=edit
        changeEditStatus=changeEditStatus)

  `
})
