import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieCardSmallComponent } from './movie-card-small/movie-card-small.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [MovieCardComponent, MovieCardSmallComponent, NavigationComponent, HeaderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatToolbarModule
  ],
  exports: [MovieCardComponent, MovieCardSmallComponent, NavigationComponent, HeaderComponent]
})
export class SharedModule { }
