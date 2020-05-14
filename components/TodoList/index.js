import React, { useState } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { observer } from 'startupjs'
import './index.styl'
import TodoFilter from '../TodoFilter'
import EditStatus from '../EditStatus'
import EditTaskForm from '../EditTaskForm'
import DeleteTask from '../DeleteTask'

export default observer(function Todolist ({ tasks, edit, changeEditStatus }) {
  const [tasksFilter, setTasksFilter] = useState({
    active: false,
    type: 'open'
  })

  function getTasks () {
    if (tasksFilter.active === true) {
      return tasks.filter(el => el.status === tasksFilter.type)
    }
    return tasks
  }

  return pug`
    
    TodoFilter(tasksFilter=tasksFilter, setTasksFilter=setTasksFilter)
     
    View.taskBlock
      each todo in getTasks()
        View.tasklist

          if edit.editStatus && edit.id === todo.id  
            EditTaskForm(taskId=todo.id)
          else
            if todo.status === 'close'
              Text.taskHeaderClose= todo.name
            else 
              Text.taskHeader= todo.name

          View.taskButtons

            if edit.editStatus && edit.id === todo.id
              TouchableOpacity.btn(onPress = () => changeEditStatus(todo.id, false))
                Text.saveBtn.btn Save
            else

              EditStatus(taskId=todo.id)

              TouchableOpacity(onPress = () => changeEditStatus(todo.id, true) )
                Text.editBtn.btn Edit

              DeleteTask(taskId=todo.id)

              
  `
})
