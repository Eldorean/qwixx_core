import Id from './utils/Id';

interface ScoreState {
  readonly count: number
}

class Score extends Id implements ScoreState {
  constructor (state: ScoreState) {
    super();
    this.count = state.count;
  };

  #convertCountToScore = (count: number): number =>
    [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78][count];

  readonly count;
  get score () { return this.#convertCountToScore(this.count); }
}

export default Score;
