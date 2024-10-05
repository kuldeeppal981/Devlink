import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  name: string = '';
  signupForm!: FormGroup;
  signInForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder,) { }
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSignIn() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      this.authService.signIn({ email: email, password: password })
        .subscribe(
          (response) => {
            console.log('Sign in successful', response);
            this.router.navigate(['/devlink/home']);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userDetails', JSON.stringify(response.data.user));
          },
          (error) => {
            console.error('Sign in failed', error);
          }
        );
    }
   
  }

  isRightPanelActive: boolean = false;

  onSignUpClick() {
    this.isRightPanelActive = true;
  }

  onSignInClick() {
    this.isRightPanelActive = false;
  }

  onSignUp() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      const userData = {
        name: this.signupForm.value.name,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      };
      this.authService.signUp(userData)
      .subscribe(
        (response) => {
          console.log('Sign up successful', response);
          this.router.navigate(['/auth/login']);
        },
        (error) => {
          console.error('Sign up failed', error);
        }
      );
    }
    

 
  }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
  //     if (user) {
  //       const idToken = user.idToken;
  //       this.http.post('/api/auth/google-login', { idToken }).subscribe(
  //         (response: any) => {
  //           localStorage.setItem('token', response.token); // Save the token in local storage
  //           this.router.navigate(['/home']); // Navigate to the home page
  //         },
  //         error => console.error('Error logging in with Google:', error)
  //       );
  //     }
  //   });
  // }
}


// { "_id": "66df29a51d822c9cb39665e6", "name": "kuldeep", "email": "kuldeepp@unfyd.com", "password": "$2a$10$WH4nzKoZW2X6x/fvinpnL.o5QcQVoVLUGagLTvUHi5S9OxEnePCrS", "technology": [], "createdAt": "2024-09-09T17:00:21.770Z", "updatedAt": "2024-09-09T17:00:21.770Z", "__v": 0 }