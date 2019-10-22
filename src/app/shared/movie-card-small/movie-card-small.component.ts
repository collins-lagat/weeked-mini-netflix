import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card-small',
  templateUrl: './movie-card-small.component.html',
  styleUrls: ['./movie-card-small.component.scss']
})
export class MovieCardSmallComponent implements OnInit {
  @Input() movie: IMovie;
  @Input() large = false;
  @Input() typeUrl: string;
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
