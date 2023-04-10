import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-title',
  templateUrl: './settings-title.component.html',
  styleUrls: ['./settings-title.component.scss']
})
export class SettingsTitleComponent {
  @Input() content:string = "title"
}
