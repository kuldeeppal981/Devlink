import { Component } from '@angular/core';

@Component({
  selector: 'app-joined',
  
  templateUrl: './joined.component.html',
  styleUrl: './joined.component.scss'
})
export class JoinedComponent {
  joinedGroups = [
    { id: 1, name: 'Angular Enthusiasts' },
    { id: 2, name: 'React Developers' }
  ];

  ngOnInit(): void {
  }

  viewGroup(group: any): void {
    console.log('Viewing Group:', group);
    // Logic to navigate to the selected group's detailed view
  }
}
