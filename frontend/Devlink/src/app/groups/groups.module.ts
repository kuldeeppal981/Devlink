import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from './groups-routing.module';
import { CreateComponent } from './create/create.component';
import { GroupPostComponent } from './joined/group-post/group-post.component';
import { GroupTimelineComponent } from './joined/group-timeline/group-timeline.component';
import { JoinedPeopleComponent } from './joined/joined-people/joined-people.component';
import { GroupInfoComponent } from './joined/group-info/group-info.component';
import { JoinedComponent } from './joined/joined.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchComponent,
    JoinedComponent,
    GroupInfoComponent,
    JoinedPeopleComponent,
    GroupTimelineComponent,
    GroupPostComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GroupsModule { }
