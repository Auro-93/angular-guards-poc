import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { delay, Observable, tap } from 'rxjs';
import { Book } from 'src/app/models/Book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent implements OnInit {
  books$: Observable<Book[]> | undefined;
  loading: boolean = false;
  isFavourite: boolean = false;
  isInCart: boolean = false;
  loadingPlaceholderNum: number = 6;

  items: MenuItem[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books$ = this.booksService.getBooks().pipe(
      tap(() => (this.loading = true)),
      delay(400),
      tap(() => (this.loading = false))
    );

    this.items = [
      {label: 'Buy-again', routerLink: '/books/buy-again'},
      {label: 'Recommended', routerLink: '/books/recommended'},
  ];
  }
}
