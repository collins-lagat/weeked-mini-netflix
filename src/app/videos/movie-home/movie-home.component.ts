import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit {
  movies: IMovie[];
  fearuredMovies: IMovie[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    const { movies, featuredMovies } = this.movieService.allMovies;
    movies.subscribe((list: IMovie[]) => this.fearuredMovies = list);
    featuredMovies.subscribe((list: IMovie[]) => this.movies = list);
  }

}
