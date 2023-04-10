import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransferedData } from 'src/app/core/services/interfaces/transfered-data';
import { DataService } from 'src/app/core/services/data-service/data.service';

@Component({
  selector: 'app-sum-up',
  templateUrl: './sum-up.component.html',
  styleUrls: ['./sum-up.component.scss'],
})
export class SumUpComponent {
  constructor(private dataService: DataService,private router:Router){}
  time:number = this.dataService.getData().time;
  answers:string[] = this.dataService.getData().answers.slice(0,-1);
  correct = this.answers.filter(str => str === 'correct').length;
  wrong = this.answers.filter(str => str === 'wrong').length;

  navigate(url:string){
    this.router.navigateByUrl(url)
  }
}
