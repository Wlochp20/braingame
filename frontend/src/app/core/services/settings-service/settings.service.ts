import { Injectable } from '@angular/core';
import { Settings } from '../../interfaces/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings : Settings = {
    addition: true,
    multiplication: true,
    substraction: true,
    division: true,
    fractions: false,
    negativeNumbers: false,
    numberRange: [0, 10],
    numberOfquestions: 'infinity',
    timerCheck:false,
    timer: 3,
  };

  getData() {
    const storedSettings = localStorage.getItem('settings');
    if (storedSettings) {
        this.settings = JSON.parse(storedSettings);
    }
    return this.settings;
}

  setData(settings: Settings) {
    this.settings = settings;
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }
  
}
