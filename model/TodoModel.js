import { BaseModel } from 'startupjs/orm'

export default class TodoModel extends BaseModel {
  async addSelf () {
    await this.root.add(this.getCollection(), {})
  }

  async addTask (value) {
    console.log(value)
    await this.root.add('taskCollection', { name: value, status: 'open' })
  }

  async reset () {
    await this.set('counter', 0)
  }
}
