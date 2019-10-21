import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  guestRoutes = [
    '/sign-in',
    '/sign-up',
    '/welcome'
  ];

  constructor(private authService: AuthService, private router: Router) {  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.user$.pipe(
        take(1),
        map(user => {
          return !!user;
        }),
        tap(loggedIn => {
          if (loggedIn) {
            console.log('Log out first');
            this.router.navigate(['/']);
          }
        })
      );
  }

}
