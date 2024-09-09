import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from '../profile/about/about.component';
import { FriendsComponent } from '../profile/friends/friends.component';
import { PhotosComponent } from '../profile/photos/photos.component';
import { MoreComponent } from './home/profile/component/more/more.component';
import { TimelineComponent } from './home/profile/component/timeline/timeline.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'timeline', component: TimelineComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'friends', component: FriendsComponent
      },
      {
        path: 'photos', component: PhotosComponent
      },
      {
        path: 'more', component: MoreComponent
      },
      { path: '', redirectTo: 'timeline', pathMatch: 'full' }  // Default route
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
