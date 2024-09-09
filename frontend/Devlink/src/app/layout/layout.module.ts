import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';
import { MainPanelComponent } from './main-panel/main-panel.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LeftSideComponent,
    RightSideComponent,
    MainPanelComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
