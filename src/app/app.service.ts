import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

enum Action {
  Start = 'start',
  Stop = 'stop',
  Pause = 'pause',
  Play = 'play',
  Increase = 'increase',
  Decrease = 'decrease'
}

@Injectable()
export class BallService {

  private actionSource = new BehaviorSubject('stop');
  currentAction = this.actionSource.asObservable();
  constructor() { }

  changeAction(actionState) {
    this.actionSource.next(actionState);
  }
}
