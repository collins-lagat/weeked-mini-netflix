import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { IMovie } from '../models/movie.model';
import { ISeries } from '../models/series.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService, private db: AngularFirestore, private toast: ToastrService) { }

  async addToWatchlist(data: IMovie | ISeries) {
    try {
      if (Array.isArray(this.authService.watchlist)) {
        this.authService.watchlist.push(data);
        await this.db.collection('users').doc(this.authService.id).update({
          watchlist: this.authService.watchlist
        });
        console.log('Written');
        this.toast.success('Videos Added to Watchlist');
      } else {
        const watchlist = [];
        watchlist.push(data);
        await this.db.collection('users').doc(this.authService.id).update({
          watchlist
        });
        console.log('Written');
        this.toast.success('Videos Added to Watchlist');
      }
    } catch (error) {
      console.log(error);
      this.toast.error('Opps! Something went Wrong');
    }
  }
  async removeFromWatchlist(data: IMovie | ISeries) {
    if (this.authService.watchlist.length === 0) {
      this.toast.error('Opps! Watchlist is Empty');
      console.log('watchlist is empty');
      return;
    }
    try {
      if (Array.isArray(this.authService.watchlist)) {
        await this.db.collection('users').doc(this.authService.id).update({
          watchlist: this.removeElement(data)
        });
        console.log('Written');
        this.toast.success('Videos Remove From Watchlist');
      } else {
        const watchlist = [];
        await this.db.collection('users').doc(this.authService.id).update({
          watchlist
        });
        console.log('Written');
        this.toast.success('Videos Remove From Watchlist');
      }
    } catch (error) {
      console.log(error);
      this.toast.error('Opps! Something went Wrong');
    }
  }

  private removeElement(element: IMovie | ISeries) {
    return this.authService.watchlist.filter((video: IMovie | ISeries) => {
      return video.id.toString() !== element.id.toString();
    });
  }
}
