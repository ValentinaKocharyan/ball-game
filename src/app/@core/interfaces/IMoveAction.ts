export interface MoveAction {
  start: (element) => void;
  stop: (element) => void;
  play: (element) => void;
  pause: (element) => void;
  increase: (element) => void;
  decrease: (element) => void;
}
