import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { GuestGuard } from '../services/guest.guard';

const routes: Routes = [
  {
    path: 'welcome',
    component: GettingStartedComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'sign-in',
    component: SigninComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    canActivate: [GuestGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
