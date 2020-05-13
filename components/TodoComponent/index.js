import React, { useState } from 'react'
import {
  observer,
  useQuery
} from 'startupjs'
import axios from 'axios'
import './index.styl'
import Navlink from '../Navlink'
import Todoform from '../Todoform'
import Todolist from '../Todolist'
import { View } from 'react-native'

export default observer(function TestComponent ({ style }) {
  let [task, $task] = useQuery('taskCollection', {})
  if (!task) throw $task.addSelf()

/*
  const [api] = useApi(getTaskListApi)
  let task = toJS(api)

  function toJS (proxy) {
    let arr = []
    proxy.map(el => {
      arr.push({
        id: el.id,
        name: el.name,
        status: el.status
      })
    })
    return arr
  }

  async function reset () {
    $task.reset() // custom ORM method (see /model/)
  }
*/

  function addTask (taskname) {
    const newTodo = {
      name: taskname,
      status: 'open'
    }
    setTask(prev => [...task, newTodo])
  }

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
      Todoform(addTask=addTask)
      Todolist(
        task = task 
        edit = edit
        changeEditStatus = changeEditStatus)

  `
})

async function getTaskListApi () {
  try {
    let res = await axios.get('/api/tasklist')
    if (res.status !== 200 || !res.data) {
      throw new Error('No data. Status: ' + res.status)
    }
    console.log(res.data.taskThing)
    return res.data.taskThing
  } catch (err) {
    return err.message
  }
}
