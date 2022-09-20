import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';
import { Book } from 'src/app/models/Book';
import { AuthService } from 'src/app/services/auth.service';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-recommended-page',
  templateUrl: './recommended-page.component.html',
  styleUrls: ['./recommended-page.component.scss']
})
export class RecommendedPageComponent implements OnInit, OnDestroy {

  books$: Observable<Book[]> | undefined;
  subscription: Subscription | undefined;

  constructor(private booksService: BooksService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.books$ = this.booksService.getBooks().pipe(
      map(books => this.booksService.getSomeBooks(5,9,books))
    )

    this.subscription = this.authService.loggedIn$
    .pipe(filter((auth) => !auth))
    .subscribe(() => this.router.navigate(['/books']));
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
  }

}
