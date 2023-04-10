import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isBtnClicked : boolean = false;

  constructor(private router:Router){}
  
  onChange(): void{
    this.isBtnClicked = !this.isBtnClicked;
  } 

  navigate(url:string){
    this.router.navigateByUrl(url)
  }
}
