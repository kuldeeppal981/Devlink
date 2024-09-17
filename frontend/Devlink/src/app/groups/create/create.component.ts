import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  groupName: string = '';
  groupDescription: string = '';
  createGroupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createGroupForm = this.fb.group({
      name: ['', Validators.required],
      about: ['', Validators.required],
      type: ['', Validators.required]
    });
  }
  

  createGroup(): void {
    const newGroup = {
      name: this.groupName,
      description: this.groupDescription,
      creationDate: new Date()
    };

    console.log('Creating Group:', newGroup);
    // Logic to create a new group
  }
  onCreateGroup() {
    if (this.createGroupForm.valid) {
      const newGroup = this.createGroupForm.value;
      // Call your service to create the group
    }
  }
}
