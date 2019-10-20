import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosRoutingModule } from './videos-routing.module';

import { MatTabsModule } from '@angular/material/tabs';

import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { SeriesComponent } from './series/series.component';
import { SeriesHomeComponent } from './series-home/series-home.component';
import { FeaturedComponent } from './featured/featured.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MovieComponent, HomeComponent, MovieHomeComponent, SeriesComponent, SeriesHomeComponent, FeaturedComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    MatTabsModule,
    SharedModule
  ]
})
export class VideosModule { }
