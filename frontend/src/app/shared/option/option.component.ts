import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input() content:string = "content";
  @Input() symbol:string = "";
  @Input() isChecked:boolean = false;
  @Output() checked = new EventEmitter<boolean>()

  emitValue(){
    this.checked.emit(true)
  }
}
