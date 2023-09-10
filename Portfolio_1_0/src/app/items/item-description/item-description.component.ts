import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { Item } from '../../ItemInterface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.css']
})
export class ItemDescriptionComponent {
  @Input() item !: Item;
  @Output() BackEmitter = new EventEmitter<void>();
}
