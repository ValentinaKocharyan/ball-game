import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BallComponent } from './ball/ball.component';
import { ActionsComponent } from './actions/actions.component';
import { BallContainerComponent } from './ball-container/ball-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BallComponent,
    ActionsComponent,
    BallContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
