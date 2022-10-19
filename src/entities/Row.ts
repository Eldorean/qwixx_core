import { ColorType } from './Color';
import Id from './utils/Id';

interface RowState {
  readonly color: ColorType
  locked: boolean
}

class Row extends Id implements RowState {
  readonly color;
  locked;

  constructor (state: RowState) {
    super();
    this.color = state.color;
    this.locked = state.locked;
  }
}

export default Row;
