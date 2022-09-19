import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
} from '@angular/router';
import { catchError, delay, map, Observable } from 'rxjs';
import { Book } from 'src/app/models/Book';
import { BooksService } from '../books.service';


@Injectable({
  providedIn: 'root',
})
export class BookGenresResolver implements Resolve<Observable<Book[] | boolean>> {
  constructor(private booksService: BooksService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Book[] | boolean> {
    const bookGenre = route.params['bookGenre'];

    return this.booksService.getBooksBelongingToAGenre(bookGenre).pipe(
      delay(400),
      map((books) => {
        if (books.length === 0) {
          throw new Error(`${bookGenre} genre category has no books`);
        } else return books;
      }),
      catchError((err) => {
        return this.router.navigate(['/404', { error: JSON.stringify(err.message) }]);
      })
    );
  }
}
