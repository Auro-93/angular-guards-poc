import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';
import { Book } from 'src/app/models/Book';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.scss'],
})
export class FavouritesPageComponent implements OnInit, OnDestroy {

  favouriteBooks$: Observable<Book[]> | undefined;
  isFavourite: boolean = true;
  isInCart: boolean = false;
  subscription: Subscription | undefined;


  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.favouriteBooks$ = this.route.data.pipe(
      map((res) => res['favourites'])
    );

    this.subscription = this.authService.loggedIn$
      .pipe(filter(auth => !auth))
      .subscribe(() => this.router.navigate(['/']));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }


}
