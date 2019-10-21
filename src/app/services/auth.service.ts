import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;

  constructor(private fireAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) {
    this.user$ = this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
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
    console.log('fired')
    await this.fireAuth.auth.signOut();
    console.log('Done')
    this.router.navigate(['/welcome']);
    return;
  }
}
