import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
 
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchTerm: string = '';
  groups = [
    { id: 1, name: 'Angular Enthusiasts' },
    { id: 2, name: 'React Developers' },
    { id: 3, name: 'Vue.js Lovers' }
  ];
  filteredGroups = this.groups;

  searchGroups(): void {
    this.filteredGroups = this.groups.filter(group =>
      group.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectGroup(group: any): void {
    console.log('Selected Group:', group);
    // Logic to navigate to selected group's details
  }
}
