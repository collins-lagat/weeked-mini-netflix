import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { SeriesService } from 'src/app/services/series.service';
import { ISeries } from 'src/app/models/series.model';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  movies: IMovie[];
  fearuredMovies: IMovie[];
  series: ISeries[];
  featuredSeries: ISeries[];

  constructor(private movieService: MovieService, private seriesService: SeriesService) {}

  ngOnInit() {
    const { movies, featuredMovies } = this.movieService.allMovies;
    const { series, featuredSeries } = this.seriesService.allSeries;
    movies.subscribe((list: IMovie[]) => this.fearuredMovies = list);
    featuredMovies.subscribe((list: IMovie[]) => this.movies = list);
    series.subscribe((list: ISeries[]) => this.series = list);
    featuredSeries.subscribe((list: ISeries[]) => this.featuredSeries = list);
  }

  get featured(): Array<IMovie | ISeries> {
    const arr: Array<IMovie | ISeries> = [];
    if (this.movies && this.series) {
      const movies: IMovie[] = JSON.parse(JSON.stringify(this.movies))
      const series: ISeries[] = JSON.parse(JSON.stringify(this.series))
      for (const iterator of Array(2)) {
        arr.push(movies.splice(Math.floor(Math.random() * movies.length), 1)[0]);
        arr.push(series.splice(Math.floor(Math.random() * series.length), 1)[0]);
      }
    }
    return arr;
  }

}
