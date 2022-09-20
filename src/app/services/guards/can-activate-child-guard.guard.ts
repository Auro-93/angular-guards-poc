import { Injectable } from '@angular/core';
import {
  Router,
  CanActivateChild,
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class CanActivateChildGuard implements CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  canActivateChild(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.loggedIn$.pipe(
      map((auth) => {
        if (auth) return true;
        else {
          alert('You must login to access this route');
          const urlTree = createUrlTreeFromSnapshot(route, ['..']);
          this.router.navigateByUrl(urlTree);

          return false;
        }
      })
    );
  }
}
