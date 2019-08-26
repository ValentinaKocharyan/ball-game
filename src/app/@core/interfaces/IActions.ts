import { State } from './IState';

export interface Actions {
  start: State;
  stop: State;
  pause: State;
  play: State;
  increase: State;
  decrease: State;
}
