import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  imagesPath = "../../../../assets/images/";
  @Input() images!: string[];
  @Input() title!: string;
}
