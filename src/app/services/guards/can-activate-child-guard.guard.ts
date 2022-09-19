import { Injectable } from '@angular/core';
import {
  Router,
  UrlTree,
  CanActivateChild,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({providedIn: "root"})
export class CanActivateChildGuard implements CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  canActivateChild(): Observable<boolean> {
    return this.authService.loggedIn$.pipe(
      map((auth) => {
        if (auth) return true;
        else {
          alert("You must login to access this route")
          return false;
        
        };
      })
    );
  }
}
