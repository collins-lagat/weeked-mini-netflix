import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { UserHomeComponent } from './user-home/user-home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SettingsComponent } from './settings/settings.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { OptionsComponent } from './options/options.component';
import { VideoStreamingComponent } from './settings/video-streaming/video-streaming.component';
import { NotificationsComponent } from './settings/notifications/notifications.component';
import { AutoPlayComponent } from './settings/auto-play/auto-play.component';
import { SettingsHomeComponent } from './settings/settings-home.component';

const redirectLoggedInToHome = () => redirectLoggedInTo(['/']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/welcome']);

const routes: Routes = [
  {
    path: 'welcome',
    component: GettingStartedComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInTo }
  },
  {
    path: 'sign-in',
    component: SigninComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInTo }
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInTo }
  },
  {
    path: 'user/options',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedTo },
    component: OptionsComponent,
  },
  {
    path: 'user/watchlist',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedTo },
    component: WatchlistComponent
  },
  {
    path: 'user',
    component: UserHomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedTo },
    children: [
      {
        path: '',
        redirectTo: '/user/options',
        pathMatch: 'full'
      },
      {
        path: 'personal-info',
        component: PersonalInfoComponent
      },
      {
        path: 'payment-info',
        component: PaymentInfoComponent
      },
      {
        path: 'settings',
        component: SettingsHomeComponent,
        children: [
          {
            path: '',
            component: SettingsComponent
          },
          {
            path: 'video-streaming',
            component: VideoStreamingComponent
          },
          {
            path: 'notifications',
            component: NotificationsComponent
          },
          {
            path: 'auto-play',
            component: AutoPlayComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
