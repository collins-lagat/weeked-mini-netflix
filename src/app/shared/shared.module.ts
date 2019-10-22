import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { BarRatingModule } from 'ngx-bar-rating';

import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieCardSmallComponent } from './movie-card-small/movie-card-small.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { SearchPosterComponent } from './search-poster/search-poster.component';

@NgModule({
  declarations: [MovieCardComponent, MovieCardSmallComponent, NavigationComponent, HeaderComponent, SearchPosterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatCardModule,
    BarRatingModule
  ],
  exports: [MovieCardComponent, MovieCardSmallComponent, NavigationComponent, HeaderComponent, SearchPosterComponent]
})
export class SharedModule { }
