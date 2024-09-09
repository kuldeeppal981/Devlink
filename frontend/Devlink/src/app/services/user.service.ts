import { Injectable } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userKey = 'userDetails';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  getUser(): any {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('userDetails');
      return user ? JSON.parse(user) : null;
    }
    return null; 
  }

}
