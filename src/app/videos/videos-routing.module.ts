import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { SeriesHomeComponent } from './series-home/series-home.component';
import { FeaturedComponent } from './featured/featured.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { SearchComponent } from './search/search.component';
import { VideosComponent } from './home/videos.component';

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
            path: 'movies',
            component: MovieHomeComponent,
          },
          {
            path: 'series',
            component: SeriesHomeComponent
          }
        ]
      },
      {
        path: 'search',
        component: SearchComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
