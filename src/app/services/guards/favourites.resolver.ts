import { Injectable } from '@angular/core';
import {
  Resolve,
  Router,
} from '@angular/router';
import { catchError, delay, map, Observable } from 'rxjs';
import { Book } from 'src/app/models/Book';
import { BooksService } from '../books.service';

@Injectable({
  providedIn: 'root',
})
export class FavouritesResolver implements Resolve<Observable<Book[] | boolean>> {
  constructor(private booksService: BooksService, private router: Router) {}

  resolve(
  ): Observable<Book[] | boolean> {
    
    return this.booksService.getFavourites().pipe(
      delay(400),
      map((books) => {
        if (books.length === 0) {
          throw new Error(`Your favourites page is still empty.`);
        } else return books;
      }),
      catchError((err) => {
        return this.router.navigate(['/404', { error: JSON.stringify(err.message) }]);
      })
    );
  }
}
