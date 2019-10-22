import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  userID$: Observable<any>;
  id;
  watchlist;

  constructor(private fireAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) {
    this.user$ = this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.userID$ = this.fireAuth.authState.pipe(
      map(user => {
        if (user) {
          return user.uid;
        } else {
          return of(null);
        }
      })
    )
    this.user$.subscribe(user => {
      this.watchlist = user.watchlist;
    });
    this.userID$.subscribe(id => this.id = id);
  }


  async sigIn(email: string, password: string) {
    try {
      const cred = await this.fireAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/'])
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    await this.fireAuth.auth.signOut();
    this.router.navigate(['/welcome']);
    return;
  }
}
