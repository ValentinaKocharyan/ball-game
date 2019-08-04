import {Component, OnInit, Output, EventEmitter} from '@angular/core';

interface Action {
  text: string;
  click: () => void;
  disabled: boolean;
}

interface Actions {
  start: Action;
  stop: Action;
  pause: Action;
  play: Action;
}

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})

export class ActionsComponent implements OnInit {
  @Output() actionOutput: EventEmitter<string> = new EventEmitter();

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

  constructor() {
  }

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
        this.actionOutput.emit('start');
        break;
      case 'stop':
        this.actions.start.disabled = true;
        this.actionOutput.emit('stop');
        break;
      case 'pause':
        this.actions.play.disabled = true;
        this.actionOutput.emit('pause');
        break;
      case 'play':
        this.actions.stop.disabled = true;
        this.actions.pause.disabled = true;
        this.actionOutput.emit('play');
    }
  }
}
