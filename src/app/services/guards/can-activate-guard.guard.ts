import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({providedIn: "root"})
export class CanActivateGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.loggedIn$.pipe(
      map((auth) => {
        if (auth) return true;
        else {
          alert("You must login to access this route")
          return this.router.createUrlTree(['/home'])
        
        };
      })
    );
  }
}
