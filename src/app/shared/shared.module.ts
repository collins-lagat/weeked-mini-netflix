import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieCardSmallComponent } from './movie-card-small/movie-card-small.component';

@NgModule({
  declarations: [MovieCardComponent, MovieCardSmallComponent],
  imports: [
    CommonModule
  ],
  exports: [MovieCardComponent, MovieCardSmallComponent]
})
export class SharedModule { }
