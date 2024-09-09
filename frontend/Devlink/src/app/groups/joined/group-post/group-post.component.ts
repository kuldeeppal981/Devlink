import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-post',
  templateUrl: './group-post.component.html',
  styleUrl: './group-post.component.scss'
})
export class GroupPostComponent {
  @Input() posts = [
    { author: 'Alice Johnson', content: 'This is a post in the group.', timestamp: new Date() },
    { author: 'Bob Smith', content: 'Another group post here!', timestamp: new Date() }
  ];
}
