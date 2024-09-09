import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { ProfileComponent } from './home/profile/profile.component';
import { IntroComponent } from './home/timeline-left/intro/intro.component';
import { EventComponent } from './home/timeline-left/event/event.component';
import { PagesComponent } from './home/timeline-left/pages/pages.component';
import { StatusComponent } from './home/timeline-right/status/status.component';
import { AlbumComponent } from './home/timeline-right/album/album.component';
import { TimelineLeftComponent } from './home/timeline-left/timeline-left/timeline-left.component';
import { TimelineRightComponent } from './home/timeline-right/timeline-right/timeline-right.component';
import { TimelineComponent } from './home/profile/component/timeline/timeline.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchBarComponent,
    ProfileComponent,
    TimelineLeftComponent,
    IntroComponent,
    EventComponent,
    PagesComponent,
    TimelineRightComponent,
    StatusComponent,
    AlbumComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
