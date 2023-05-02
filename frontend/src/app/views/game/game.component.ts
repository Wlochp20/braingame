import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { generate } from 'rxjs';
import { Settings } from 'src/app/core/interfaces/settings';
import { DataService } from 'src/app/core/services/data-service/data.service';
import { SettingsService } from 'src/app/core/services/settings-service/settings.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  settings:Settings = this.settingsService.getData();
  numberOfQuestions:number = 5;
  answers:string[] = new Array(this.numberOfQuestions);
  index:number = 1;
  time:number = 0;
  timer: any;
  keyPress:boolean = false;
  isEscPressed:boolean = false;

  constructor(private router:Router, private dataService: DataService,private settingsService:SettingsService){}

  ngOnInit(){
    this.answers[0]="current";
    setInterval(() => {
      this.time++;
    },100)
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
    
        if(event == 'true'){
          this.answers[this.index-1] = "correct"  
        }else{
          this.answers[this.index-1] = "wrong"
        }
          this.answers[this.index] = "current"
          this.index++ 
        }
        
}
