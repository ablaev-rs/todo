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
    type: true
  })

  function getTasks () {
    if (tasksFilter.active) {
      return tasks.filter(el => el.opened === tasksFilter.type)
    }
    return tasks
  }

  return pug`
    TodoFilter(tasksFilter=tasksFilter setTasksFilter=setTasksFilter)
     
    View.root
      each todo in getTasks()
        - const todoId = todo.id 
        - const todoName = todo.name
        - const todoOpened = todo.opened
        View.tasklist(key = todoId)
          if edit.editStatus && edit.id === todoId 
            EditTaskForm(taskId=todoId)
          else
            Text.taskHeader(styleName = [{taskHeaderClose: !todoOpened}] )= todoName

          View.taskButtons

            if edit.editStatus && edit.id === todoId
              TouchableOpacity.btn(onPress = () => changeEditStatus(todoId, false))
                Text.saveBtn.btn Save
            else

              EditStatus(taskId=todoId)

              TouchableOpacity(onPress = () => changeEditStatus(todoId, true) )
                Text.editBtn.btn Edit

              DeleteTask(taskId=todoId)      
  `
})
