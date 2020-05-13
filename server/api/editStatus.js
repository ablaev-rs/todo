export default async (req, res) => {
  const { model } = req
  let $editStatus = model.at('taskCollection.' + req.body.data.taskId)
  await $editStatus.subscribe()
  $editStatus.set('status', req.body.data.status)
  res.json({ name: 'EditStatus API' })
}
