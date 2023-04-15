import { Component, ElementRef } from '@angular/core';
import { Settings } from 'src/app/core/interfaces/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  timerChecked:boolean = false;
  otherOption:boolean = false;
  customOptValue:string = "other";
  settings : Settings = {
    addition: true,
    multiplication: true,
    substraction: true,
    division: true,
    roots: false,
    negativeNumbers: false,
    numberRange: [0, 10],
    numberOfquestions: 'infinity',
    timer: 0,
  };
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const settings = localStorage.getItem('settings');
    if (settings !== null) {
      this.settings = JSON.parse(settings);
    } else {
      this.updateLocalStorage();
    }
    console.log(this.settings)
  }
  
  showOtherInp(event:any){
    if (event.target.value!="infinity") {
      this.otherOption = !this.otherOption;
      setTimeout(() => {
        const inputElement: HTMLInputElement = this.elementRef.nativeElement.querySelector('#custom');
        inputElement.focus()
      }, 1);
    }else{
      this.settings.numberOfquestions = "infinity";
      this.customOptValue = "other";
      this.updateLocalStorage()
    }
  }

  setCustomValue(event:any){
    if(event.target.value!=""){
      this.customOptValue = event.target.value;
      this.settings.numberOfquestions = this.customOptValue;
    }else{
      this.settings.numberOfquestions = "infinity";
    }
    this.otherOption = false;
    this.updateLocalStorage()
  }

  changeOptVisible(){
    this.timerChecked = !this.timerChecked;
  }

  changeSetting(event: any) {
    console.log(event.target.id)
    let id = (event.target as Element).id as keyof Settings;
    if(event.target.id=='negative numbers'){
      id = "negativeNumbers" as keyof Settings
    }
    if (id in this.settings) {
      this.settings[id] = !this.settings[id] as never;
    }  
    this.updateLocalStorage();
  }

  updateLocalStorage(){
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }
}
