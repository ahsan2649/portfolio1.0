import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../ItemInterface';

let bgImagesPath = '/assets/images/Backgrounds/'

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  @Input() items!: Item[];
  @Input() tab!: string;
  @Input() selectedItem: string = "";
  @Output() EmitSelectedItem = new EventEmitter<string>();
  GetBackgroundImage(item: Item) : string {
    if (item.backgroundImage) {
      return bgImagesPath + item.backgroundImage;
    }

    return ""
  }
}
