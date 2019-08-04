import { Component, OnInit } from '@angular/core';

interface State {
  isStart: boolean;
  isStop: boolean;
  isPause: boolean;
  isPlay: boolean;
}

@Component({
  selector: 'app-ball-container',
  templateUrl: './ball-container.component.html',
  styleUrls: ['./ball-container.component.css']
})

export class BallContainerComponent implements OnInit {

  public state: State = {
    isStart: false,
    isStop: false,
    isPause: false,
    isPlay: false
  }

  constructor() {
  }

  ngOnInit() {
  }

  onAction(ballAction: string) {
    this.state.isStart = false;
    this.state.isStop = false;
    this.state.isPause = false;
    this.state.isPlay = false;

    switch (ballAction) {
      case 'start':
        this.state.isStart = true;
        break;
      case 'stop':
        this.state.isStop = true;
        break;
      case 'pause':
        this.state.isPause = true;
        break;
      case 'play':
        this.state.isPlay = true;
        break;
    }
    /*How handle object's changes*/
    this.state = {...this.state};
  }
}
