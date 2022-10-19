import { ColorType } from '../../entities/Color';
import Value from '../../entities/Value';
import { Store } from '../../services/Store/Store.types';

interface FactoryConfig {
  store: Store<Value>
  color: ColorType
  number: number
}

const ValueFactory = ({ store, number, color }: FactoryConfig) => {
  const valueState = {
    color,
    value: number,
    disabled: false,
    selected: false
  };

  const value = new Value(valueState);
  store.save(value);
  return value;
};

export default ValueFactory;
