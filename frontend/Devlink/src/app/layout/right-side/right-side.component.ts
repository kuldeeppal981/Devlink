import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss'
})
export class RightSideComponent {
  isDropdownOpen:boolean =false
  constructor(private router:Router){

  }
  friends = [
    { name: 'Lisandro Matos' },
    { name: 'Gvozden Boskovsky' },
    { name: 'Hnek Fortuin' },
    { name: 'Lubomir Dvorak' }
  ];

  toggleDropdown(){
    this.isDropdownOpen =!this.isDropdownOpen
  }

  logout(){
    this.router.navigate(['/auth/login'])

  }
}
