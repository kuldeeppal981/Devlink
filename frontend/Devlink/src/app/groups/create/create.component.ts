import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  groupName: string = '';
  groupDescription: string = '';

  createGroup(): void {
    const newGroup = {
      name: this.groupName,
      description: this.groupDescription,
      creationDate: new Date()
    };

    console.log('Creating Group:', newGroup);
    // Logic to create a new group
  }
}
