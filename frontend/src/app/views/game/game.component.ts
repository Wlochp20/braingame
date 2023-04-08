import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  numberA:number = this.generateNumber(1,10);
  numberB:number = this.generateNumber(1,10);
  symbol = this.generateSymbol();
  answers:string[] = new Array(7);
  index:number = 1;

  ngOnInit(){
    this.answers[0]="current";
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

  checkAnswer(event:any){
    this.numberA = this.generateNumber(1,10);
    this.numberB = this.generateNumber(1,10);
    this.symbol = this.generateSymbol();
    console.log(event)
    if(event == 'true'){
      this.answers[this.index-1] = "correct"  
    }else{
      this.answers[this.index-1] = "wrong"
    }
    this.answers[this.index] = "current"
    this.index++
    console.log(this.answers)
  }
}
