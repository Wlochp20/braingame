import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './views/game/game.component';
import { SumUpComponent } from './views/sum-up/sum-up.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { SettingsComponent } from './views/settings/settings.component';
import { FriendsComponent } from './views/friends/friends.component';
import { ProfileComponent } from './views/profile/profile.component';
import { GamemodesComponent } from './views/gamemodes/gamemodes.component';
import { ShortcutsComponent } from './views/shortcuts/shortcuts.component';

const routes: Routes = [
  { path:'game', component: GameComponent },
  { path:'summary', component: SumUpComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent},
  { path:'settings', component: SettingsComponent},
  { path:'friends', component: FriendsComponent},
  { path:'profile', component: ProfileComponent},
  { path:'gamemodes', component: GamemodesComponent},
  { path:'shortcuts', component: ShortcutsComponent},
  { path:'', redirectTo:'/game', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
