import List from './utils/List';
import Value from './Value';

interface ValueListState {
  readonly values: Value[]
}

class ValueList extends List<Value> {
  constructor (state: ValueListState) {
    super(state.values);
  }
}

export default ValueList;
