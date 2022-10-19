import { v4 } from 'uuid'

class Id {
  #id: string
  get id (): string { return this.#id }

  constructor (id?: string) {
    this.#id = id ?? v4()
  }
}

export default Id
