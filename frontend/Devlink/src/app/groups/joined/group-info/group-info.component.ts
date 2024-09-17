import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrl: './group-info.component.scss'
})
export class GroupInfoComponent {
  joinedGroups: any[] = [];  
  
  ngOnInit(): void {
  }
}
