import Row from '../../../entities/Row';
import Value from '../../../entities/Value';
import DefaultToggleValueStrategy from './defaultValue';
import { ToggleValueStrategy } from '../ToggleValue.types';

class LastToggleValueStrategy implements ToggleValueStrategy {
  #defaultStrategy: DefaultToggleValueStrategy;
  #row: Row;
  constructor (value: Value, row: Row) {
    this.#defaultStrategy = new DefaultToggleValueStrategy(value);
    this.#row = row;
  }

  exec = () => {
    const selected = this.#defaultStrategy.exec();
    this.#row.locked = selected;
    return selected;
  };
}

export default LastToggleValueStrategy;
