import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-joined-people',
  
  templateUrl: './joined-people.component.html',
  styleUrl: './joined-people.component.scss'
})
export class JoinedPeopleComponent {
  @Input() joinedPeople = [
    { name: 'Alice Johnson' },
    { name: 'Bob Smith' },
    { name: 'Carol Davis' }
  ];

  ngOnInit(): void {
  }
}
