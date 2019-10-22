import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: IMovie;
  @Input() typeUrl: string;
  @Input() large = false;
  classObj: object;

  constructor(private router: Router) { }

  ngOnInit() {
    this.classObj = {
      card : !this.large,
      cardLarge: this.large
    };
  }

  goTo() {
    this.router.navigate([this.typeUrl, this.movie.id])
  }

}
