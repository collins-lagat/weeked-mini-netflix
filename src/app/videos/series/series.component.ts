import { Component, OnInit, Input } from '@angular/core';
import { faPlusCircle, faShare, faShareAlt, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { SeriesService } from 'src/app/services/series.service';
import { ISeries } from 'src/app/models/series.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  @Input() series: ISeries;
  suggestions: ISeries[];
  addToWatchlistIcon;
  shareIcon;
  playIcon;
  detailsIndex = 0;
  season;
  seriesID;

  constructor(private seriesService: SeriesService, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const { series, featuredSeries } = this.seriesService.allSeries;
      this.seriesID = params.get('id');
      series.subscribe(videos => {
        this.series = videos.find(video => video.id.toString() === this.seriesID);
        this.season = this.series.seasons[0].number;
      });
      featuredSeries.subscribe(videos => this.suggestions = videos.splice(0, 4));
    });
    this.addToWatchlistIcon = faPlusCircle;
    this.shareIcon = faShareAlt;
    this.playIcon = faPlayCircle;
  }

  getImageURL(url) {
    return `https://image.tmdb.org/t/p/w500${url}`;
  }
  addToWatchList() {
    this.userService.addToWatchlist(this.series)
  }

}
