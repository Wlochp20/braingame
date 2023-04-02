import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './views/game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { AnswerComponent } from './shared/answer/answer.component';
import { CalculationsComponent } from './shared/calculations/calculations.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AnswerComponent,
    CalculationsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
