import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      // {
      //   path: 'c',
      //   loadChildren: () => import('../Groups/pages.module').then(m => m.pagesModule)
      // },
      {
        path: 'Groups',
        loadChildren: () => import('../groups/groups.module').then(m => m.GroupsModule)
      },
      // {
      //   path: 'events',
      //   loadChildren: () => import('../events/events.module').then(m => m.EventsModule)
      // }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
