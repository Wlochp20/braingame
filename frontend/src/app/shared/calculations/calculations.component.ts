import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent {
  @Input() a:number = 0;
  @Input() b:number = 0;
  @Input() symbol:String = '+';
  @Output() answered = new EventEmitter<string>()
  
  checkAnswer(event:any){
    if ((this.result())==event.target.value) {
      this.answered.emit('true');
      event.target.value = ""
    }else if(event.key=="Enter"){
      this.answered.emit('false');
      event.target.value = ""
    }
  }

  result():number{
    switch(this.symbol){
      case '*':{
        return this.a*this.b;
        break;
      }
      case '+':{
        return this.a+this.b;
      }
      case ':':{
        return this.a/this.b;
      }
      case '-':{
        return this.a-this.b;
      }
    }
    return 0;
  }

}
