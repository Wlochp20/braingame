import { Injectable } from '@angular/core';
import { TransferedData } from '../interfaces/transfered-data';



@Injectable({
  providedIn: 'root',
})
export class DataService {

  data:TransferedData = {time:0,answers:[""]};
  
  getData(){
    return this.data;
  }

  setData(data: TransferedData) {
    this.data = data;
  }
}
