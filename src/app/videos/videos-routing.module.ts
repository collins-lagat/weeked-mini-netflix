import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { SeriesHomeComponent } from './series-home/series-home.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { FeaturedComponent } from './featured/featured.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FeaturedComponent
      },
      {
        path: 'movies',
        component: MovieHomeComponent,
      },
      {
        path: 'series',
        component: SeriesHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
