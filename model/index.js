import TaskThing from './TodoModel'

export default function (racer) {
  racer.orm('taskCollection.*', TaskThing)
}
