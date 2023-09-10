import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() tabs!: string[];
  @Input() selectedTab!: string;
  @Output() ChangeTabEvent = new EventEmitter<string>();
  GetTabClasses(tab: string) :string{
    let output: string = 'tab '
    if (this.selectedTab == tab) {
      output += 'active'
    }
    return output;
  }
}
