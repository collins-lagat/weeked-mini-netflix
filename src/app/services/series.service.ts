import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ISeries } from '../models/series.model';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private seriesCollection: AngularFirestoreCollection<ISeries>;
  private featuredSeriesCollection: AngularFirestoreCollection<ISeries>;
  series: Observable<ISeries[]>;
  featuredSeries: Observable<ISeries[]>;

  constructor(private db: AngularFirestore) {
    this.seriesCollection = db.collection<ISeries>('series');
    this.featuredSeriesCollection = db.collection<ISeries>('featuredSeries');
  }

  get allSeries() {
    this.series = this.seriesCollection.valueChanges();
    this.featuredSeries = this.featuredSeriesCollection.valueChanges();
    return {
      series: this.series,
      featuredSeries: this.series
    }
  }
}
