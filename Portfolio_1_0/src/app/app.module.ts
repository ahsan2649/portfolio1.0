import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { TabsComponent } from './tabs/tabs.component';
import { ItemsComponent } from './items/items.component';
import { ItemsFilterByCategoryPipe } from './pipes/items-filter-by-category.pipe';
import { ItemDescriptionComponent } from './items/item-description/item-description.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ImagesComponent } from './items/item-description/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    TabsComponent,
    ItemsComponent,
    ItemsFilterByCategoryPipe,
    ItemDescriptionComponent,
    ItemsListComponent,
    SanitizeUrlPipe,
    ImagesComponent
  ],
  imports: [
    BrowserModule, [YouTubePlayerModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
