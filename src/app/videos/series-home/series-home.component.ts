import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { ISeries } from 'src/app/models/series.model';

@Component({
  selector: 'app-series-home',
  templateUrl: './series-home.component.html',
  styleUrls: ['./series-home.component.scss']
})
export class SeriesHomeComponent implements OnInit {
  series: ISeries[];
  featuredSeries: ISeries[];

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    const { series, featuredSeries } = this.seriesService.allSeries;
    series.subscribe((list: ISeries[]) => this.series = list);
    featuredSeries.subscribe((list: ISeries[]) => this.featuredSeries = list);
  }

}
