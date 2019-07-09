import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ball-container',
  templateUrl: './ball-container.component.html',
  styleUrls: ['./ball-container.component.css']
})

export class BallContainerComponent implements OnInit {
  public isStart: boolean = false;
  public isStop: boolean = false;
  public isPause: boolean = false;
  public isPlay: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onBallStarted(ballStart: boolean) {
    this.isStart = ballStart;
  }
  onBallStopped(ballStop: boolean) {
    this.isStop = ballStop;
  }
  onBallPaused(ballPause: boolean) {
    this.isPause = ballPause;
  }
  onBallPlayed(ballPlay: boolean) {
    this.isPlay = ballPlay;
  }
}
