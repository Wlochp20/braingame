import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isBtnClicked : boolean = false;
  isLogged : boolean = false;

  constructor(private router:Router,public menuService:MenuService){}
  
  onChange(): void{
    this.menuService.changeStatus()
    console.log(this.menuService.getStatus())
  } 

  navigate(url:string){
    this.router.navigateByUrl(url)
  }
}
