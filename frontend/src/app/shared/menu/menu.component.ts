import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isBtnClicked : boolean = false;
  
  onChange(): void{
    this.isBtnClicked = !this.isBtnClicked;
  } 
}
