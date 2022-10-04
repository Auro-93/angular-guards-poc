import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  UrlTree,
  CanLoad,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({providedIn: "root"})
export class CanLoadGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canLoad(): Observable<boolean | UrlTree> {
    return this.authService.loggedIn$.pipe(
      map((auth) => {
        if (auth) return true;
        else {
          alert("You must login to load this module")
          return this.router.createUrlTree(['/'])
        
        };
      })
    );
  }
}
