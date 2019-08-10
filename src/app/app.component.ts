import { Component } from '@angular/core';
import { BallService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BallService]
})
export class AppComponent {
  title = 'ball-game';
}
