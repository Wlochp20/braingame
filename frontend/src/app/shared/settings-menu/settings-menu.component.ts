import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { MenuService } from 'src/app/core/services/menu/menu.service';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent {
  constructor(private location: Location,private menuService:MenuService) { }

  goBack(){
    this.location.back();
   }

  close(){
    this.location.back();
    setTimeout(() => {
      this.menuService.changeStatus();
    }, 10);
    
   }
}
