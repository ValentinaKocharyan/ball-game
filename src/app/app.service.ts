import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

enum Action {
  Start,
  Stop,
  Pause,
  Play
}

@Injectable()
export class BallService {

  private state: string = 'stop';
  private actionSource = new BehaviorSubject(this.state);
  currentAction = this.actionSource.asObservable();
  constructor() { }

  changeAction(actionState) {
    switch (actionState) {
      case Action.Start:
        this.state = 'start';
        break;
      case Action.Stop:
        this.state = 'stop';
        break;
      case Action.Play:
        this.state = 'play';
        break;
      case Action.Pause:
        this.state = 'pause';
        break;
    }
    this.actionSource.next(this.state);
  }
}
