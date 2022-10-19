import { ColorType } from '../../entities/Color';
import Row from '../../entities/Row';
import { Store } from '../../services/Store/Store.types';

interface FactoryConfig {
  store: Store<Row>
  color: ColorType
}

const RowFactory = ({ store, color }: FactoryConfig) => {
  const rowState = {
    color,
    locked: false
  };

  const row = new Row(rowState);
  store.save(row);
  return row;
};

export default RowFactory;
