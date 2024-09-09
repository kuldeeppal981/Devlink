import { Component } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss'
})
export class RightSideComponent {
  friends = [
    { name: 'Lisandro Matos' },
    { name: 'Gvozden Boskovsky' },
    { name: 'Hnek Fortuin' },
    { name: 'Lubomir Dvorak' }
  ];
}
