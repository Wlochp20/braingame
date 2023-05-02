import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { max } from 'rxjs';
import { Settings } from 'src/app/core/interfaces/settings';
import { SettingsService } from 'src/app/core/services/settings-service/settings.service';
import { SettingsComponent } from 'src/app/views/settings/settings.component';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent {
  @Output() answered = new EventEmitter<string>()
  settings:Settings = this.settingsService.getData();
  a:number = 0;
  b:number = 0;
  symbol:String = "+";
  constructor(private elementRef: ElementRef, private settingsService:SettingsService) {}

  ngOnInit(){
    this.generateCalc()
  }

  ngAfterViewInit(){
      const inputElement: HTMLInputElement = this.elementRef.nativeElement.querySelector('#answer');
      inputElement.focus();
    }
  
  checkAnswer(event:any){
    if ((this.result())==event.target.value) {
      this.answered.emit('true');
      event.target.value = ""
      this.generateCalc()
    }else if(event.key=="Enter"){
      this.answered.emit('false');
      event.target.value = ""
      this.generateCalc()
    }
  }

  generateSymbol():String{
    console.log(this.settings)
    while (true) {
      let symbol = Math.floor(Math.random() * 4 + 1);
      if(symbol == 1 && this.settings.addition==true){
        return "+";
      }else if(symbol == 2 && this.settings.substraction==true){
        return "-";
      }else if(symbol == 3 && this.settings.multiplication==true){
        return "*";
      }else if (symbol== 4 && this.settings.division==true){
        return ":";
      }
    }
  }
  generateCalc(){
    this.a = this.generateNumber();
    this.b = this.generateNumber();
    this.symbol = this.generateSymbol();
    this.result()
  }

  generateNumber():number{
    let max:number = Number(this.settings.numberRange[1])
    let min:number = Number(this.settings.numberRange[0])
    return Math.floor(Math.random() * (max+1 - min) + min);
  }
  

  result():number{
    
    switch(this.symbol){
      case '*':{
        return this.a*this.b;

      }
      case '+':{
        return this.a+this.b;
      }
      case ':':{
        while (this.a%this.b!=0 || this.b==0) {
          this.a = this.generateNumber();
          this.b = this.generateNumber();
        }
        if(this.a/this.b==1){
          this.a = this.generateNumber();
          this.b = this.generateNumber();
        }
        
        return this.a/this.b;
      }
      case '-':{
        if (this.settings.negativeNumbers) {
          return this.a-this.b;
        }
        while (this.a-this.b<=0) {
          this.a = this.generateNumber();
          this.b = this.generateNumber();
        }
        return this.a-this.b;
      }
    }
    return 0;
    
  }

}
