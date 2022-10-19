import { ColorType } from './Color';
import Id from './utils/Id';

interface ValueState {
  value: number
  readonly color: ColorType
  selected: boolean
  disabled: boolean
}

class Value extends Id implements ValueState {
  constructor (state: ValueState) {
    super();
    this.value = state.value;
    this.color = state.color;
    this.selected = state.selected;
    this.disabled = state.disabled;
  }

  readonly color;
  readonly value;
  selected;
  disabled;
}

export default Value;
