import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})

export class ActionsComponent implements OnInit {
  @Output() ballStarted: EventEmitter<boolean> = new EventEmitter();
  @Output() ballStopped: EventEmitter<boolean> = new EventEmitter();
  @Output() ballPaused: EventEmitter<boolean> = new EventEmitter();
  @Output() ballPlayed: EventEmitter<boolean> = new EventEmitter();

  public start: boolean = true;
  public stop: boolean = false;
  public play: boolean = false;
  public pause: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onStart() {
    this.start = false;
    this.stop = true;
    this.pause = true;
    this.ballStarted.emit(!this.start);
    this.ballStopped.emit(!this.stop);
    this.ballPaused.emit(!this.pause);
  }

  onStop() {
    this.start = true;
    this.stop = false;
    this.pause = false;
    this.ballStarted.emit(!this.start);
    this.ballStopped.emit(!this.stop);
    this.ballPaused.emit(this.pause);
  }

  onPause() {
    this.start = false;
    this.stop = false;
    this.pause = false;
    this.play = true;
    this.ballStarted.emit(!this.start);
    this.ballStopped.emit(this.stop);
    this.ballPaused.emit(!this.pause);
    this.ballPlayed.emit(!this.play);
  }

  onPlay() {
    this.start = false;
    this.stop = true;
    this.pause = true;
    this.play = false;
    this.ballStarted.emit(!this.start);
    this.ballStopped.emit(!this.stop);
    this.ballPaused.emit(!this.pause);
    this.ballPlayed.emit(!this.play);
  }
}
