import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SocialLoginComponent } from './social-login/social-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

// import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
// import {
//   GoogleLoginProvider,
//   FacebookLoginProvider
// } from '@abacritt/angularx-social-login';
// const googleLoginOptions = {
//   scope: 'profile email',
// };





@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SocialLoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // SocialLoginModule
  
  ],
  providers: [
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     lang: 'en',
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           'clientId'
    //         )
    //       },
    //       {
    //         id: FacebookLoginProvider.PROVIDER_ID,
    //         provider: new FacebookLoginProvider('clientId')
    //       }
    //     ],
    //     onError: (err) => {
    //       console.error(err);
    //     }
    //   } as SocialAuthServiceConfig,
    // },
    AuthService
  ],
})
export class AuthModule { }
