import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent {
  @Input() a:number = 0;
  @Input() b:number = 0;
  @Input() symbol:String = '+';
}
