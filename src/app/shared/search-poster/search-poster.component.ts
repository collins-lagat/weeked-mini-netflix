import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie.model';
import { ISeries } from 'src/app/models/series.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-poster',
  templateUrl: './search-poster.component.html',
  styleUrls: ['./search-poster.component.scss']
})
export class SearchPosterComponent implements OnInit {
  @Input() video: IMovie | ISeries;
  @Input() typeUrl: string;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  imdbToRate(imdb) {
    return (Number(imdb) / 10) * 5;
  }

  goTo() {
    this.router.navigate([this.typeUrl, this.video.id])
  }

}
