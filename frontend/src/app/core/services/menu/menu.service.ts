import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuStatus:boolean = false;

  getStatus(){
    return this.menuStatus;
  }

  changeStatus() {
    this.menuStatus = !this.menuStatus;
  }
}
