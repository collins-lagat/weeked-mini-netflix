import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: IMovie;
  @Input() large = false;
  classObj: object;

  constructor() { }

  ngOnInit() {
    this.classObj = {
      card : !this.large,
      cardLarge: this.large
    }
  }

}
