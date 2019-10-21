import { Injectable } from '@angular/core';
import { IMovie } from '../models/movie.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieCollection: AngularFirestoreCollection<IMovie>;
  movies: Observable<IMovie[]>;
  private featuredMoviesCollection: AngularFirestoreCollection<IMovie>;
  featuredMovies: Observable<IMovie[]>;

  constructor(private db: AngularFirestore) {
    this.movieCollection = db.collection<IMovie>('movies');
    this.featuredMoviesCollection = db.collection<IMovie>('featuredMovies');
  }

  get allMovies() {
    this.movies = this.movieCollection.valueChanges();
    this.featuredMovies = this.featuredMoviesCollection.valueChanges();
    return {
      movies: this.movies,
      featuredMovies: this.featuredMovies
    }
  }
}
