import { BaseModel } from 'startupjs/orm'

export default class TodoModel extends BaseModel {
  async addSelf () {
    await this.root.add(this.getCollection(), {})
  }

  async reset () {
    await this.set('counter', 0)
  }
}
