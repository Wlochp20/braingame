import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './views/game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { AnswerComponent } from './shared/answer/answer.component';
import { CalculationsComponent } from './shared/calculations/calculations.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ButtonComponent } from './shared/button/button.component';
import { BlockComponent } from './shared/block/block.component';
import { SumUpComponent } from './views/sum-up/sum-up.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { TitleComponent } from './shared/title/title.component';
import { SettingsComponent } from './views/settings/settings.component';
import { GameHistoryComponent } from './views/game-history/game-history.component';
import { SettingsTitleComponent } from './shared/settings-title/settings-title.component';
import { OptionComponent } from './shared/option/option.component';
import { SettingsMenuComponent } from './shared/settings-menu/settings-menu.component';
import { FormsModule } from '@angular/forms';
import { FriendsComponent } from './views/friends/friends.component';
import { ProfileComponent } from './views/profile/profile.component';
import { GamemodesComponent } from './views/gamemodes/gamemodes.component';
import { ShortcutsComponent } from './views/shortcuts/shortcuts.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AnswerComponent,
    CalculationsComponent,
    MenuComponent,
    ButtonComponent,
    BlockComponent,
    SumUpComponent,
    LoginComponent,
    RegisterComponent,
    TitleComponent,
    SettingsComponent,
    GameHistoryComponent,
    SettingsTitleComponent,
    OptionComponent,
    SettingsMenuComponent,
    FriendsComponent,
    ProfileComponent,
    GamemodesComponent,
    ShortcutsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
