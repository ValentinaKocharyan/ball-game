import {Component, OnInit} from '@angular/core';
import { BallService } from '../app.service';

interface State {
  text: string;
  click: () => void;
  disabled: boolean;
}

interface Actions {
  start: State;
  stop: State;
  pause: State;
  play: State;
}

enum Action {
  Start,
  Stop,
  Pause,
  Play
}

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
    }
  };
  public actionNames: Array<string> = Object.keys(this.actions);

  constructor(private ballAction: BallService) {}

  ngOnInit() {
  }
  ballMoveAction(ballAction: string) {
    this.actions.start.disabled = false;
    this.actions.stop.disabled = false;
    this.actions.pause.disabled = false;
    this.actions.play.disabled = false;

    switch (ballAction) {
      case 'start':
        this.actions.stop.disabled = true;
        this.actions.pause.disabled = true;
        this.ballAction.changeAction(Action.Start);
        break;
      case 'stop':
        this.actions.start.disabled = true;
        this.ballAction.changeAction(Action.Stop);
        break;
      case 'pause':
        this.actions.play.disabled = true;
        this.ballAction.changeAction(Action.Pause);
        break;
      case 'play':
        this.actions.stop.disabled = true;
        this.actions.pause.disabled = true;
        this.ballAction.changeAction(Action.Play);
    }
  }
}
