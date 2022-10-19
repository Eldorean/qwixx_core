import Value from '../../../entities/Value';
import { ToggleValueStrategy } from '../ToggleValue.types';

class DefaultToggleValueStrategy implements ToggleValueStrategy {
  #value: Value;
  constructor (value: Value) {
    this.#value = value;
  }

  exec = () => {
    const selected = this.#value.selected;
    this.#value.selected = !selected;
    return selected;
  };
}

export default DefaultToggleValueStrategy;
