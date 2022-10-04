import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class CanActivateChildGuard implements CanActivateChild {
  constructor(private authService: AuthService) {}

  canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.authService.loggedIn$.pipe(
      map((auth) => {
        if (auth) return true;
        else {
          alert('You must login to access this route');
          return createUrlTreeFromSnapshot(route, ['..']);
        
        }
      })
    );
  }
}
