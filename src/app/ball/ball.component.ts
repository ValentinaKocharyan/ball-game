import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { style, animate, AnimationBuilder } from '@angular/animations';
import { BallService } from '../app.service';

enum Action {
  Start = 'start',
  Stop = 'stop',
  Pause = 'pause',
  Play = 'play',
  Increase = 'increase',
  Decrease = 'decrease'
}

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

  @ViewChild('el', {static: true}) el: ElementRef;

  private ballWidth: number;
  private ball: any;
  private player: any;
  private speed: number = 2000;

  constructor(private builder: AnimationBuilder, public ballAction: BallService) {}

  ngOnInit() {
    this.ballWidth = this.el.nativeElement.offsetWidth;
    this.ball = this.builder.build([
      style({right: '0px'}),
      style({top: '0px'}),
      animate(this.speed, style({right: 'calc(100% - ' + this.ballWidth + 'px)'})),
      animate(this.speed, style({top: 'calc(100% - ' + this.ballWidth + 'px)'})),
      animate(this.speed, style({right: '0px'})),
      animate(this.speed, style({top: '0px'})),
    ]);
    this.player = this.ball.create(this.el.nativeElement, {});

    this.ballAction.currentAction.subscribe(action => {
      switch (action) {
        case Action.Start:
          this.onStart();
          break;
        case Action.Stop:
          this.onStop();
          break;
        case Action.Play:
          this.onPlay();
          break;
        case Action.Pause:
          this.onPause();
          break;
        case Action.Increase:
          this.onIncrease();
          break;
        case Action.Decrease:
          this.onDecrease();
          break;
      }
    });

  }

  private animate() {
    this.player.reset();

    this.player.onDone(() => {
      this.animate();
    });

    this.player.play();
  }

  onStart() {
    this.animate();
  }
  onStop() {
    this.player.reset();
  }
  onPause() {
    this.player.pause();
  }
  onPlay() {
    this.player.play();
  }
  onIncrease() {
    this.speed = 3000;
  }
  onDecrease() {
    this.speed = 100;
  }
}
