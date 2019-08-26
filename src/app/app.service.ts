import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BallService {

  private actionSource = new BehaviorSubject('stop');
  currentAction = this.actionSource.asObservable();
  constructor() { }

  changeAction(actionState: string): void {
    this.actionSource.next(actionState);
  }
}
