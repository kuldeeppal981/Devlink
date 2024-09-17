import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
 
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  groups = [
    {
      name: 'Angular Enthusiasts',
      memberCount: 1250,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
      bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    {
      name: 'Frontend Developers',
      memberCount: 3450,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
      bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    {
      name: 'Frontend Developers',
      memberCount: 3450,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
      bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    {
      name: 'Frontend Developers',
      memberCount: 3450,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
      bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    {
      name: 'Frontend Developers',
      memberCount: 3450,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
      bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    {
      name: 'Frontend Developers',
      memberCount: 3450,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
      bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    {
      name: 'Frontend Developers',
      memberCount: 3450,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
      bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    {
      name: 'Frontend Developers',
      memberCount: 3450,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
      bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    {
      name: 'Frontend Developers',
      memberCount: 3450,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
      bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    {
      name: 'Frontend Developers',
      memberCount: 3450,
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg',
      bannerUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    }

  ];
  joinGroup() {
    // Handle the logic when a user clicks the "Join" button
    // alert(`You have joined the group: ${this.group.name}`);
  }

 
 
}
