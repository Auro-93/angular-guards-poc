import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, forkJoin, map, Subscription, tap } from 'rxjs';
import { Book, Genre } from 'src/app/models/Book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  books: Book[] | undefined;
  bookGenres: Genre[] | undefined;
  isFavourite: boolean = false;
  isInCart: boolean = false;
  loading: boolean = true;
  subscription: Subscription | undefined;
  loadingPlaceholderNum: number = 6;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
   this.subscription = forkJoin(
      this.booksService.getBooks().pipe(
        delay(400),
        map((books) => this.booksService.getSomeBooks(0, 3, books))
      ),
      this.booksService.getBookGenres()
    ).pipe(tap(() => this.loading = false)).subscribe(([books, genres])=> {
      this.books = books;
      this.bookGenres = genres;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
