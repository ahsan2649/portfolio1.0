import { Component, Input } from '@angular/core';
import { Item } from '../ItemInterface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  _tab: string = '';
  @Input() set tab(value: string) {
    this._tab = value;
    this.SelectItem("");
  }
  @Input() items!: Item[];
  @Input() selectedItem: string = "";
  GetSelectedItem(title:string) : any {
    let output:any = this.items.find(item => item.title == title);
    return output;
  }
  SelectItem(item: any) {
    this.selectedItem = item
  }
}
