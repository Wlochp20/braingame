import { Component, ElementRef } from '@angular/core';
import { Settings } from 'src/app/core/interfaces/settings';
import { SettingsService } from 'src/app/core/services/settings-service/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  otherOption:boolean = false;
  customOptValue:string = "other";
  settings : Settings = this.settingsService.getData()
  
  constructor(private elementRef: ElementRef,private settingsService: SettingsService) {}
  ngOnInit() {
    const settings = localStorage.getItem('settings');
    if (settings !== null) {
      this.settings = JSON.parse(settings);
    } else {
      this.updateLocalStorage();
    }
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

  changeTimer(event:any){
    if (event.target.value>0) {
        this.settings.timer = event.target.value;
        this.updateLocalStorage();
    }
  }

  changeCalcData(event:any,numberRange:number){
      this.settings.numberRange[numberRange] = event.target.value;
      this.updateLocalStorage(); 
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
    this.settings.timerCheck =! this.settings.timerCheck;
    this.updateLocalStorage()
  }

  changeSetting(event: any) {
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
    this.settingsService.setData(this.settings)
  }
}
