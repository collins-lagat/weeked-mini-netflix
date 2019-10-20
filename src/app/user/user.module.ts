import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SettingsComponent } from './settings/settings.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';

@NgModule({
  declarations: [SignupComponent, SigninComponent, SettingsComponent, PersonalInfoComponent, PaymentInfoComponent, GettingStartedComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule
  ]
})
export class UserModule { }
