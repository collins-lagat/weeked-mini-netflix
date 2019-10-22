import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { IMovie } from 'src/app/models/movie.model';
import { faPlusCircle, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: IMovie;
  movieID: string;
  suggestions: IMovie[];
  addToWatchlistIcon;
  shareIcon;
  detailsIndex = 0;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const { movies, featuredMovies } = this.movieService.allMovies;
      console.log('Fired');
      this.movieID = params.get('id');
      movies.subscribe(videos => {
        console.log(videos);
        this.movie = videos.find(video => video.id.toString() === this.movieID);
      });
      featuredMovies.subscribe(videos => this.suggestions = videos.splice(0, 4));
    });
    this.addToWatchlistIcon = faPlusCircle;
    this.shareIcon = faShareAlt;
  }

  getImageURL(url) {
    return `https://image.tmdb.org/t/p/w500${url}`;
  }

  addToWatchList() {
    this.userService.addToWatchlist(this.movie);
  }

}
