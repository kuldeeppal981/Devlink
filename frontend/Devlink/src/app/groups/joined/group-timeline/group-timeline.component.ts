import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-timeline',  
  templateUrl: './group-timeline.component.html',
  styleUrl: './group-timeline.component.scss'
})
export class GroupTimelineComponent {
  @Input() posts = [
    { author: 'Alice Johnson', content: 'Welcome to the group!', timestamp: new Date() },
    { author: 'Bob Smith', content: 'Excited to be here!', timestamp: new Date() }
  ];

  ngOnInit(): void {
  }
}
