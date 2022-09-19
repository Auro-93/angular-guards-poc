import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Book, Genre } from '../models/Book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  booksEndpoint: string = './assets/data/books.json';
  genresEndpoint: string = './assets/data/book-genres.json';
  favouritesEndpoint: string = './assets/data/favourites.json';

  constructor(private http: HttpClient) {}

  public getBooks() {
    return this.http.get<Book[]>(this.booksEndpoint);
  }

  public getSomeBooks(start: number, end: number, books: Book[]) {
    return books.slice(start, end);
  }

  public getFavourites(){
    return this.http.get<Book[]>(this.favouritesEndpoint);
  }

  public getBookGenres() {
    return this.http.get<Genre[]>(this.genresEndpoint);
  }

  public getBooksBelongingToAGenre(genre: string | null) {
    return this.getBooks().pipe(
      map((books) => books.filter((book) => book.genreSlug === genre))
    );
  }
}
