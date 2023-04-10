import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

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

  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(){
      const inputElement: HTMLInputElement = this.elementRef.nativeElement.querySelector('#answer');
      inputElement.focus();
    }
  
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
