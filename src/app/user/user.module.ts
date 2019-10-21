import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SettingsComponent } from './settings/settings.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SharedModule } from '../shared/shared.module';
import { OptionsComponent } from './options/options.component';
import { VideoStreamingComponent } from './settings/video-streaming/video-streaming.component';
import { NotificationsComponent } from './settings/notifications/notifications.component';
import { AutoPlayComponent } from './settings/auto-play/auto-play.component';
import { SettingsHomeComponent } from './settings/settings-home.component';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    SettingsComponent,
    PersonalInfoComponent,
    PaymentInfoComponent,
    GettingStartedComponent,
    WatchlistComponent,
    UserHomeComponent,
    OptionsComponent,
    VideoStreamingComponent,
    NotificationsComponent,
    AutoPlayComponent,
    SettingsHomeComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    SharedModule
  ]
})
export class UserModule {}
