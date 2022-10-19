import Id from './Id';

interface Item extends Id {}

class List<T extends Item> {
  #list: T[];

  constructor (list: T[]) {
    this.#list = list;
  }

  getList = () => [...this.#list];
  getByIdOrThrow = (id: string) => {
    const item = this.#list.find(i => i.id === id);
    if (item == null) throw new ReferenceError('item was not found');
    return item;
  };
}

export default List;
