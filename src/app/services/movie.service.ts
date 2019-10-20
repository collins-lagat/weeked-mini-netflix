import { Injectable } from '@angular/core';
import { IMovie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): IMovie[] {
    return [];
  }

}
