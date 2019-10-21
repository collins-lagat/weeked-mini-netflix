import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosRoutingModule } from './videos-routing.module';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';

import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { SeriesComponent } from './series/series.component';
import { SeriesHomeComponent } from './series-home/series-home.component';
import { FeaturedComponent } from './featured/featured.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './search/search.component';
import { VideosComponent } from './home/videos.component';



@NgModule({
  declarations: [MovieComponent, HomeComponent, MovieHomeComponent, SeriesComponent, SeriesHomeComponent, FeaturedComponent, SearchComponent, VideosComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    FontAwesomeModule,
    MatTabsModule,
    MatInputModule,
    SharedModule,
  ]
})
export class VideosModule { }
