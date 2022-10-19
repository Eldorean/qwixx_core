import Id from '../../entities/utils/Id';

type StoreItem = Id;

export interface Store<T extends StoreItem> {
  save: (item: T) => void
  getById: (id: string) => T
}
