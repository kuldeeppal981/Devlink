import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { JoinedComponent } from './joined/joined.component';
import { GroupInfoComponent } from './joined/group-info/group-info.component';
import { JoinedPeopleComponent } from './joined/joined-people/joined-people.component';
import { GroupTimelineComponent } from './joined/group-timeline/group-timeline.component';
import { GroupPostComponent } from './joined/group-post/group-post.component';
import { CreateComponent } from './create/create.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
    {
      path: '',
      component: GroupsComponent,
      children: [
        { path: '', redirectTo: 'search', pathMatch: 'full' },
        { path: 'search', component: SearchComponent },
        { path: 'joined', component: JoinedComponent },
        { path: 'create', component: CreateComponent },
        { path: 'group-info/:id', component: GroupInfoComponent }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroupsRoutingModule { }
