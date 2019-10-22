import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { SeriesHomeComponent } from './series-home/series-home.component';
import { FeaturedComponent } from './featured/featured.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { SearchComponent } from './search/search.component';
import { VideosComponent } from './home/videos.component';
import { MovieComponent } from './movie/movie.component';
import { SeriesComponent } from './series/series.component';
import { VideoWrapperComponent } from './video-wrapper/video-wrapper.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/welcome']);

const routes: Routes = [
  {
    path: '',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    component: HomeComponent,
    children: [
      {
        path: '',
        component: VideosComponent,
        children: [
          {
            path: '',
            component: FeaturedComponent
          },
          {
            path: 'movies-home',
            component: MovieHomeComponent,
          },
          {
            path: 'series-home',
            component: SeriesHomeComponent
          },
        ]
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ]
  },
  {
    path: 'movies',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    component: VideoWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: ':id',
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: MovieComponent
      }
    ]
  },
  {
    path: 'series',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    component: VideoWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: ':id',
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: SeriesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
