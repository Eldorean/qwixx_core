import Row from '../Row';

export const GameTypes = {
  BASIC: 'basic',
  MIXED: 'mixed'
} as const;
export const GameTypeList = Object.values(GameTypes);
export type Gametype = keyof typeof GameTypes;

export interface Game {
  type: Gametype
  rows: Row[]
  values: Values[]
}
