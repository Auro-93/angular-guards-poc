import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Book } from 'src/app/models/Book';


@Component({
  selector: 'app-book-genre-page',
  templateUrl: './book-genre-page.component.html',
  styleUrls: ['./book-genre-page.component.scss']
})
export class BookGenrePageComponent implements OnInit {


  books$ : Observable<Book[]> | undefined;
  isFavourite: boolean = false;
  isInCart: boolean = false;
  loadingPlaceholderNum: number = 6;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit(): void {
   this.books$ = this.route.data.pipe(map(res => res['genreBooks']))
  }

}
