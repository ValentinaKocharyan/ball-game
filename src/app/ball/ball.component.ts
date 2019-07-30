import { Component, OnInit, Input, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { style, animate, AnimationBuilder } from '@angular/animations';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit, OnChanges {
  @Input() isStart: boolean;
  @Input() isStop: boolean;
  @Input() isPause: boolean;
  @Input() isPlay: boolean;

  @ViewChild('el', {static: true}) el: ElementRef;

  private ballWidth: number;
  private ball: any;
  private player: any;

  constructor(private builder: AnimationBuilder) { }

  ngOnInit() {
    this.ballWidth = this.el.nativeElement.offsetWidth;
    this.ball = this.builder.build([
      style({right: '0px'}),
      style({top: '0px'}),
      animate(2000, style({right: 'calc(100% - ' + this.ballWidth + 'px)'})),
      animate(2000, style({top: 'calc(100% - ' + this.ballWidth + 'px)'})),
      animate(2000, style({right: '0px'})),
      animate(2000, style({top: '0px'})),
    ]);
    this.player = this.ball.create(this.el.nativeElement, {});
  }

  ngOnChanges(changes: SimpleChanges) {
    for(const propName in changes) {
      const change = changes[propName];
      switch (propName) {
        case 'isStart': {
          if (change.currentValue) {
            this.onStart();
          }
          break;
        }
        case 'isStop': {
          if (change.currentValue) {
            this.onStop();
          }
          break;
        }
        case 'isPause': {
          if (change.currentValue) {
            this.onPause();
          }
          break;
        }
        case 'isPlay': {
          if (change.currentValue) {
            this.onPlay();
          }
          break;
        }
      }
    }
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
}
