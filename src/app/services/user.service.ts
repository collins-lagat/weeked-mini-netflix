import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { IMovie } from '../models/movie.model';
import { ISeries } from '../models/series.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService, private db: AngularFirestore) { }

  async addToWatchlist(data: IMovie | ISeries) {
    try {
      if (Array.isArray(this.authService.watchlist)) {
        this.authService.watchlist.push(data);
        await this.db.collection('users').doc(this.authService.id).update({
          watchlist: this.authService.watchlist
        });
        console.log('Written');
      } else {
        const watchlist = [];
        watchlist.push(data);
        await this.db.collection('users').doc(this.authService.id).update({
          watchlist
        });
        console.log('Written');
      }
    } catch (error) {
      console.log(error);
    }
  }
  async removeFromWatchlist(data: IMovie | ISeries) {
    if (this.authService.watchlist.length === 0) {
      console.log('watchlist is empty');
      return;
    }
    try {
      if (Array.isArray(this.authService.watchlist)) {
        await this.db.collection('users').doc(this.authService.id).update({
          watchlist: this.removeElement(data)
        });
        console.log('Written');
      } else {
        const watchlist = [];
        await this.db.collection('users').doc(this.authService.id).update({
          watchlist
        });
        console.log('Written');
      }
    } catch (error) {
      console.log(error);
    }
  }

  private removeElement(element: IMovie | ISeries) {
    return this.authService.watchlist.filter((video: IMovie | ISeries) => {
      return video.id.toString() !== element.id.toString();
    });
  }
}
