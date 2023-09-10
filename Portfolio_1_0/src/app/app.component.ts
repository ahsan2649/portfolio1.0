import { Component, OnInit } from '@angular/core';
import { Item } from './ItemInterface';
import data from './Items.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio_1_0'
  tabs = ["About", "Apps", "Games", "Web"]
  selectedTab: string = ""
  selectedItem: string = ""
  ChangeTab(tab: string) {
    this.selectedTab = tab;
  }
  items: Item[] = data.items
  apiLoaded: boolean = false;
  ngOnInit() {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
