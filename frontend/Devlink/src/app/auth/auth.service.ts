
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiBaseUrl ='http://localhost:5000'
  private apiUrl = `${this.apiBaseUrl}/api/auth/`;

  constructor(private http: HttpClient) { }

 
  signUp(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }


  signIn(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }


  logout(): void {
    localStorage.removeItem('token');  
  }
}
