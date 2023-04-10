import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent {
  constructor(private location: Location) { }

  goBack(){
    this.location.back();
   }
}
