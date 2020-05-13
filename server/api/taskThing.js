export default async (req, res) => {
  const { model } = req
  const $taskThing = model.query('taskCollection', {})
  await $taskThing.subscribe()
  res.json({ name: 'TaskList API', taskThing: $taskThing.get() })
}
