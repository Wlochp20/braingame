import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data-service/data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  numberA:number = this.generateNumber(1,10);
  numberB:number = this.generateNumber(1,10);
  symbol:String = this.generateSymbol();
  numberOfQuestions:number = 5;
  answers:string[] = new Array(this.numberOfQuestions);
  index:number = 1;
  time:number = 0;
  timer: any;
  keyPress:boolean = false;
  isEscPressed:boolean = false;

  constructor(private router:Router, private dataService: DataService){}

  ngOnInit(){
    this.answers[0]="current";
    setInterval(() => {
      this.time++;
    },100)
  }

  generateNumber(min:number,max:number):number{
    return  Math.floor(Math.random() * (max - min + 1) + min);
  }

  generateSymbol():String{
    let symbol = Math.floor(Math.random() * 4);
    if(symbol == 1){
      return "+";
    }else if(symbol == 2){
      return "-";
    }else if(symbol == 3){
      return "*";
    }else{
      return ":";
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKeydown(event: KeyboardEvent) {
    if (!this.isEscPressed){
      this.isEscPressed = true;
      this.keyPress=true;
      this.timer = window.setTimeout(() => {
        this.dataService.setData({time: this.time, answers: this.answers})
        this.router.navigateByUrl('/summary') 
    }, 1400);
    }
  }

  @HostListener('document:keyup.escape', ['$event'])
  onEscapeKeyUp(event: KeyboardEvent) {
    window.clearTimeout(this.timer);
    this.isEscPressed = false;
    this.keyPress=false;
  }

  checkAnswer(event:any){
      this.numberA = this.generateNumber(1,10);
      this.numberB = this.generateNumber(1,10);
      this.symbol = this.generateSymbol();
        if(event == 'true'){
          this.answers[this.index-1] = "correct"  
        }else{
          this.answers[this.index-1] = "wrong"
        }
          this.answers[this.index] = "current"
          this.index++ 
        }
  
}
