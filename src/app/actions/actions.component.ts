import {Component, OnInit} from '@angular/core';
import { BallService } from '../app.service';
import { Action } from './../@core/enums';
import { Actions } from '../@core/interfaces';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})

export class ActionsComponent implements OnInit {

  public actions: Actions  = {
    start: {
      text: 'Start',
      click: () => this.ballMoveAction('start'),
      disabled: true
    },
    stop: {
      text: 'Stop',
      click: () => this.ballMoveAction('stop'),
      disabled: false
    },
    pause: {
      text: 'Pause',
      click: () => this.ballMoveAction('pause'),
      disabled: false
    },
    play: {
      text: 'Play',
      click: () => this.ballMoveAction('play'),
      disabled: false
    },
    increase: {
      text: '+',
      click: () => this.ballMoveAction('increase'),
      disabled: false
    },
    decrease: {
      text: '-',
      click: () => this.ballMoveAction('decrease'),
      disabled: false
    }
  };
  public actionNames: Array<string> = Object.keys(this.actions);

  constructor(private ballAction: BallService) {}

  ngOnInit() {
  }
  changeDisabledProperty(actions: Actions, disabledItems: Array<string>) {
    const actionsArr = Object.keys(actions);
    for( let i = 0; i < actionsArr.length; i++ ) {
      const currentAction = actionsArr[i];
      actions[currentAction].disabled = !!disabledItems.includes(currentAction);
    }
  }
  ballMoveAction(ballAction: string) {
    this.changeDisabledProperty(this.actions, []);

    switch (ballAction) {
      case 'start':
        this.changeDisabledProperty(this.actions, ['stop', 'pause', 'increase', 'decrease']);
        this.ballAction.changeAction(Action.Start);
        break;
      case 'stop':
        this.changeDisabledProperty(this.actions, ['start']);
        this.ballAction.changeAction(Action.Stop);
        break;
      case 'pause':
        this.changeDisabledProperty(this.actions, ['play']);
        this.ballAction.changeAction(Action.Pause);
        break;
      case 'play':
        this.changeDisabledProperty(this.actions, ['stop', 'pause', 'increase', 'decrease']);
        this.ballAction.changeAction(Action.Play);
        break;
      case 'increase':
        this.changeDisabledProperty(this.actions, ['stop', 'pause', 'increase', 'decrease']);
        this.ballAction.changeAction(Action.Increase);
        break;
      case 'decrease':
        this.changeDisabledProperty(this.actions, ['stop', 'pause', 'increase', 'decrease']);
        this.ballAction.changeAction(Action.Decrease);
        break;
    }
  }
}
