import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { style, animate, AnimationBuilder } from '@angular/animations';
import { BallService } from '../app.service';
import { Action } from './../@core/enums';
import { MoveAction } from './../@core/interfaces';

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
  private moveAction: MoveAction = {
    start: () => {
      this.animate();
    },
    stop: () => {
      this.player.reset();
    },
    pause: () => {
      this.player.pause();
    },
    play: () => {
      this.player.play();
    },
    increase: () => {
      this.speed = 3000;
    },
    decrease: (element: any) => {
      element.speed = 100;
    }
  };

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
          this.moveAction.start.call(this);
          break;
        case Action.Stop:
          this.moveAction.stop.call(this);
          break;
        case Action.Play:
          this.moveAction.play.call(this);
          break;
        case Action.Pause:
          this.moveAction.pause.call(this);
          break;
        case Action.Increase:
          this.moveAction.increase.call(this);
          break;
        case Action.Decrease:
          this.moveAction.decrease.call(this);
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
}
