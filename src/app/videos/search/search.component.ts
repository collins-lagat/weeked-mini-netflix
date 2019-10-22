import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { SeriesService } from 'src/app/services/series.service';
import { IMovie } from 'src/app/models/movie.model';
import { ISeries } from 'src/app/models/series.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies: IMovie[];
  series: ISeries[];
  filteredMovies: IMovie[] = [];
  filteredSeries: ISeries[] = [];
  searchTerm: string;

  constructor(private movieService: MovieService, private seriesService: SeriesService) { }

  ngOnInit() {
    const { movies } = this.movieService.allMovies;
    const { series } = this.seriesService.allSeries;
    movies.subscribe(videos => this.movies = videos);
    series.subscribe(videos => this.series = videos);
  }

  handleSearch() {
    this.filteredMovies = this.movies.filter(movie => movie.title.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()));
    this.filteredSeries = this.series.filter(series => series.title.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()));
  }

}
